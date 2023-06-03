//check if the array is sorted or not

const checkSorted = (arr) =>{
    let len = arr.length;
    for (let i=1;i<len; i++){
        if (arr[i]>=arr[i-1]){

        }
        else{
            return "array is not sorted";
        }
        
    }
    return 'array is sorted';
}
let a =[1,2,3,4,5,5,5,6,6,98]
let b =[208974,1,4,23];
console.log(checkSorted(a));
console.log(checkSorted(b));