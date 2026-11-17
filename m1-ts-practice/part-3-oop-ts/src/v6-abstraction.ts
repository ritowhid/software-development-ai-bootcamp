//* Abstraction: every employee must define how their pay is calculated.
/*
Abstract:
- Abstract classes act as a blueprint for other classes.
- We cannot create objects directly from an abstract class.
- We use `abstract` keyword before the class name.
- Abstract methods are declared without implementation.
- Child classes must implement the abstract methods of the parent class.
- The implemented method must be compatible with the parent's method signature.
- Abstract classes can also contain normal methods with implementation.
*/
abstract class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }
    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }

        this._baseSalary = newSalary;
    }

    abstract calculatePay(): number;
    abstract getResources(): string[];
    abstract registerEntryTime(): string;
}

// class Manager extends Employee { 
//     calculatePay(){
//         return this.baseSalary + 5000;
//     }
// }
// class Developer extends Employee { 
//     calculatePay(){
//         return this.baseSalary + 5000;
//     }
// }