"use strict";
var product_server_model_1 = require('../models/product.server.model');
var product_repository_1 = require('../repositories/product.repository');
var ProductController = (function () {
    function ProductController() {
        this.ProductRepo = new product_repository_1.ProductRepository();
    }
    ProductController.prototype.createProduct = function (req, res) {
        var productModel = new product_server_model_1.ProductModel(req.body.productName, req.body.collateralAmount, req.body.borrowingFeeAmount, req.body.dueDate, req.body.borrowWallet, req.body.lenderWallet);
        console.log("Before await in create productModel");
        var promise = this.ProductRepo.createNewProduct(productModel);
        console.log(promise);
        //promise.then()
        promise.then(function (info) {
            console.log(info);
            res.json({ info: "Success in adding product" });
        }).catch(function (err) {
            res.json({ error: err });
        });
    }; //Lets use postman to test this
    /*
    exports.getPostsOfUser = function(req:express.Request, res: express.Response){
    
        var promise  = repository.getPostsOfUser(req.params.productName);
        promise.then(function(snapshot) {
      // The Promise was "fulfilled" (it succeeded).
      res.json(snapshot.val());
    }, function(error) {
      // The Promise was rejected.
      res.json(error);
    });
    }*/
    ProductController.prototype.getProducts = function (req, res) {
        var promise = this.ProductRepo.getAllProducts();
        promise.then(function (results) {
            res.json(results);
        }).catch(function (err) {
            res.json({ error: err });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
