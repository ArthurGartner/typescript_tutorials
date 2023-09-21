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
  // private _courseCount = 1;
  protected _courseCount = 1;

  constructor(
    public email: string,
    public name: string // private userId: string
  ) {
    this.email = email;
    this.name = name;
  }

  private deleteToken(): void {
    console.log("Token deleted");
  }

  //Getter example
  get getAppleEmail(): string {
    return `Apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
