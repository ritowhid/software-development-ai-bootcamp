//* Basic types
// let myString : string = "Programming Hero"
// let myNumber : number = 23445
// let myBoolean : boolean = true
// let mySymbol : symbol = Symbol()
// let myBigInt : bigint = 100n


//* Type safe function
const addTwo = (a: number, b: number): number => {
  return a + b
}

console.log(addTwo(20, 20))

//* Array and Tuple an readonly modifier

// array
// const arr : Array<string> = ["Programming", "Hero"]
const arr: string[] = ["Programming", "Hero"]
const numArr: number[] = [1, 2, 3]

// tuple
const dhakaLatLong: readonly [number, number] = [23.7104, 90.4074]



//* Optional, Default and Rest Parameters (...args)

// Optional
const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName
  }
  return firstName + " " + lastName;
};

console.log(concatName("Rakibul"));
console.log(concatName("Rakibul", "Islam"));


// Default
const greetings = (fullName: string, greeting = "Hello") => {
  console.log(greeting + " " + fullName);

};

greetings("rakibul")


//* Rest Parameters In Function

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5, 6);


const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age, isActive] = args;
  console.log(name + " is " + age);
};

logUserAction("Rakibul", 123, false)



//* Object, Type Alias, and Interface

type Address = {
  streetName: string;
  holdingNumber: number;
};

type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];

  address: Address;
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}

const user: TUser = {
  name: "Rakibul",
  age: 123,
  isActive: true,
  action: () => console.log("Hello"),
  badges: ["abc", "def"],
  address: {
    streetName: "abc",
    holdingNumber: 123
  }
};

// user.email = "rakibul@gmail.com";
// console.log(user.address);