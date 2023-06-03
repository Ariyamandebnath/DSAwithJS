//reverse an array

function reverseArray(arr, start =0, end= arr.length-1){
    if (start>=end){
        return arr;
    }
    [arr[start], arr[end]]= [arr[end], arr[start]];

    return reverseArray(arr, start +1, end -1)

}


const myArray = [1,4,9,0,8,7]
const reversedArray = reverseArray(myArray)
console.log(reversedArray);