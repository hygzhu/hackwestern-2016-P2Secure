"use strict";
var UserModel = (function () {
    function UserModel(username, password, firstname, lastname, middlename, email, phone, accountNumber) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.email = email;
        this.phone = phone;
        this.accountNumber = accountNumber;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
