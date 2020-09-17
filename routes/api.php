<?php

use App\Events\Test;
use Illuminate\Http\Request;
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

// Route::post('/signup', 'AuthController@signup');
Route::post('login', 'AuthController@login');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', 'UserController@getUser');
    Route::post('sendMessage', function (Request $request) {
        broadcast(new Test($request->all()));
    });

});
