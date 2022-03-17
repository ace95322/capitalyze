<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;

class UserHelper
{

    public static function getIsUserPlanTypeFree(){
        if(isset(auth('api')->user()->is_admin) && $user = auth('api')->user()->is_admin != 1){
            $sub = $user->active_subscription()->first();
            Log::info("Active plans => ".print_r($sub->plan->free, true));
            return $sub->plan->free;
        }
        return 0;
    }

}
