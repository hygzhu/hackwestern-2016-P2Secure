"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Custom Validators: 
var memberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none');
    },
    //Custom error text...
    'Select a valid user name.'];
var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0);
    },
    //Custom error text...
    '{Path} cannot be empty'
];
var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        validate: memberNameValidator
    },
    password: {
        type: String,
        required: true,
        validate: requiredStringValidator
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }, middlename: {
        type: String,
        required: false,
        default: ''
    }, email: {
        type: String,
        required: true
    }, phone: {
        type: String,
        required: true
    }
});
// Expose (export) the model now...
var User = mongoose.model('User', userSchema);
module.exports = User;
