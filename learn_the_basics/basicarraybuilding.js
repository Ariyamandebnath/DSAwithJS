const prompt =require("prompt-sync")();

let a =[];
let l=parseInt(prompt("Input the length orf the array"))
//also the implementation of for loop will be covered
let i=0;
for(i=0; i<l; i++){
    a[i]=parseInt(prompt());
}
console.log(a);
//print the array backwards
for(i<l-1;i>=0;i-- ){
    console.log(a[i]);
}

