const express = require('express');
const {
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/products');

const products = express.Router();

products.route('/').get(getAllProducts);
products.route('/static').get(getAllProductsStatic);

module.exports = products;
