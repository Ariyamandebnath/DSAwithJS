//Move all the zeros in an array to the end
function move_zeros(arr){
    n= arr.length;
    i =0;// pointer to track the non-zero elements
    j=0; // pointer to traverse the array

    //Move the non_zero elements to the front
    while (j<n){
        if (arr[j]!=0){
            arr[i] = arr[j];
            i+= 1;

        }
        j+=1;

    }

    //fill the remaining elements with zeros
     
    while (i<n){

        arr[i] =0
        i+= 1;
    }


    return arr;
}

array = [0, 1, 0, 3, 12]
result = move_zeros(array)
console.log(result)
