import * as express from 'express';
import * as EventEmitter from 'events';
import { UserModel } from '../models/user.server.model';
import { UserRepository } from '../repositories/user.repository'
import { DataEncrypt } from '../Infrastructure/encrypt.data'
import { Tokenize } from '../Infrastructure/token'
import { BlockchainInterface } from '../Infrastructure/web33'

export class UserController {

    UserRepo: UserRepository;
    DataEncrypt: DataEncrypt;
    Tokenize: Tokenize;
    BlockchainInterface: BlockchainInterface;

    constructor() {
        this.UserRepo = new UserRepository();
        this.DataEncrypt = new DataEncrypt();
        this.Tokenize = new Tokenize();
        this.BlockchainInterface = new BlockchainInterface();
    }

     createUser(req: express.Request, res: express.Response) { //create function we will use to save form data to mongodb with

        var accountNumber: string = "";//= this.BlockchainInterface.getNewAccountNumber();

        var userModel: UserModel = new UserModel(req.body.username,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
            req.body.middlename,
            req.body.email,
            req.body.phone,
            accountNumber
            )
            console.log("Before await in create user");
        
        var promise =  this.UserRepo.createNewUser(userModel);
        console.log(promise);

        //promise.then()
        promise.then(function(info){
            res.json({ info: "Success in adding user" });
        }).catch(function(err){
            res.json({error: err});
        });        
    } //Lets use postman to test this

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


     getUsers(req: express.Request, res: express.Response) {
         var promise = this.UserRepo.getAllUsers();
         promise.then(
             function (results) {
                 res.json(results);
             }).catch(function (err) {
                 res.json({ error: err });
             });
     }

     


     login(req: express.Request, res: express.Response){
       
     // this.UserRepo.getUserByUsername(req.body.username);
      var promise = this.UserRepo.getUserByUsername(req.body.username);
      var thisObj = this;
       promise.then(
             
             function(user){
                 var token = thisObj.Tokenize.createToken(user);
                 console.log(token);
                 var actualPassword: string = thisObj.DataEncrypt.decrypt(user.password);
                 console.log(actualPassword);

                 if(actualPassword === req.body.password){
                     res.json({ "success" : true, "token" : user });
                  } else {
                     res.json({"success" : false, "token" : 0 });
                  }
             }).catch(function(err){
                 console.log("HIt error");
                 res.json({ error: err });
             });
       
       /*  
         var inputtedPassword = req.body.password;
         var promise = this.UserRepo.getUserByUsername(req.body.username);
        console.log(promise);

         promise.then(
             
             function(user){
                 var token = this.Tokenize.createToken(user);
                 console.log(token);
                 var actualPassword: string = this.DataEncrypt.decrypt(user.password);
                 console.log(actualPassword);

                 if(actualPassword === inputtedPassword){
                     res.json({ "success" : true, "token" : user });
                 } else {
                     res.json({"success" : false, "token" : 0 });
                 }
             }).catch(function(err){
                 console.log("HIt error");
                 res.json({ error: err });
             });
             */
     }








}