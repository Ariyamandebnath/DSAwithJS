const prompt =require("prompt-sync")()
//print solid square with stars
let pattern1=(l)=>{
    
    
for (let i = 0; i < l; i++) {
    let row = "";
  
    for (let j = 0; j < l; j++) {
      row += "* ";
    }
    console.log(row);
  }

}

pattern1(5)
  
//pattern2 is a right angled triangle with *s

const pattern2 = (l)=>{
    for (let i=0; i<l; i++){
        let row =""

        for (let j=0; j<=i;j++){
            row+="1 "
        }
        console.log(row)
    }
    
}
pattern2(4)

const pattern3 =(l)=>{
    for (let i=1; i<=l; i++){
        let row =""

        for (let j=1; j<=i;j++){
            row+=j
        }
        console.log(row)
    }
    
}
pattern3(6)

const pattern4 =(l)=>{
    for (let i=1; i<=l; i++){
        let row =""

        for (let j=1; j<=i;j++){
            row+=i
        }
        console.log(row)
    }
    
}

pattern4(3)

const pattern5 = (l)=>{
    for (let i=0; i<l;i++){

        let row =""
        for(let j=l; j>i;j--){
            row+="* "


        }
        console.log(row)

    }
}
pattern5(5)

const pattern6 =(l)=>{
    for (let i=1; i<=l; i++){
        row =""
        for (let j=l; j>=i; j--){
            row+=j

        }
        console.log(row)


    }


}
pattern6(6)
const pattern7 =(l)=>{
    for (let i=1 ;i<=l; i++){
        row =""
        for (let j=l; j>=i; j--){
            row +=i

        }
        console.log(row)

    }
}
pattern7(7)


function pattern8(N) {
    for (let i = 0; i < N; i++) {
      // For printing the spaces before stars in each row
      for (let j = 0; j < N - i - 1; j++) {
        process.stdout.write(" ");
      }
  
      // For printing the stars in each row
      for (let j = 0; j < 2 * i + 1; j++) {
        process.stdout.write("*");
      }
  
      // For printing the spaces after the stars in each row
      for (let j = 0; j < N - i - 1; j++) {
        process.stdout.write(" ");
      }
  
      // Move to the next row and give a line break
      console.log();
    }
  }
  pattern8(9)
  



  function pattern9(N) {
    for (let i = 0; i < N; i++) {
      let row = "";
      
      // For printing the spaces before stars in each row
      row += " ".repeat(N - i - 1);
      
      // For printing the stars in each row
      row += "*".repeat(2 * i + 1);
      
      // Print the row
      console.log(row);
    }
    
    for (let i = N - 2; i >= 0; i--) {
      let row = "";
      
      // For printing the spaces before stars in each row
      row += " ".repeat(N - i - 1);
      
      // For printing the stars in each row
      row += "*".repeat(2 * i + 1);
      
      // Print the row
      console.log(row);
    }
  }
  pattern9(4)
  

  function pattern10(N) {
    let start = 1;
  
    for (let i = 0; i < N; i++) {
      if (i % 2 === 0) start = 1;
      else start = 0;
  
      let row = "";
  
      for (let j = 0; j <= i; j++) {
        row += start;
        start = 1 - start;
      }
  
      console.log(row);
    }
  }


pattern10(10)
  
