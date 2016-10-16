var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config.js');

export class Tokenize {

createToken(model){
  
 var token = jwt.sign(model, app.get('superSecret'), {
					expiresIn: 86400 // expires in 24 hours
				});

	return token;
}

 

}






