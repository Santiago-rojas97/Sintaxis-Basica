var nombre = "santiago";
var edad=23;
var altura=1.77;
let peso=70;

{
    let altura=99
    let nombre ="juan";
    let edad=26;
    console.log(`mi nombre es ${nombre} y mi edad es ${edad} mi altura es ${altura}`)
}
console.log(`${nombre} ${edad}`);

let string="Hola"
let numero=15;
let numeroFlotante =1.025;
let boolean=true;

console.log(typeof(numeroFlotante))
console.log(boolean)

let x=9
let z=8
console.log("-------------------Incremento y decremento---------------------")
x++ //Incremento en una unidad al valor de x
z-- //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`)

const ejemplo=function(a,b){
    
    return a-b;
    


}
console.log(ejemplo(10,5))

function suma(a,b){
    return a+b;
}  
function resta(a,b){
    return a-b;
}    
function multi(a,b){
    return a*b;
}    
function div(a,b){
    if (b==0){
        return "Error by zero"
    }else{
        return a/b;
 
    }
}      

let a=40;
let b=5;

op="div";

switch (op) {
    case "Suma":
        console.log(suma(a,b))
        break;
    case "resta":
        console.log(resta(a,b))

        break;
    case "multi":
        console.log(multi(a,b))

        break;
    case "div":
        console.log(div(a,b))

        break;    
    default:
        break;
}
let cont=50
for (let index = 0; index <cont.length; index++) {
    if (index %2== 0){
    console.log(`numeros pares de 0 a 50 ${index[cont]}`)  
    }

        console.log(`${index}`);
    }
