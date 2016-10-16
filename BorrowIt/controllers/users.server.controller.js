"use strict";
var user_server_model_1 = require('../models/user.server.model');
var user_repository_1 = require('../repositories/user.repository');
var encrypt_data_1 = require('../Infrastructure/encrypt.data');
var token_1 = require('../Infrastructure/token');
var web33_1 = require('../Infrastructure/web33');
var UserController = (function () {
    function UserController() {
        this.UserRepo = new user_repository_1.UserRepository();
        this.DataEncrypt = new encrypt_data_1.DataEncrypt();
        this.Tokenize = new token_1.Tokenize();
        this.BlockchainInterface = new web33_1.BlockchainInterface();
    }
    UserController.prototype.createUser = function (req, res) {
        var accountNumber = this.BlockchainInterface.getNewAccountNumber();
        var userModel = new user_server_model_1.UserModel(req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.middlename, req.body.email, req.body.phone, accountNumber);
        console.log("Before await in create user");
        var promise = this.UserRepo.createNewUser(userModel);
        console.log(promise);
        //promise.then()
        promise.then(function (info) {
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
    UserController.prototype.login = function (req, res) {
        var inputtedPassword = req.body.password;
        var promise = this.UserRepo.getUserByUsername(req.body.username);
        promise.then(function (user) {
            var token = this.Tokenize.createToken(user);
            var actualPassword = this.DataEncrypt.decrypt(user.password);
            if (actualPassword === inputtedPassword) {
                res.json({ "success": true, "token": user });
            }
            else {
                res.json({ "success": false, "token": 0 });
            }
        }).catch(function (err) {
            res.json({ error: err });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
