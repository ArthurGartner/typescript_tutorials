const score: Array<number> = [];
const name1: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

//Locks value type
identityThree("3");

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  return products[2];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  return products[2];
};
