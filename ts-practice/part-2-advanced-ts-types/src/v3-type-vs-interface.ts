//* type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

// TODO : type alias

type ID = number;

//! interface id = number

type Role = "admin" | "member";

//! interface "admin" | "member"

interface User {
    name: string;
    id: ID;
    role: Role;
}

const user: User = {
    id: 123,
    name: "abc",
    role: "admin"
}

// TODO : interface
interface Animal {
    species: string;
}
interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian"
};


// Extend Type Alias using " & "
type Vehicle = {
    brand: string;
};

type Car = Vehicle & { // "&" symbol is used to perform intersection
    model: string;
};

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
}

// same name interface Merged
interface IEmployee {
    name: string;
}
interface IEmployee {
    id: number;
}

const employee: IEmployee = {
    id: 123,
    name: "ABC"
}


//! This is not Valid
// type TEmployee = {
//     name: string;
// } 

// type TEmployee = {

// }