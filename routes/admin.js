const express = require('express');
const { body } = require('express-validator');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

router.get('/add-product', isAuth, adminController.getAddProduct);

router.get('/products', isAuth, adminController.getProducts);

router.post(
  '/add-product',
  [
    body('title').isLength({ min: 3 }).trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description').isLength({ min: 8, max: 200 }).trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title').isString().isLength({ min: 3 }).trim(),
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description').isLength({ min: 8, max: 200 }).trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
