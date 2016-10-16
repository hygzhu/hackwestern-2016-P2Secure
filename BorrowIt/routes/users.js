"use strict";
var express = require('express');
var router = express.Router();
var users_server_controller_1 = require('../controllers/users.server.controller');
var userController = new users_server_controller_1.UserController();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/*
Sample JSon

{

"username": "harman666666",
"password":"xyzxyz",
"firstName": "Harman",
"lastName": "Singh"
"middlename":"Jeet",
"email": "harman666666@hotmail.com",
"phone": "905-673-4224"
}

*/
router.get('/all', function (req, res) {
    return userController.getUsers(req, res);
});
module.exports = router;
