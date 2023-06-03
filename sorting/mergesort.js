const mergeSort=(arr)=>{
    if(arr.length==1){
        return arr;
    }

    // Split the array into two halves

    const middle = Math.floor(arr.length/2)
    const leftHalf = arr.slice(0,middle);
    const rightHalf = arr.slice(middle);

    //Recursive sort the two halves 

    const sortLeft =mergeSort(leftHalf);
    const sortRight =mergeSort(rightHalf);

    //concatenathe the remaining elements
    return merge(sortLeft, sortRight);



}


function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from left and right arrays
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    // Concatenate the remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }


  const arr = [9,8,7,1,2,7,3,4,0,9,8,7,1,2,349,8,7,1,2,3,4,0,9,8,672,34,9,8,67,1,2,3,4,9,8,7,6,2,3,4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);