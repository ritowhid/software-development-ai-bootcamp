//* Inheritance: A Manager is an Employee with an additional responsibility.

class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }

    // get baseSalary(): number {
    //     return this._baseSalary;
    // }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    describe(): string {
        return `${this.name} earns ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    // teamMemberCount: number;

    // constructor(name: string, _baseSalary: number, teamMemberCount: number) {
    //     super(name, _baseSalary)
    //     this.teamMemberCount = teamMemberCount;
    // }

    //* Shortcut
    constructor(name: string,
        _baseSalary: number,
        public teamMemberCount: number) {
        super(name, _baseSalary)
    }


    describeWork(): string{
        return `${this.name} manages ${this.teamMemberCount} people`;
    }

    describeManager():string{
        return `${this.name} earns ${this._baseSalary}`
    }
}

const employee = new Employee("Rak", 22000);

console.log(employee.describe());

const manager = new Manager("Tow", 30000, 20)

console.log(manager.describeWork());
/*
Inheritance:
We have to call the parent class constructor using `super()`.
We need to pass the required arguments that the parent constructor asks for.

After doing this, we can access the methods declared inside the parent class from the child class.
*/