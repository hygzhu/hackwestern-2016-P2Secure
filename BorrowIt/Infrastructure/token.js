"use strict";
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config.js');
var Tokenize = (function () {
    function Tokenize() {
    }
    Tokenize.prototype.createToken = function (model) {
        var token = jwt.sign(model, app.get('superSecret'), {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    };
    return Tokenize;
}());
exports.Tokenize = Tokenize;
