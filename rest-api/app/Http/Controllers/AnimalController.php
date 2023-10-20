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
    // public function index() {
    //     echo "Menampilkan data animals";
    // }

    // public function store(Request $request) {
    //     echo "Nama hewan: $request->nama";
    //     echo "<br>";
    //     echo "Menambahkan hewan baru";
    // }

    // public function update(Request $request, $id) {
    //     echo "Nama hewan : $request->nama";
    //     echo "<br>";
    //     echo "Mengupate data hewan id $id";
    // }

    // public function destroy($id) {
    //     echo "Menghapus data hewan id $id";
    // }

    // Percobaan Keempat

    public $animals = ["Beruang","Bebek","Ikan"];
    public function index() {
        echo "Menampilkan seluruh hewan <br>";
        # gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->animals as $animal) {
            echo "- $animal <br>";
        }
    }

    public function store(Request $request) {
        echo "Menambahkan hewan baru <br>";
        array_push($this->animals, $request->animal);

        $this->index();
    }

    public function update(Request $request, $id) {
        echo "Mengupate data hewan id $id <br>";
        $this->animals[$id] = $request->animal;

        $this->index();
    }

    public function destroy($id) {
        echo "Menghapus data hewan id $id";
        unset($this->animals[$id]);

        $this->index();
    }

}
