"use strict";
var user_server_model_1 = require('../models/user.server.model');
var user_repository_1 = require('../repositories/user.repository');
var UserController = (function () {
    function UserController() {
        this.UserRepo = new user_repository_1.UserRepository();
    }
    UserController.prototype.createUser = function (req, res) {
        var userModel = new user_server_model_1.UserModel(req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.middlename, req.body.email, req.body.phone);
        console.log("Before await in create user");
        var promise = this.UserRepo.createNewUser(userModel);
        console.log(promise);
        //promise.then()
        promise.then(function (info) {
            console.log(info);
            res.json({ info: "Success in adding user" });
        }).catch(function (err) {
            res.json({ error: err });
        });
    }; //Lets use postman to test this
    /*
    exports.getPostsOfUser = function(req:express.Request, res: express.Response){
    
        var promise  = repository.getPostsOfUser(req.params.username);
        promise.then(function(snapshot) {
      // The Promise was "fulfilled" (it succeeded).
      res.json(snapshot.val());
    }, function(error) {
      // The Promise was rejected.
      res.json(error);
    });
    }*/
    UserController.prototype.getUsers = function (req, res) {
        var promise = this.UserRepo.getAllUsers();
        promise.then(function (results) {
            res.json(results);
        }).catch(function (err) {
            res.json({ error: err });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
