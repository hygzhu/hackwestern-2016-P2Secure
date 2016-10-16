"use strict";
var express = require('express');
var router = express.Router();
var products_server_controller_1 = require('../controllers/products.server.controller');
var productController = new products_server_controller_1.ProductController();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/*
Sample JSon

{

"username": "harman666666",
"password":"xyzxyz",
"firstName": "Harman",
"lastName": "Singh"
"middlename":"Jeet",
"email": "harman666666@hotmail.com",
"phone": "905-673-4224"
}

*/
router.post('/create', function (req, res) {
    console.log('in router');
    productController.createProduct(req, res);
});
router.get('/all', function (req, res) {
    return productController.getProduct(req, res);
});
module.exports = router;
