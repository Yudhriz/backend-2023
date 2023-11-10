<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Student;

class StudentController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware("auth:sanctum");
    // }

    public function index()
    {
        $students = Student::all();
        if ($students->isEmpty()) {
            return response()->json(204);
        } else {
            $data = [
                'message' => 'Get all students',
                'data' => $students,
            ];

            return response()->json($data, 200);
        }
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => 'required|email',
            'jurusan' => 'required'
        ]);

        $students = Student::create($validateData);

        $data = [
            'message' => 'Student is created successfully',
            'data' => $students,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $students = Student::find($id);

        if ($students) {
            $input = [
                'nama' => $request->nama ?? $students->nama,
                'nim' => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'jurusan' => $request->jurusan ?? $students->jurusan
            ];

            $students->update($input);

            $data = [
                'message' => 'Student is update successfully',
                'data' => $students,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];
            return response()->json($data, 404);
        }
    }

    public function destroy($id)
    {
        $students = Student::find($id);
        if ($students) {
            $students->delete();

            $data = [
                'message' => 'Delete students successfully',
                'data' => $students,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        $students = Student::find($id);

        if ($students) {
            $data = [
                'message' => 'Get detail student',
                'data' => $students,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }
    }
}
