const bubbleSort =(arr) =>{
    let len = arr.length;
    let swapped;


    for (let i=0; i<len; i++){
        swapped = false;

        for (let j=1; j<len-i; j++){
            if (arr[j]< arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
                swapped = true;
         
            }
            console.log(arr)
        }
        if (!swapped){
            //No swaps occurred in this pass, so the array is sorted
            break;

        }

    }
    return arr;


}
let a=[1,2,3,4]
console.log(bubbleSort(a))