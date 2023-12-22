// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// destructuring object process env
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

/**
 * Membu;at koneksi database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, dan database
 */

const db = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

/**
 * Menghubungkan ke database menggunakan method connect
 * Menerima parameter callback function
 */

db.connect((err) => {
  if (err) {
    console.log("Error connecting database:", err.stack);
  } else {
    console.log("Connected to database!");
  }
});

// Export the connection object
module.exports = db;
