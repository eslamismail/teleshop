<?php

namespace App\Http\Controllers;

use App\OauthAccessToken;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            'email' => 'required|unique:users,email|email',
            'first_name' => 'required|string|min:2|max:255',
            'last_name' => 'required|string|min:2|max:255',
            'mobile' => 'required|regex:/(01)[0-9]{9}/|unique:users,mobile|digits_between:10,11',
            'password' => 'required|string|min:6',
            'password_confirmation' => 'required|same:password',
            'type' => 'required|in:user,vendor',
        ]);
        $data = $request->only([
            'email',
            'first_name',
            'last_name',
            'mobile',
            'type',
        ]);
        $data['password'] = bcrypt($request->password);
        $user = User::create($data);
        $tokenResult = $user->createToken('Personal Token');
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'user' => $request->user(),
            'message' => 'you are registered successfully',
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
