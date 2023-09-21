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
        // private _courseCount = 1;
        this._courseCount = 1;
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //Getter example
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1!");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
