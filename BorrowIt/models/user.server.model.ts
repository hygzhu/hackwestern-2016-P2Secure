

export class UserModel {

        username: string;
        password: string;
        firstname: string;
        lastname: string;
        middlename: string;
        email: string;
        phone: string;
        accountNumber: string;

constructor(
        username: string,
        password: string,
        firstname: string,
        lastname: string,
        middlename: string,
        email: string,
        phone: string,
        accountNumber: string) {
       
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.email = email;
        this.phone = phone;
        this.accountNumber = accountNumber;
    }

} 