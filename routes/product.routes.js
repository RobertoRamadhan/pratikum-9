const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// GET semua product
router.get('/', productController.getAllProducts);

// GET product berdasarkan ID
router.get('/:id', productController.getProductById);

// CREATE product baru
router.post('/', productController.createProduct);

// UPDATE product
router.put('/:id', productController.updateProduct);

// DELETE product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
