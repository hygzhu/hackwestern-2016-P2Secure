"use strict";
var express = require('express');
var router = express.Router();
var users_server_controller_1 = require('../controllers/users.server.controller');
var userController = new users_server_controller_1.UserController();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/createUser', function (req, res) {
    console.log('in router');
    userController.createUser(req, res);
});
module.exports = router;
