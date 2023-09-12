"use strict";
// class User {
//   email: string;
//   name: string;
//   //   city: string = "";
//   readonly city = "Denver";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const arthur = new User("example@example.com", "Arthur");
// arthur.city = "Denver";
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this.email = email;
        this.name = name;
    }
    //Getter example
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
}
