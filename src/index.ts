interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "park",
    age: 29,
    gender: "male"
    
};

const sayHi = (person):string => {
    return `Hello My name is ${person.name}, I'm ${person.age} and ${person.gender}`;
}

console.log(sayHi(person));

export {};