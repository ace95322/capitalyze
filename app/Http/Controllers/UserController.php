<?php

namespace App\Http\Controllers;

use Spotify;
use App\Album;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use App\User;
use App\Notifications\ArtistRequest;
use App\Artist;
use App\Exceptions\FEException;
use App\Plan;
use App\Permission;


use App\Http\Resources\AlbumResource;
use App\Subscription;
use Illuminate\Support\Facades\Notification;
use App\Helpers\Billing\StripeAPI;
use App\Helpers\Billing\PayPalAPI;
use App\Helpers\Media;
use App\Http\Resources\Artist\ArtistResource_basic;
use App\Http\Resources\Artist\ArtistResource_index;
use App\Http\Resources\Playlist\PlaylistResource_basic;
use App\Http\Resources\Playlist\PlaylistResource_index;
use App\Http\Resources\Podcast\PodcastResource_basic;
use App\Http\Resources\profiles\UserResource;
use App\Http\Resources\Song\SongResource_basic;
use App\Http\Resources\Song\SongResource_basictoplay;
use App\Http\Resources\Spotify\ArtistResource as SpotifyArtistResource;
use App\Http\Resources\User\UserResource_index;
use App\Playlist;
use App\Podcast;
use App\Setting;
use Illuminate\Database\Eloquent\Collection;
use App\Playing;
use App\Role;

class UserController extends Controller
{
      /**
       * Get the account informations of the current logged user.
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function account(Request $request)
      {
            return new UserResource_index(auth()->user());
      }

      /**
       * Sub the user for a plan.
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function subscribe(Request $request)
      {
            $user = auth()->user();
            $plan = Plan::find($request->plan['id']);

            if ($subscription = $user->active_subscription()->first()) {
                  $this->cancelCurrentSubscription($subscription->id);
            }
            // creating the subscription on Stripe if the plan is not free and the connection is set
            $this->createSubscription($user, $plan, $request->all());

            return response()->json(['message' => 'SUCCESS'], 200);
      }

      /**
       * Sub the user for a plan.
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function createSubscription(User $user, Plan $plan, $request)
      {
            // creating the subscription on Gatways
            $gateway = $request['gateway'];
            if (!$plan->free) {
                  if ($gateway === 'stripe') {
                        $paymentMethod = isset($request['paymentMethod']) ? $request['paymentMethod'] : null;
                        try {
                              $stripe = new StripeAPI();
                              $stripe_subscription = $stripe->createSubscription($user, $plan, $paymentMethod);
                              $gateway_id =  $stripe_subscription->id;
                        } catch (\Exception $e) {
                              throw $e;
                        }
                  }
                  if ($gateway === 'paypal') {
                        // subscription is created on the client after the approval of the client
                        $gateway_id = $request['paypal_subscription_id'];
                  }
            }
            // creating the subscription on the local database
            Subscription::create([
                  'plan_id' => $plan->id,
                  'user_id' => $user->id,
                  'status' => 'active',
                  'gateway' => $gateway,
                  'gateway_id' => isset($gateway_id) ? $gateway_id : null,
                  // 'renews_at' => isSet($stripe_subscription) ? Carbon::createFromTimestamp($stripe_subscription->current_period_end)->toDateTimeString() : null
            ]);

            /**
             * After create subscription add new user role called subscriber.
             */
            $role = Role::where('name', 'Subscribers')->first()->id;
            $user->roles()->attach($role);

            return response()->json(['message' => 'SUCCESS'], 200);
      }
      public function playing(Request $request)
      {
            if (!auth()->check()) {
                  throw new FEException('Your session expired please login again.', '', 400);
            }
            if (!auth()->user()->playing) {
                  Playing::create([
                        'user_id' => auth()->id()
                  ]);
            }

            auth()->user()->playing()->update([
                  'playlist' => isset($request->playlist) ? $request->playlist : '',
                  'genre_id' => isset($request->genre_id) ? $request->genre_id : '',
                  'radio' => isset($request->radio) ? $request->radio : '',
                  'playlist_index' => isset($request->index) ? $request->index : ''
            ]);

            return auth()->user()->playing;
      }

      /**
       * Cancel a subscription.
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function cancelSubscriptionRequest(Request $request)
      {
            if (!Hash::check($request->password, auth()->user()->password)) {
                  return response()->json(['message' => 'Incorrect password'], 400);
            }

            return $this->cancelCurrentSubscription($request->subscription_id);
      }

      /**
       * Cancel a subscription.
       * @param  \Illuminate\Http\Subscription  $subscription
       * @return \Illuminate\Http\Response
       */
      public function cancelCurrentSubscription($subscription_id)
      {
            $subscription = Subscription::find($subscription_id);
            if ($subscription->gateway_id) {
                  if ($subscription->gateway === 'stripe') {
                        $stripe = new StripeAPI();
                        try {
                              $stripe->cancelSubscription($subscription);
                        } catch (\Exception $e) {
                              throw new FEException('Failed to delete subscription from Stripe', $e->getMessage(), 400);
                        }
                  }
                  if ($subscription->gateway === 'paypal') {
                        $paypal = new PayPalAPI();
                        try {
                              $paypal->cancelSubscription($subscription);
                        } catch (\Exception $e) {
                              throw new FEException('Failed to delete subscription from PayPal', $e->getMessage(), 400);
                        }
                  }
            }
            $subscription->status = 'canceled';
            return $subscription->save();
      }

      /**
       * Get all the users.
       *
       * @return \Illuminate\Http\Response
       */
      public function index()
      {
            return UserResource_index::collection(User::where('is_admin', 0)->orderBy('created_at', 'desc')->get());
      }
      /**
       * Get the user data to display the profile.
       *
       * @param  \App\User  $id
       * @return \Illuminate\Http\Response
       */
      public function show($id)
      {
            $user = User::find($id);
            if ($user && !$user->is_admin) {
                  return new UserResource($user);
            } else {
                  return response()->json(['message' => 'NOT_FOUND'], 404);
            }
      }
      /**
       * store the specified resource.
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function store(Request $request)
      {
            $request->validate([
                  'email' => 'required|email|unique:users',
                  'name' => 'required|unique:users',
                  'password' => 'required|min:8',
            ]);



            $user = User::create([
                  'email' =>  $request->email,
                  'name' =>  $request->name,
                  'available_disk_space' => $request->available_disk_space,
                  'password' =>  Hash::make($request->password)
            ]);

            if ($file = $request->file('avatar')) {
                  Media::updateImage($user, $file, 'avatar', 200);
            } else {
                  Media::setDefault($user, 'defaults/images/user_avatar.png', 'avatar');
            }
            // attaching the roles
            if (isset($request->roles)) {
                  foreach (json_decode($request->roles) as $role) {
                        if ($role->id != '3') {
                              // the user role id is 3 will be attached after
                              // the creation of the user automatically
                              $user->roles()->attach($role->id);
                        }
                  }
            }
            if (isset($request->permissions)) {
                  $this->updatePermissions($user, json_decode($request->permissions, true));
            }
            return response()->json(null, 201);
      }
      /**
       * Get the current user notifications.
       *
       * @return \Illuminate\Http\Response
       */
      public function notifications()
      {
            $user = auth()->user();
            return $user->notifications()->where('type', 'App\\Notification\\Message')->orWhere('type', 'App\Notifications\FriendRequest')->orderBy('read_at')->take(5)->get();
      }
      /**
       * Update the specified resource.
       *
       * @param  \Illuminate\Http\Request  $request
       * @param  \App\user  $id
       * @return \Illuminate\Http\Response
       */
      public function update(Request $request, $id)
      {
            $request->validate([
                  'email' => 'required|email|unique:users,email,' . $id,
                  'name' => 'required|unique:users,name,' . $id,
                  'password' => 'min:8'
            ]);
            $user = User::find($id);

            if ($file = $request->file('avatar')) {
                  Media::updateImage($user, $file, 'avatar', 200);
            }

            if (isset($request->roles)) {
                  $this->updateRoles($user, json_decode($request->roles, true));
            }
            if (isset($request->permissions)) {
                  $this->updatePermissions($user, json_decode($request->permissions, true));
            }
            // logout the user
            $user->tokens->each(function ($token) {
                  $token->delete();
            });
            $user->email = $request->email;
            $user->available_disk_space = $request->available_disk_space;
            $user->name = $request->name;
            if (isset($request->password)) {
                  $user->password = Hash::make($request->password);
            }
            $user->save();
            return response()->json(['message' => 'SUCCESS'], 200);
      }
      /**
       * Update the roles of the user.
       *
       * @param  \Illuminate\Http\Request  $request
       * @param  $roles
       * @return \Illuminate\Http\Response
       */
      public static function updateRoles(User $user, $roles)
      {
            // detach all roles
            \DB::table('role_user')->where('user_id', $user->id)->delete();
            foreach ($roles as $role) {
                  $user->roles()->attach($role['id']);
                  if ($role['name'] == 'admin') {
                        $user->update(['is_admin' => 1]);
                  } else {
                        $user->update(['is_admin' => 0]);
                  }
            }
      }
      /**
       * Update the permissions of the user.
       *
       * @param  \Illuminate\Http\Request  $request
       * @param  $permissions
       * @return \Illuminate\Http\Response
       */
      public function updatePermissions(User $user, $permissions)
      {
            // detach all permissions
            \DB::table('user_permission')->where('user_id', $user->id)->delete();
            // attach the given permissions
            foreach ($permissions as $permission) {
                  Permission::find($permission['id']);
                  $user->permissions()->attach($permission['id']);
            }
      }
      /**
       * Save the account settings.
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function saveAccountSettings(Request $request)
      {
            $request->validate([
                  'name' => 'required'
            ]);
            $user = User::find($request->id);
            if ($request->currentPassword || $request->newPassword) {
                  $request->validate([
                        'newPassword' => 'required|min:8'
                  ]);
                  $request->validate([
                        'currentPassword' => 'required|min:8'
                  ]);
                  if (!Hash::check($request->currentPassword, $user->password)) {
                        throw new FEException('Current password does not match', '', 422);
                  }
                  $user->password = Hash::make($request->newPassword);
            }

            if ($file = $request->file('avatar')) {
                  Media::updateImage($user, $file, 'avatar', 200);
            }

            $user->name = $request->name;
            $user->lang = $request->lang;
            $user->hide_activity = $request->hide_activity ? 1 : 0;
            $user->save();
            return response()->json(['message' => 'SUCCESS'], 200);
      }
      /**
       * Send notifcation to the admins: artist account request.
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function requestArtistAccount(Request $request)
      {
            $request->validate([
                  'firstname' => 'required|min:3',
                  'lastname' => 'required|min:3',
                  'displayname' => 'required|min:3|unique:artists',
                  'country' => 'required',
                  'email' => 'required|email',
                  'phone' => 'required',
                  'address' => 'required'
            ]);

            $artist = Artist::create([
                  'firstname' => $request->firstname,
                  'lastname' => $request->lastname,
                  'displayname' => $request->displayname,
                  'country' => $request->country,
                  'address' => $request->address,
                  'phone' => $request->phone,
                  'email' => $request->email,
                  'spotify_link' => $request->spotify_link,
                  'youtube_link' => $request->youtube_link,
                  'soundcloud_link' => $request->soundcloud_link,
                  'itunes_link' => $request->itunes_link,
            ]);

            if ($file = $request->file('avatar')) {
                  Media::updateImage($artist, $file, 'avatar', 200);
            } else {
                  Media::setDefault($artist, 'defaults/images/artist_avatar.png', 'avatar');
            }

            $admins = User::whereHas('roles', function ($query) {
                  $query->where('name', 'admin');
            })->orWhere('is_admin', 1)->get();
            $user = auth()->user();

            Notification::send($admins, new ArtistRequest($user, new ArtistResource_index($artist)));
            $user->requested_artist_account = 1;
            $user->save();
            return response()->json(['message' => 'SUCCESS'], 200);
      }
      /**
       * Get the current user playlists.
       *
       * @return \Illuminate\Http\Response
       */
      public function playlists()
      {
            $user = auth()->user();
            $playlists = new \stdClass();
            $playlists->followed = $this->follows('playlist');
            $playlists->own = PlaylistResource_index::collection($user->playlists()->where('created_by', '!=', 'admin')->get());
            return response()->json($playlists, 200);
      }
      /**
       * Get the current user followed playlists.
       *
       * @return \Illuminate\Http\Response
       */
      public function follows($type)
      {
            $collection = new Collection();
            $localIds =
                  \DB::table('follows')
                  ->select(\DB::raw('followed_id as id'))
                  ->where('user_id', auth()->user()->id)
                  ->where('followed_type', $type)
                  ->where('followed_source', 'local')
                  ->get()->pluck('id')->toArray();

            if (count($localIds)) {
                  if ($type == 'artist') {
                        $local_follows = ArtistResource_basic::collection(collect(Artist::whereIn('id', $localIds)->get()));
                  } else if ($type === 'podcast') {
                        $local_follows = PodcastResource_basic::collection(collect(Podcast::whereIn('id', $localIds)->get()));
                  } else if ($type === 'playlist') {
                        $local_follows = PlaylistResource_basic::collection(collect(Playlist::whereIn('id', $localIds)->get()));
                  }
                  $collection = $collection->toBase()->merge($local_follows);
            }

            if (Setting::get('provider_spotify')) {
                  $spotifyIds =
                        \DB::table('follows')
                        ->select(\DB::raw('followed_id as id'))
                        ->where('user_id', auth()->user()->id)
                        ->where('followed_type', $type)
                        ->where('followed_source', 'spotify')
                        ->get()->pluck('id')->toArray();
                  if (count($spotifyIds)) {
                        if ($type == 'artist') {
                              $spotify_follows = SpotifyArtistResource::collection(collect(((object) Spotify::artists($spotifyIds)->get()['artists'])));
                        }
                        $collection = $collection->toBase()->merge($spotify_follows);
                  }
            }
            // disabled to limit the API requests
            // if( Setting::get('provider_listenNotes') ) {
            //     $listenNotesIds =
            //     \DB::table('follows')
            //         ->select(\DB::raw('followed_id as id'))
            //         ->where('user_id', auth()->user()->id)
            //         ->where('followed_type', $type)
            //         ->where('followed_source', 'listenNotes')
            //         ->get()->pluck('id')->toArray();
            // if( count($listenNotesIds) ) {
            //     if( $type == 'podcast' ) {
            //         $listenNotes_follows = ListenNotesPodcastResource::collection(ListenNotes::podcastsWithIDS(join(',', $listenNotesIds)));
            //     }
            //     $collection = $collection->toBase()->merge($listenNotes_follows);
            // }
            // }

            return $collection;
      }
      /**
       * Get the current user recent plays.
       *
       * @return \Illuminate\Http\Response
       */
      public function recentPlays()
      {
            $user = auth()->user();
            return SongResource_basictoplay::collection(\App\Song::whereIn('id', $user->plays()->selectRaw('content_id, COUNT(*)')->groupBy('content_id')->get()->pluck('content_id'))->orderBy('created_at', 'desc')->take(10)->get());
      }
      /**
       * Get the current user liked albums.
       *
       * @return \Illuminate\Http\Response
       */
      public function likes($type)
      {
            return auth()->user()->likes($type);
      }
      /**
       * Get the current user liked songs.
       *
       * @return \Illuminate\Http\Response
       */
      public function likedSongs()
      {
            return SongResource_basictoplay::collection(\DB::table('likes')->select(\DB::raw('content_id as id'), \DB::raw('user_id as liker_id'))->where('user_id', auth()->user()->id)->where('content_type', 'song')->join('songs', 'songs.id', '=', 'liker_id')->get());
      }
      /**
       * Get the current user followed podcasts.
       *
       * @return \Illuminate\Http\Response
       */
      public function followedPodcasts()
      {
            return PodcastResource_basic::collection(\DB::table('follows')->select(\DB::raw('content_id as id'), \DB::raw('user_id as follower_id'))->where('user_id', auth()->user()->id)->where('content_type', 'podcast')->join('podcasts', 'podcasts.id', '=', 'follower_id')->get());
      }
      /**
       * Follow a playlist.
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function followed_playlists(Request $request)
      {
            return auth()->user()->followed_playlists();
      }
      /**
       * Unfollow a playlist.
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function unFollowPlaylist(Request $request)
      {
            if ($follow = \App\PlaylistFollow::where('user_id', auth()->id())->where('playlist_id', $request->playlist_id)->first()) {
                  $follow->delete();
                  return response()->json(['message' => 'SUCCESS'], 200);
            }
            return response()->json(['message' => 'NOT_FOUND'], 404);
      }
      /**
       * Like.
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function like(Request $request)
      {
            return \DB::table('likes')
                  ->insert([
                        'content_type' => $request->type,
                        'content_id' => $request->id,
                        'content_source' => $request->origin,
                        'user_id' => auth()->user()->id
                  ]);
      }
      public function dislike(Request $request)
      {
            $like = \DB::table('likes')
                  ->where([
                        'content_type' => $request->type,
                        'content_id' => $request->id,
                        'content_source' => $request->origin,
                        'user_id' => auth()->user()->id,
                  ]);
            if ($like) {
                  return $like->delete();
            }
            return;
      }
      /**
       * follow .
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function follow(Request $request)
      {
            return \DB::table('follows')
                  ->insert([
                        'followed_type' => $request->type,
                        'followed_id' => $request->id,
                        'followed_source' => $request->origin,
                        'user_id' => auth()->user()->id
                  ]);
      }

      /**
       * follow .
       *
       * @param  \Illuminate\Http\Request  $request
       * @return \Illuminate\Http\Response
       */
      public function unfollow(Request $request)
      {
            $follow = \DB::table('follows')
                  ->where([
                        'followed_type' => $request->type,
                        'followed_id' => $request->id,
                        'followed_source' => $request->origin,
                        'user_id' => auth()->user()->id,
                  ]);
            if ($follow) {
                  return $follow->delete();
            }
            return;
      }

      public function purchases()
      {

            $sales = auth()->user()->purchases()->with('products.productable')->get();
            // possible product types V2.1
            $songs = [];
            $albums = [];

            foreach ($sales as $sale) {
                  foreach ($sale->products as $product) {
                        if ($product->productable_type == 'App\Song') {
                              array_push($songs, new SongResource_basic($product->productable));
                        } else if ($product->productable_type == 'App\Album') {
                              array_push($albums, new AlbumResource($product->productable));
                        }
                  }
            }

            return [
                  'albums' => $albums,
                  'songs' => $songs
            ];
      }
      /*
     * Match the users based for the gives keyword ( search ).
     * @param $keyword
     * @return \Illuminate\Database\Eloquent\Collection
     */
      public function matchUsers()
      {
            $keyword = request()->query('query');
            return UserResource::collection(User::where('email', 'like', '%' . $keyword . '%')->where('is_admin', 0)->get());
      }
      /**
       * Remove the specified resource from storage.
       *
       * @param  \App\User  $id
       * @return \Illuminate\Http\Response
       */
      public function destroy($id)
      {
            $user = User::find($id);
            $user->delete();
            return response()->json(['message' => 'SUCCESS'], 200);
      }

      public function block(User $user)
      {
            $user->blocked = 1;
            $user->save();
            return response()->json();
      }

      public function unblock(User $user)
      {
            $user->blocked = 0;
            $user->save();
            return response()->json();
      }
}
