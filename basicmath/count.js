//Given an integer N, write program to count number of digits in N

const prompt = require("prompt-sync")()

let x = parseInt(prompt("Input the integer number"))

let count = 0

while (x!=0){
    x=Math.floor(x/10)
    count+=1;
}

console.log("there are "+count+" number of digits")



