<?php

namespace App;

use App\Events\NewRoom;
use broadcast;
use Illuminate\Database\Eloquent\Model;

class RoomMember extends Model
{

    public static function boot()
    {
        parent::boot();
        static::created(function ($item) {
            broadcast(new NewRoom($item));
        });
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
