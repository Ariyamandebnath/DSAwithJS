const prompt = require("prompt-sync")();

let original = parseInt(prompt("Enter your number: "));
let reversed = 0;
let temp = original;

while (temp !== 0) {
    reversed = (reversed * 10) + (temp % 10);
    temp = Math.floor(temp / 10);
}

if (reversed === original) {
    console.log(original + " is a palindrome.");
} else {
    console.log(original + " is not a palindrome.");
}
