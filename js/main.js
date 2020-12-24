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