"use strict";
var crypto = require('crypto');
var config = require('../config.js');
var DataEncrypt = (function () {
    function DataEncrypt() {
    }
    DataEncrypt.prototype.encrypt = function (text) {
        var cipher = crypto.createCipher(config.algorithm, config.secret);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    };
    DataEncrypt.prototype.decrypt = function (text) {
        var decipher = crypto.createDecipher(config.algorithm, config.secret);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    };
    return DataEncrypt;
}());
exports.DataEncrypt = DataEncrypt;
