const db = require('./db.config');

// Model Product (berisi query dasar)
const Product = {
  // GET semua product
  getAll: (callback) => {
    db.query('SELECT * FROM products', callback);
  },

  // GET product berdasarkan ID
  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },

  // CREATE product baru
  create: (data, callback) => {
    db.query('INSERT INTO products (name, price, category) VALUES (?, ?, ?)', [data.name, data.price, data.category], callback);
  },

  // UPDATE product
  update: (id, data, callback) => {
    db.query('UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?', [data.name, data.price, data.category, id], callback);
  },

  // DELETE product
  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  }
};

module.exports = Product;
