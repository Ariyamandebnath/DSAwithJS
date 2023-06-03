function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    // Choose a pivot element (can be any element from the array)
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    
    // Partition the array into two halves
    const left = [];
    const right = [];
    const equal = [];
    
    for (let element of arr) {
      if (element < pivot) {
        left.push(element);
      } else if (element > pivot) {
        right.push(element);
      } else {
        equal.push(element);
      }
    }
    
    // Recursively sort the left and right halves
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
    
    // Concatenate the sorted halves and the equal elements
    return sortedLeft.concat(equal).concat(sortedRight);
  }
  
  // Example usage
  const arr = [8, 3, 1, 5, 2, 10, 7];
  const sortedArr = quickSort(arr);
  console.log(sortedArr);
  