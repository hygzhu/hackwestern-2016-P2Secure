"use strict";
var mongoose = require('mongoose');
//mongoose.connect('mongodb://harman666666:123456@ds061454.mlab.com:61454/borrowit'); 
var Schema = mongoose.Schema;
//Custom Validators: 
var productNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none');
    },
    //Custom error text...
    'Select a valid user name.'];
var productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        validate: productNameValidator
    },
    collateralAmount: {
        type: int,
        required: true
    },
    borrowingFeeAmount: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }, borrowerWallet: {
        type: String,
        required: false,
        default: ''
    }, lenderWallet: {
        type: String,
        required: false
    }
});
// Expose (export) the model now...
var Product = mongoose.model('Product', productSchema);
module.exports = Product;
