<?php

use Illuminate\Support\Facades\Route;

Broadcast::routes(['middleware' => ['auth:api']]);

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/signup', 'AuthController@signup');
Route::post('login', 'AuthController@login');

Route::get('test', function () {
    return Storage::disk('uploads')->url('test');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', 'UserController@getUser');
    Route::get('users', 'UserController@index');
    Route::get('users/all', 'UserController@all');
    Route::get('rooms', 'RoomController@index');
    Route::get('rooms/{id}', 'RoomController@show');
    Route::post('/rooms/{id}/message', 'RoomController@sendMessage');
    Route::post('/rooms/create', 'RoomController@store');
    Route::post('logout', 'AuthController@logout');
    Route::post('/rooms/createGroup', 'RoomController@storeGroup');
});
