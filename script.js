let userName = "Ereyiga";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

document.getElementById("welcome").textContent =
  `Hello ${userName}, welcome to your JS assignment!`;

function calculateTotal(price, taxRate) {
  let total = price + (price * taxRate);
  return total;
}

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log("Total:", calculateTotal(100, 0.05));
console.log("Formatted:", toTitleCase("javascript"));

for (let i = 1; i <= 15; i++) {
  console.log("Number:", i);
}

let count = 7;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

const button = document.querySelector("#greet"); 

button.addEventListener("click", function() {
  alert("You clicked the button! JavaScript works!");
});
