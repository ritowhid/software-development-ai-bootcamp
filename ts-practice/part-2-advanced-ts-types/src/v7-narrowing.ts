//* "typeof"

let x = ["123"];

console.log(typeof x);


//* Type Guard

const print = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase()
    } else {
        return value;
    }

}



//* Turthiness

type User = {
    name: string;
    address?: {
        street: string;
    };
} | null

const loggedInUser: User = {
    name: "Rakibul",
    address: {
        street: "ABC",
    },
};

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.street);

        return;
    }

    throw new Error("User not found");
}

//* Equality

//* "in" operator

//* "instanceof" check

//* Discriminated union