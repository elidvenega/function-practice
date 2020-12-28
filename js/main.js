// I can only use function
// purpose get better with functions
function addText() {
    let x = "Hello I'am programming";
    let y = "at work and it works.";
    return `${x} ${y}`;
}

document.getElementById("id").innerHTML = addText();
document.getElementById("id").style.fontSize = '40px';

// second function
function addInfo(name, lastName, age, address) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.info = function () {
        return `${name} ${lastName} ${age} ${address}`
    }
};

let sum = new addInfo('Jeff', 'Bezos', 54, 'washington');


document.getElementById("info").innerHTML = sum.info();

// Use anynomus function

const practiceWithFunction = function (x = 1, y = 3, a = 2) {
    const total = x * y + a - (x * a);
    return total;
}

document.getElementById("practice").innerHTML = practiceWithFunction();

// Loops 

// const numberList = [1,2,3,4,5,6,7];

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`days without fast food ${rep}`);
}

// My own loop
for (let a = 0; a <= 10; a++) {
    console.log(a);
}

// closure a function that has access to an outside variable
let number = 13;

function numberAccess() {
    return `You have to be at least ${number} to be allowed on this ride`;
}

document.getElementById('ride').innerHTML = numberAccess();

// destructuring
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6', '7'];

//const all = [alphabet,numbers];
const [a, b, c, ...rest] = alphabet;

console.log(a, b, c, ...rest);

function sumAndMultiply(a, b) {
    return [a + b, a * b]
}

const [x, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(x);
console.log(multiply);
console.log(division);

// destructuring object
// const personOne = {
//     name: "Kyle",
//     age:24,
//     address: {
//         city: 'Somewhere',
//         state: 'One of them'
//     }
// }

// const personTwo = {
//     name: 'Sally',
//     age: 32,
//     address: {
//         city: "Somewhere else",
//         state: "Another one of them"
//     }
// }

// const {name: firstName ,age: birthday, favoriteFood = "Rice", address: {state}} = personTwo;
// console.log(firstName,birthday,favoriteFood,state);


// const personOne = {
//     name: "Kyle",
// }

// const personTwo = {
//     age: 32,
//     address: {
//         city: "Somewhere else",
//         state: "Another one of them"
//     }
// }

// const personThree = {...personOne ,...personTwo}
// console.log(personThree);

const personOne = {
    name: "Kyle",
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}


function printUser({name,age, food="Mexican Food"}) {
    return(`Name is ${name} and age is ${age} favorite ${food}`);
}

printUser(personOne)

// need to figure this out
const example = {
    name: 'Eli',
    hobby: 'guitar',
    hobby2: 'dreaming',
    us: {
        city: 'vista',
        heLivesIn: 'CA'
    }
}

function animeUser(name,hobby) {
    return (`His name is ${name} his hobby is ${hobby}`);
}


document.getElementById('name').innerHTML = printUser(personOne);
//const {name,hobby,us: {city}} = example;
//console.log(`His name is ${name} his hobby is ${hobby} and lives in ${city}`);
