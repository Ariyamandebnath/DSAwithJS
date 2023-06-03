const prompt = require("prompt-sync")();

let a =[];
let l =parseInt(prompt("Enter the length of the array you want"));
console.log("Enter the elements of the array");
for(let i=0; i<l; i++){
    a[i] = parseInt(prompt());
}
console.log(a);

const SelectionSort = (arr) =>{
    const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(SelectionSort(a));