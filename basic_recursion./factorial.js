const functional =(n)=>{

    if (n==0){
        return 1;
    }
    return n*functional(n-1)
    

}
console.log(functional(10))


//in paramaterized way 

const param =(i, prod) =>
{
    if (i<1){
        console.log(prod)
        return;
    }
    param(i-1,prod*i)

}
param(5,1)
