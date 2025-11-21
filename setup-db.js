const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    process.exit(1);
  }
  console.log('✓ Connected to MySQL');

  // Read setup.sql
  const sql = fs.readFileSync('./setup.sql', 'utf8');

  // Execute queries
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing setup.sql:', err.message);
      process.exit(1);
    }
    console.log('✓ Database setup completed successfully!');
    console.log('✓ 10 products inserted');
    connection.end();
    process.exit(0);
  });
});
