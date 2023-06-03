//largest element in an array

const prompt = require("prompt-sync")();
let a =0;

const largestNo =(arr)=>{

    for (let i=0;i<arr.length; i++){
        if (arr[i]>a){
            a=arr[i]
        }
    }
    return a;


}
let array= [1,53424,6,4,2,1]
console.log(largestNo(array))


//secound largest number

const secoundLargest =(arr)=>{
    let largest = arr[0];
    let sLargest =-1;
    for (let i=1; i<arr.length; i++){
        if(largest<arr[i]){
            sLargest =largest;
            largest =arr[i];

        }
        else if (arr[i]<largest && arr[i]>sLargest){
            sLargest =arr[i];
        }
    }
      return sLargest;

}

console.log(secoundLargest(array))