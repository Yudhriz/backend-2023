// TODO 3: Import data students dari folder data/students.js
// code here

// Membuat class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua students",
      data: [],
    };

    res.json(data);
  }

  store(req, res) {
    const { nama } = req.body;

    const data = {
      message: "Menambahkan student baru: $(nama)",
      data: [],
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: "Mengubah data students id $(id)",
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: "Menghapus data students id $(id)",
      data: [],
    };

    res.json(data);
  }
}

// Membuat object dari class StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
