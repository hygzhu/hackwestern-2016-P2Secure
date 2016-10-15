"use strict";
var user_server_model_ts_1 = require('../models/user.server.model.ts');
var user_repository_ts_1 = require('../repositories/user.repository.ts');
var UserController = (function () {
    function UserController() {
        this.UserRepo = new user_repository_ts_1.UserRepository();
    }
    UserController.prototype.createUser = function (req, res) {
        var userModel = new user_server_model_ts_1.UserModel(req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.middlename, req.body.email, req.body.phone);
        var info = this.UserRepo.createNewUser(userModel);
        res.json({ info: info });
    }; //Lets use postman to test this
    UserController.prototype.getUsers = function (req, res) {
        var jsonInfo = this.UserRepo.getAllUsers();
        res.json(jsonInfo);
    };
    return UserController;
}());
exports.UserController = UserController;
