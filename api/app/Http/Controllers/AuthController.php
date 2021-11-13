<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function registro(Request $request)
    {
        // $request->validate([
        //     'fullName' => 'required|string',
        //     'userName' => 'required|string',
        //     'email' => 'required|string|email|unique:users',
        //     'password' => 'required|string|confirmed'
        // ]);

        // $user = new User([
        //     'fullName' => $request->fullName,
        //     'userName' => $request->userName,
        //     'email' => $request->email,
        //     'password' => bcrypt($request->password),
        // ]);
        // $user->save();

        //-------------------------------------------

        // $fullName = $request['fullName'];
        // $userName = $request['userName'];
        // $email    = $request['email'];
        // $password = bcrypt($request['password']);

        // $user = new User;

        // $user->fullName = $fullName;
        // $user->userName = $userName;
        // $user->email    = $email;
        // $user->password = $password;

        $user = new User();
        $user->fullName = $request->fullName;
        $user->userName = $request->userName;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();

        return response()->json([
            'res' => 'Usuário criado com sucesso'
        ], 201);
    }

    public function login(Request $request)
    {
        // $request->validate([
        //     'email' => 'required|string|email',
        //     'password' => 'required|string'
        // ]);

        $credenciais = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (!Auth::attempt($credenciais))
            return response()->json([
                'res' => 'Acesso negado'
            ], 401);

        $user = $request->user();
        $token = $user->createToken('Token de acesso')->plainTextToken;

        return response()->json([
            'token' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->delete();
        return response()->json([
            'res' => 'Deslogado com sucesso'
        ]);
    }
}
