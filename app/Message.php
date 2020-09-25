<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'message',
        'room_id',
        'sender_id',
        'images',
    ];

    protected $hidden = [
        'images',
    ];
    protected $appends = [
        'images_url',
    ];

    public function getImagesUrlAttribute()
    {
        if (!empty($this->images) && count(json_decode($this->images)) > 0) {
            $images = [];
            foreach (json_decode($this->images) as $key => $value) {
                $images[] = url('uploads/' . $value);
            }
            return $images;
        }
        return [];
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }
}
