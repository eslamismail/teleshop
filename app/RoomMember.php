<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomMember extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
