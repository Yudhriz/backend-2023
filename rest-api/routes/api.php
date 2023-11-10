<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
// Method Get
Route::get('/students', [StudentController::class, 'index']);

// Method Post
Route::post('/students', [StudentController::class, 'store']);

// Method Put
Route::put('/students/{id}', [StudentController::class, 'update']);

// Method Delete
Route::delete('/students/{id}', [StudentController::class, 'destroy']);

// Get Detail Resource
Route::get('/students/{id}', [StudentController::class, 'show']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
