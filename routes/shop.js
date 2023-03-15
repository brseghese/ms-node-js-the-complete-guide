// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminDate = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(adminDate.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminDate.products;
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
