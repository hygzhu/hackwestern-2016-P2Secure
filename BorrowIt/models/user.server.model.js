"use strict";
var UserModel = (function () {
    function UserModel(username, password, firstname, lastname, middlename, email, phone) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.email = email;
        this.phone = phone;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
