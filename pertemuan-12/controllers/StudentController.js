const students = require("../data/students");

// Membuat class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;
    students.push(nama);

    const data = {
      message: `Menambahkan student baru: ${nama}`,
      data: students,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    students[id] = nama;

    const data = {
      message: `Mengubah data students id ${id}, nama: ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    students.splice(id, 1);

    const data = {
      message: `Menghapus data students id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// Membuat object dari class StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
