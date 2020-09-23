<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'message',
        'room_id',
        'sender_id',
    ];
    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
}
