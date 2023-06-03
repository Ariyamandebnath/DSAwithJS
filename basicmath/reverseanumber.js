const prompt = require("prompt-sync")();

let original = parseInt(prompt("Enter your number: "));
let reversed = 0;

while (original !== 0) {
    reversed = (reversed * 10) + (original % 10);
    original = Math.floor(original / 10);
}

console.log(reversed);
