let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");

console.log(saveEl)

let count = 0

function increment () {
    count += 1;
    countEl.textContent = count;
}

let myName = "Robertin";

let greetings = "Welcome, Robertin ! Have a nice day !"

welcomeEl.innerText = greetings 

welcomeEl.innerText += "👋"

let dashSeparator = "-"

function save() {    
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0
}