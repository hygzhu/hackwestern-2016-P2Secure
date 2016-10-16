var express = require('express');
var router = express.Router();

import { UserController } from '../controllers/users.server.controller'

var userController: UserController = new UserController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createUser', function(req,res){
  console.log('in router');
  userController.createUser(req,res);
});


module.exports = router;
