<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Message;
use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = Room::whereHas('members', function ($q) {
            $q->where('user_id', auth()->id());
        })->get();
        return response()->json(['rooms' => $rooms]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $messages = Message::with('sender')->where('room_id', $id)->get();
        return response()->json(['messages' => $messages]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function sendMessage(Request $request, $id)
    {
        $request->validate([
            'message' => 'required|string|min:1',
        ]);

        $data = $request->only(['message']);
        $data['sender_id'] = auth()->id();
        $data['room_id'] = $id;
        $message = Message::create($data);
        $message = Message::with('sender')->find($message->id);
        broadcast(new NewMessage($message));
        return response()->json([
            'message' => 'message sent successfully',
        ]);
    }
}
