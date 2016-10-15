import * as express from 'express';
import * as EventEmitter from 'events';
import { UserModel } from '../models/user.server.model';
import { UserRepository} from '../repositories/user.repository'


export class UserController {

UserRepo: UserRepository

    constructor(){
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
    
    var info = this.UserRepo.createNewUser(userModel);
    res.json({info: info});
} //Lets use postman to test this


getUsers(req: express.Request, res: express.Response){
var jsonInfo = this.UserRepo.getAllUsers();
res.json(jsonInfo);
}

}