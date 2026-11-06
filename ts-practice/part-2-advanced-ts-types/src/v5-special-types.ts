//* Top types
let helloWorld : any = "Hello World"
helloWorld = 123;
helloWorld.length;

const something : unknown = "Hello World";
// something.length;

//* Core types
let something2: unknown;

const num: number = 123;
// something2 = num;

something2 = num;

//* Nullish types

interface User {
    name: string;
}

const currentUser: User = null;

//* Unit type

//* Sub-type of unit type

//* Bottom type
