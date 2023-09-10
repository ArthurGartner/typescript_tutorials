function addTwo(num: number): number {
  return num + 2;
  //   return "Hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

let meValueAddTwo = addTwo(5);
getUpper("Arthur");

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Arthur", "email", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("t", "t");

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "HELLO";
};

const heros = [1, 2, 3];
// const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
  //   return 1;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
