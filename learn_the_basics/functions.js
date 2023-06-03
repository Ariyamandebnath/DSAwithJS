//function to check if the string is a palindronme

function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  // Example usage
  let str1 = "racecar";
  console.log(isPalindrome(str1));  // Output: true
  
  let str2 = "hello";
  console.log(isPalindrome(str2));  // Output: false
  

  //es6 style function

  const iSPalindrome = (str)=>{

    const reversestr = str.split(str).reverse().join("");
    return str=== reversestr
  }

  const str3= "hello"
  console.log(iSPalindrome(str1)); 