
var crypto: Crypto = require('crypto');
var config = require('../config.js');

export class DataEncrypt {


  encrypt(text: string) {
    var cipher = crypto.createCipher(config.algorithm, config.secret);
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(text: string) {
    var decipher = crypto.createDecipher(config.algorithm, config.secret)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
  }


}
 