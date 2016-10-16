var express = require('express');
var router = express.Router();

import { UserController } from '../controllers/users.server.controller'

var userController: UserController = new UserController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
Sample JSon

{
"username": "harman666666",
"password":"xyzxyz",
}

*/
router.post('/', function(req,res){
  userController.login(req,res);
});


module.exports = router;