<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;

class UserHelper
{

    public static function getIsUserPlanTypeFree(){
        if($user = auth('api')->user()){
            $sub = $user->active_subscription()->first();
            Log::info("Active plans => ".print_r($sub->plan->free, true));
            return $sub->plan->free;
        }
        return 0;
    }

}
