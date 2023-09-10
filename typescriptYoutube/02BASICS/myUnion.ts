let score: number | string = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let arthur: User | Admin = {
  name: "Arthur",
  id: 334,
};

arthur = { username: "a", id: 334 };

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLocaleLowerCase();
  } else {
    id.valueOf();
  }
}

const data: (string | number)[] = ["1", 2];

let seatAllotment: "aisle" | "middle" | "window";
