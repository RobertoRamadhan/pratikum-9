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
    db.query('INSERT INTO products (nama, deskripsi, harga, foto) VALUES (?, ?, ?, ?)', [data.nama, data.deskripsi, data.harga, data.foto], callback);
  },

  // UPDATE product
  update: (id, data, callback) => {
    const updateFields = [];
    const updateValues = [];
    
    if (data.nama) {
      updateFields.push('nama = ?');
      updateValues.push(data.nama);
    }
    if (data.deskripsi) {
      updateFields.push('deskripsi = ?');
      updateValues.push(data.deskripsi);
    }
    if (data.harga) {
      updateFields.push('harga = ?');
      updateValues.push(data.harga);
    }
    if (data.foto) {
      updateFields.push('foto = ?');
      updateValues.push(data.foto);
    }
    
    if (updateFields.length === 0) {
      return callback(new Error('No fields to update'));
    }
    
    updateValues.push(id);
    const query = `UPDATE products SET ${updateFields.join(', ')} WHERE id = ?`;
    db.query(query, updateValues, callback);
  },

  // DELETE product
  delete: (id, callback) => {
    db.query('DELETE FROM products WHERE id = ?', [id], callback);
  }
};

module.exports = Product;
