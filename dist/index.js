"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 18, "female");
const sayHi = (person) => {
    return `Hello My name is ${person.name}, I'm ${person.age} and ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map