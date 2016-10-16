import * as express from 'express';
import * as EventEmitter from 'events';
import { UserModel } from '../models/user.server.model';
import { UserRepository} from '../repositories/user.repository'


export class UserController {

    UserRepo: UserRepository

    constructor() {
        this.UserRepo = new UserRepository();
    }

     createUser(req: express.Request, res: express.Response) { //create function we will use to save form data to mongodb with

        var userModel: UserModel = new UserModel(req.body.username,
            req.body.password,
            req.body.firstname,
            req.body.lastname,
            req.body.middlename,
            req.body.email,
            req.body.phone)
            console.log("Before await in create user");
        
        var promise =  this.UserRepo.createNewUser(userModel);
        console.log(promise);

        //promise.then()
        promise.then(function(info){
            

            console.log(info);
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






     

}