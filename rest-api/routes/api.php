<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

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

// Percobaan Pertama
// // method Get
// Route::get('/animals', function() {
//     return "Menampilkan seluruh data animals";
// });

// // method Post
// Route::post('/animals', function() {
//     return "Menambahkan hewan baru";
// });

// // method Put
// Route::put('/animals/{id}', function($id) {
//     return "Mengupdate data hewan id $id";
// });

// // method Delete
// Route::delete('/animals/{id}', function($id) {
//     return "Menghapus data hewan id $id";
// });

// Percobaan Kedua
// method Get
Route::get('/animals', [AnimalController::class,'index']);

// method Post
Route::post('/animals', [AnimalController::class,'store']);

// method Put
Route::put('/animals/{id}', [AnimalController::class,'update']);

// method Delete
Route::delete('/animals/{id}', [AnimalController::class,'destroy']);
