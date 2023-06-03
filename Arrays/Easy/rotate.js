//left rotate an array by one place

let leftBy1 =(arr) =>{
    temp = arr[0];
    for (let i =1; i<arr.length; i++){
        arr[i-1] =arr[i];
    }
    arr[arr.length-1]= temp

    return arr;
}

let array =[21,324532,2,1,1,0]
console.log(leftBy1(array));



//brute force method for rotation by d indexes


function leftRotateArray(arr, d) {
    const n = arr.length;
    // Modulo operation to handle cases where d > n
    const rotations = d % n;
  
    // Create a temporary array to store rotated elements
    const temp = [];
  
    // Copy the elements to be rotated to the temporary array
    for (let i = 0; i < rotations; i++) {
      temp[i] = arr[i];
    }
  
    // Shift the remaining elements in the original array to the left
    for (let i = rotations; i < n; i++) {
      arr[i - rotations] = arr[i];
    }
  
    // Copy the rotated elements from the temporary array back to the original array
    for (let i = 0; i < rotations; i++) {
      arr[n - rotations + i] = temp[i];
    }
  
    return arr;
  }
  const rotations = 2;
  const rotatedArray = leftRotateArray(array, rotations);
  
  console.log(rotatedArray); 
  



  function leftRotateArrayOptimal(arr, d) {
        const n = arr.length;
        const rotations = d % n;
        
        // Slice the array into two portions and concatenate them in the desired order
        return arr.slice(rotations).concat(arr.slice(0, rotations));
      }
      
  


  const rotatedArrayO = leftRotateArrayOptimal(array, rotations);
  
  console.log(rotatedArray);