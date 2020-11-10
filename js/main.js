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

let sum = new addInfo('Jeff','Bezos' , 54, 'washington');


document.getElementById("info").innerHTML = sum.info();

// Use anynomus function

const practiceWithFunction = function (x=1,y=3,a=2) {
           const total =  x * y + a - (x * a);
           return total;
}

 document.getElementById("practice").innerHTML = practiceWithFunction();


