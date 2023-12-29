// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkkan semua students",
        data: students,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: "Students is empty",
      };

      return res.status(404).json(data);
    }
  }

  async store(req, res) {
    /**
     * Validasi sederhana
     * - Handle jika salah satu data tidak dikirim
     */

    // destructuring object req.body
    const { name, nim, email, jurusan } = req.body;

    if (!name || !nim || !email || !jurusan) {
      const data = {
        message: "Semua field harus diisi",
      };

      return res.status(422).json(data);
    } else {
      const student = await Student.create(req.body);

      const data = {
        message: "Menambahkan student baru",
        data: student,
      };

      return res.status(201).json(data);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    // cari id student yang akan diupdate
    const student = await Student.find(id);

    if (student) {
      // melakukan update data student
      const students = await Student.update(req.body, id);
      const data = {
        message: `Mengedit student id ${id}`,
        data: students,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus student id ${id}`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan student id ${id}`,
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data student id ${id} tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
