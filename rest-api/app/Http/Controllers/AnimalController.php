<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Percoabaan Kedua
    // public function index() {
    //     echo "Menampilkan data animals";
    // }

    // public function store() {
    //     echo "Menambahkan hewan baru";
    // }

    // public function update($id) {
    //     echo "Mengupate data hewan id $id";
    // }

    // public function destroy($id) {
    //     echo "Menghapus data hewan id $id";
    // }

    // Percobaan Ketiga
    public function index() {
        echo "Menampilkan data animals";
    }

    public function store(Request $request) {
        echo "Nama hewan: $request->nama";
        echo "<br>";
        echo "Menambahkan hewan baru";
    }

    public function update(Request $request, $id) {
        echo "Nama hewan : $request->nama";
        echo "<br>";
        echo "Mengupate data hewan id $id";
    }

    public function destroy($id) {
        echo "Menghapus data hewan id $id";
    }

}
