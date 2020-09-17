<?php

namespace App\Http\Controllers;

use App\OauthAccessToken;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Storage;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|exists:users,email',
            'password' => 'required|string|min:6',
            'remember_me' => 'in:off,on',
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Token');
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();

        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'user' => $request->user(),
        ]);
    }

    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'string|min:3|max:255',
            'password' => 'string|min:6',
            'email' => 'email|unique:users,email|min:3',
            'password_confirmation' => 'required|same:password',
            'avatar' => 'image|mimes:jpg,png,jpeg',
        ]);
        $data = $request->all();
        unset($data['password_confirmation']);
        $data['password'] = bcrypt($request->password);
        if ($request->avatar) {
            $data['avatar'] = '/uploads/' . Storage::disk('uploads')->put('user', $request->avatar);
        }
        User::create($data);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized',
            ], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();

        return response()->json([
            'message' => 'Register successfully',
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();
        $tokens = OauthAccessToken::where('user_id', $user->id)->get();
        foreach ($tokens as $key => $value) {
            $value->delete();
        }
    }
}
