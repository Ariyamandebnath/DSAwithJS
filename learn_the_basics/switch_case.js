const prompt =require("prompt-sync")();

//take inputs of the coeffecients of the quadratic equation ax**2+bx+c=0

let a =parseInt(prompt("input the coefficient of x squared"))
let b =parseInt(prompt("input the coefficient of x"))
let c =parseInt(prompt("input the last constant"))

let d= b**2 -4*a*c

switch(true){
    case d===0:
        let root= -b/2*a;
        console.log("there exist only one real root that is  "+root)

        break;

    case d>0:
        let root1= (-b + Math.sqrt(d))/(2*a)
        let root2= (-b - Math.sqrt(d))/(2*a)
        console.log("There are two real roots: " + root1 + " and " + root2);
        break;
    case d < 0:
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-d) / (2 * a);
        console.log(
          "There are two complex roots: " +
            realPart +
                " + " +
                imaginaryPart +
                "i and " +
                realPart +
                " - " +
                imaginaryPart +
                "i"
            );
            break;

    default:
        console.log ("you have wrong inputs")
}
