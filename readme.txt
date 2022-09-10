The documentation is available online

check for latest updates:

docs.muzzie.webkunft.com

--------------------

to check the docs locally:

You need a server to run the documentation offline on your machine

1. copy the docs folder into your server directory (public_html for example).

2. start the server.

Otherwise you can check the files content,everything is organized and every file title indicates what's inside it (scroll to the bottom to see the file content).

Update info (1st)
=========
1. Search.php -> line no. 172
2. SongResource_index.php -> line no. 38

Update info (2nd)
=========
1. song play only for logged user => resources\js\components\player\pages\Song.vue -> line no. 97, 236, 344 
+ resources\js\components\elements\single-items\SongExpo.vue -> line no. 3, 41, 121, 170
2. If the content is subscription only. if a free user try to play a song it will redirect them to subscription page.
3. Only for subscriber user by default active => resources\js\components\artist\pages\songs.vue -> line no. 282

#project directory
/var/www/vhosts/objective-montalcini.74-208-115-41.plesk.page/httpdocs
