"use strict";
var mongoose = require('mongoose');
var Product = require('../models/product.database.model');
//mongoose.connect('mongodb://harman666666:123456@ds061454.mlab.com:61454/borrowit'); 
/*
set( ) 	Write or replace data to a defined path, like messages/users/<username>
update( ) 	Update some of the keys for a defined path without replacing all of the data
push( ) 	Add to a list of data in the database. Every time you call push()
            your database generates a unique ID, like messages/users/<unique-user-id>/<username>
transaction( ) 	Use our transactions feature when working with complex data that
                could be corrupted by concurrent updates
*/
var ProductRepository = (function () {
    function ProductRepository() {
    }
    //mongoose : Mongoose.Mongoose ;
    //constructor(){
    //var mongoose = require('mongoose').;
    // this.mongoose = new Mongoose.Mongoose(); 
    //}
    ProductRepository.prototype.createNewProduct = function (product) {
        //We will obtain the form data from the request argument that is passed into our function
        //req.body => brings the form data along with it
        var entry = new Product({
            productName: product.productName,
            collateralAmount: product.collateralAmount,
            borrowingFeeAmount: product.borrowingFeeAmount,
            dueDate: product.dueDate,
            borrowerWallet: product.dueDate,
            lenderWallet: product.lenderWallet
        });
        console.log("Before await in createNewProduct In repository");
        //entry.sa
        return entry.save();
    };
    /*
    I returned mongoose docs as json in this way:
    
    ProductModel.find({}, function (err, products) {
        return res.end(JSON.stringify(products));
    }
    However, user.__proto__ was also returned. How can I return without it? I tried this but not worked:
    
    UserModel.find({}, function (err, users) {
        return res.end(users.toJSON());    // has no method 'toJSON'
    }
    
    
    You may also try mongoosejs's lean() :
    
    UserModel.find().lean().exec(function (err, users) {
        return res.end(JSON.stringify(users));
    }
    
    
    
    */
    ProductRepository.prototype.getAllProducts = function () {
        var query = Product.find();
        return query.sort({ productName: 'desc' }) //ask it to be sorted on date in descending order
            .limit(12) //Specifies maximum number of results query will return and cannot be used with distinct 
            .exec();
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
