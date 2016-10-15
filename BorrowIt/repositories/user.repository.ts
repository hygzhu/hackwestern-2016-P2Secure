import * as Mongoose from 'mongoose';
import * as express from 'express';
import * as EventEmitter from 'events';
import { UserModel } from '../models/user.server.model.ts';



var User: Mongoose._mongoose.IModelConstructor<{}> & EventEmitter.EventEmitter = require('../models/user.database.model.js');



/*
set( ) 	Write or replace data to a defined path, like messages/users/<username>
update( ) 	Update some of the keys for a defined path without replacing all of the data
push( ) 	Add to a list of data in the database. Every time you call push() 
            your database generates a unique ID, like messages/users/<unique-user-id>/<username>
transaction( ) 	Use our transactions feature when working with complex data that 
                could be corrupted by concurrent updates
*/

export class UserRepository {

mongoose : Mongoose.Mongoose;

constructor(){
    //var mongoose = require('mongoose').;

    this.mongoose = new Mongoose.Mongoose(); 
    this.mongoose.connect('mongodb://harman666666:123456@ds061454.mlab.com:61454/borrowit'); 
}



createNewUser(user: UserModel): string {
      //We will obtain the form data from the request argument that is passed into our function
    //req.body => brings the form data along with it
    var entry = new User({
        username : user.username,
        password: user.password,  //HASH THE PASSWORD IN THE DB
        firstname: user.firstname,
        lastname: user.lastname,
        middlename: user.middlename,
        email:  user.email,
        phone: user.phone
    });  

    //entry.sa
    entry.save(function(err){
        if(err){
            return "Sorry, there was an error saving the stand-up meeting note. " + err;
        }
        else{
           return "User post has been created successfully";
        }
    }    
    );
  return ""; //Never runs
}

/*
I returned mongoose docs as json in this way:

UserModel.find({}, function (err, users) {
    return res.end(JSON.stringify(users));
}
However, user.__proto__ was also returned. How can I return without it? I tried this but not worked:

UserModel.find({}, function (err, users) {
    return res.end(users.toJSON());    // has no method 'toJSON'
}


You may also try mongoosejs's lean() :

UserModel.find().lean().exec(function (err, users) {
    return res.end(JSON.stringify(users));
}



*/

getAllUsers(){
 var query = User.find();
 query.sort({username: 'ascending'}) //ask it to be sorted on date in descending order
      .limit(12) //Specifies maximum number of results query will return and cannot be used with distinct 
      .exec(function(err, results){


          //res.json(results.);
          return results;
        //  res.render('index', {title: 'Standup - List', notes: results}); //This is how you send data to view
      });
    
}





}



