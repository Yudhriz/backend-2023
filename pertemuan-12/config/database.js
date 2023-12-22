// impoert mysql
const mysql = require("mysql");

/**
 * Membu;at koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, dan database
 */

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3309,
  database: "express_rest_api",
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback function
 */

db.connect((err) => {
  if (err) {
    console.log("Error connecting database" + err.stack);
    return;
  } else {
    console.log("Connected to database ...");
    return;
  }
});

module.exports = db;