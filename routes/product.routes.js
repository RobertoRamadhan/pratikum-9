const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authBearer } = require('../middlewares/auth.middleware');

// GET semua product
router.get('/', productController.getAllProducts);

// GET product berdasarkan ID
router.get('/:id', productController.getProductById);

// CREATE product baru
router.post('/', authBearer, productController.createProduct);

// UPDATE product
router.put('/:id', authBearer, productController.updateProduct);

// DELETE product
router.delete('/:id', authBearer, productController.deleteProduct);

module.exports = router;
