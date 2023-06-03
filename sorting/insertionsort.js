const insertionSort =(arr) =>{
    let len = arr.length;
    for (let i =0;i<len-1;i++){
        for(let j=i+1; j>0;j--){
            if (arr[j]< arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
            else{
                break;
            }
        }
        console.log(arr)
    }
    return arr

}

console.log(insertionSort([2345,4232,2,1,0]))
