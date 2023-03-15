const express = require('express');

const adminDate = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminDate.products;
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
