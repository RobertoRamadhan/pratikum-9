require('dotenv').config();
const mysql = require('mysql2');

// Konfigurasi koneksi database dari .env
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Coba koneksi
db.connect((err) => {
  if (err) {
    console.error('✗ Gagal koneksi ke database MySQL', err.message);
  } else {
    console.log('✓ Terhubung ke database MySQL');
  }
});

module.exports = db;
