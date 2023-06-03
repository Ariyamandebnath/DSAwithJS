//here we will observe how a recuirsive statement is execited and an infinite exection of takes place untill the there is stackoverflow error

const recursionError =(l)=>{
    console.log(l);
    recursionError(l)
}
//recursionError(5)

//you get a "Maximum call stack size exceeded" error

//recursionError("Ariyaman")
//using  base cases to constraint the recursive tree

const ntimes = (i, l) => {
    if (i > l) {
      return;
    }
    console.log(i);
    ntimes(i + 1, l);
  };
  
  //ntimes(1, 3);
  
//ntimes(1,3);


//print in reverse order

const reverseN =(i,l)=>{

    if  (l>=i){
        console.log(l)
        reverseN(i,l-1)
    }

}
//reverseN(1,8)