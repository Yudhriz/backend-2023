// Import StudentController
const StudentController = require("../controllers/StudentController");

// Import express
const express = require("express");

// Membuat object router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routing Students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;
