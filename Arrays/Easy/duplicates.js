function removeDuplicates(nums) {
    if (nums.length <= 1) {
      return nums.length;
    }
    
    let pointer1 = 0;
    
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
      if (nums[pointer1] !== nums[pointer2]) {
        pointer1++;
        nums[pointer1] = nums[pointer2];
      }
    }
    
    // Truncate the array to remove duplicate elements
    nums.length = pointer1 + 1;
    
    return nums.length;
  }
  
  // Example usage
  const nums = [1, 1, 2, 2, 3, 4, 5, 5, 5];
  const newLength = removeDuplicates(nums);
  console.log(nums); // Output: [1, 2, 3, 4, 5]
  console.log(newLength); 