// Keywords pentru declarare de variabile in JS : var, let, const
// In JS nu este obligatoriu sa punem ";" dupa fiecare linie de cod
// Exista 2 tipuri de date : primitive si obiecte
// Primitivele sunt : boolean, null, undefined, number, string

// Boolean
let boolean = false;

// Null
let n = null;

// Undefined
let undf = undefined;

// Number
let num = 123;

// String
let str = "Acesta este un string";

// Obiect
let person = {
  age: 32,
  name: "Robertin",
};

console.log(person);

// Array = siruri de caractere (numere, obiecte, etc.)

const hobbies = ["Reading", "Swimming", "Fishing"];
const prices = [12.5, 13.3, 25.7, 30.1];

const swimming = hobbies[1];

// if else

const age = 32;

if (age < 32) {
  console.log("Esti nascut dupa 1990");
} else {
  console.log("Esti nascut inainte de 1990");
}

// for loop

const people = ["Robi, Georgiana, Luca, Razvan"];

for (i = people.lenght - 1; i >= 0; i--) {
  console.log(people[i]);
}

let number = 1;

while(number <= 10){
  console.log(number);
    number++;
}

do {
    number++;
    console.log(number);
}while(number <= 10);

switch(number){
    case 1:
        console.log("Number este 1");
        break;
    case 2:
        console.log("Number este 2");
        break;
    default:
        console.log("Number este defapt: " + number);
}

// Prinderea si tratarea erorilor

try{
    if(number === 1){
        console.log("Number are valoarea 1");
    }
}catch(error){
    console.log("Something happened: " + error.message);
}finally{
    console.log("Finally a fost executat");
}

// JavaScript foloseste Camel Casing, adica separarea cuvintelor se face prin litera mare:
// EX: displayName, displayMyName, displayMyMiddleName etc... Primul cuvant este cu litera mica, apoi urmatorul cuvant cu litera mare s.a.m.d

function displayPersonDetails(myName, age, email){
  console.log("My name is: " + myName);
  console.log("My age is: " + age);
  console.log("My email adress is: " + email);
}

displayPersonDetails("Robertin", 32, "robertinpopescu@email.com");

function function1(anotherFunction){
    anotherFunction();
}

function1(() => console.log("Functia a fost executata"));

((myName) => {
    console.log(myName);
})();

Clase in JavaScript

class Person{
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    calculateAge(){
        return new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }
}

var p = new Person("Popescu", "Robertin", new Date("13-07-1990"));
console.log(p.calculateAge());

EVENIMENTE

var submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click", onBtnClick);

function onBtnClick(e) {
    alert("Button has been clicked");
}

function difference(a, b) {
  console.log(a - b);
}

difference(10, 5);

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

function testElseStatement(val) {
  var result = "";

  if (val > 5) {
    result = "Biggerr than 5";
  } else {
    result = "Less than 5";
  }
  return result;
}
testElseStatement(7);
console.log(testElseStatement(10));

function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));

// else if statement example

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
}

console.log(golfScore(4, 1));

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
  }

  return answer;
}
console.log(caseInSwitch(4));

function isLess(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

console.log(isLess(10, 15));

// Aceeasi metoda ca cea de mai sus

function isLess(a, b) {
  return a > b;
}

console.log(isLess(10,15));

