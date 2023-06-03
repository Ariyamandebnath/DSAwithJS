//finding the greatest number among the three input elements
const prompt = require("prompt-sync")();

 let a =parseInt(prompt("enter your first number"))
 let b = parseInt(prompt("enter your second number"))
 let c = parseInt(prompt("enter your third number"))

 if (a<b && c<b){
    console.log("Your second input "+b+ "is the greatest number among the three input elements ")
 }
 else if(b<c && a<c){
    console.log("Your third input "+c+ "is the greatest number among the three inputs")
 }
 else{
    console.log("Your first input "+a+ "is the greatest number among the three input elements")
 }


 //program to convert temperature of celsius to ferenheit and ferenheit to celsius

 let Scale= prompt("Select the temperature scale, C or F");
 if( Scale.toLowerCase()==='c'){
   let c= prompt("enter the temperature in celsius scale");

   let f = (c*9/5)+32;
   console.log("the temperature in farenhite is "+f)
 }
 else if(Scale.toLowerCase()==='f'){
   let f =prompt("enter the temperature in fahrenheit ");
   let c = (f-32)*(5/9);
   console.log("the temperature converted into celsius is "+ c);

 }
 else{
   console.log("wrong input");
 }

//TO check is the given input is an alhabet or not

let char = prompt("what is your input")
if(char.toLowerCase()>= 'a' && char.toLowerCase()<='z'){
   console.log("your input is an alphabet")
}
else{
   console.log("the input is not an alphabet")
}