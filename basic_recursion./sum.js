//sum of first n numbers

//paramaterised way
const param = (i, sum) =>
{
    if (i<1){
        console.log(sum)
        return;
    }
    param(i-1,sum+i)

}
param(5,0)

const functional =(n)=>{

    if (n==0){
        return 0;
    }
    return n+ functional(n-1)
    
}
console.log(functional(9))
