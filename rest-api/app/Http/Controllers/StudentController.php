<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $students = Student::create($input);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $students,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $students = Student::find($id);

        $students->save($input);

        $data = [
            'message' => 'Student is update successfully',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $students = Student::find($id);

        $students->delete();

        $data = [
            'message' => 'Delete students successfully',
            'data' => $students,
        ];

        return response()->json($data, 203);
    }
}
