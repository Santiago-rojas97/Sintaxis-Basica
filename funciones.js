/*
function miPrimerFuncion (){
    for (let f = 0; f <= 10; f++) {
        console.log(f);
        if (f %2==0) {
         console.log(f);   
        }
        
    }
    }
    miPrimerFuncion();
    */
   /*
    function Saludar(nombre,edadd){
        console.log(`mi nombre es ${nombre} y mi edad es ${edadd}`);
    }
    Saludar("Santiago",7);

    
let n1=10;
let n2=5;

function suma(a,b) {
    return console.log(a+b);
}
suma(n1,n2);

const saludo= function (){
    msj="HOla mundo";
    return msj;
}
console.log (saludo());
*/



/*

const dolarCop = function (a) {

 let valorDolar = 0.00023;
let conversionCop = (a * valorDolar) / 1;
        
return conversionCop;
}
        
const copDolar = function (a) {
        
let valorCop = 4424;
let conversionDolar = (a * valorCop) / 1;
        
return conversionDolar;
}
        
let cop = 500000;
let dolar = 30;
        
let convertirCopDolar = dolarCop(cop);
let convertirDolarCop = copDolar(dolar);
        
console.log(`La conversión de pesos colombianos a dolar es: $${convertirCopDolar}`);
console.log(`La conversión de dolar a pesos colombiano es: $${convertirDolarCop}cop`);




*/


function Suma(a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function multiplicacion(a,b) {
    return a*b;
    
}
function division(a,b) {
    let c;
    if (b==0)
        c="error by zero";
    else
        c=a/b
    return c;
    
}


let a=10;
let b=50;

let op= "Suma";

switch (op){
    case "Suma":
        console.log(Suma(a,b))
        break;
    case "resta":
        console.log(resta(a,b))
        break;
    case "division":
        console.log(division(a,b))
        break;
    case "multiplicacion":
        console.log(multiplicacion(a,b))
    default:
        break;
}



const convertPesosADollars = (pesos) => {
    const rateChange = 4570;
    const dollars = pesos / rateChange;
    return dollars.toFixed(2);
  }
  
  
  console.log(convertPesosADollars(5000));



  function cuadrado(d,f) {
    return d+f;
    
  }
  function triangulo(a,b) {
    return (a*b)/2;
    
  }
  function areaCirculo(radio){
    return Math.PI*radio**2;
  }
let ladoa=14
let ladob=10

let radio=24;

console.log(`el área de un cuadrado cuyos ladon miden ${ladoa} y ${ladob} es: ${cuadrado(ladoa,ladob)}`)
console.log(`el área de un cicurlo cuyo radio es ${radio} es ${areaCirculo(radio)}`);
console.log(`E área de un triangulo cuya base mide ${ladoa} y su altura es ${ladob} es ${triangulo(ladoa,ladob)}`)

//Función expresada o anonima

/*const funcionExpresada= function(){
    return console.log("Hola mundo");

}
funcionExpresada();


//funciones anonimas autoejecutables
//se ejecutan al momento de crearlas
(function(){
    console.log("Mi primera funcion anonima autoejecutada")

})();

*/

//Ejemplo de función expresada con parametros
const funcionExpresada= function(a,b){
    if (a>b){
        return 1;
    }    
    else if (a<b){
        return -1;
    }else{  
        return 0;
    }
}
console.log(funcionExpresada(6,5));


//Ejemplo de funcion expresada autoejecutable
(function(numero) {
    if (numero % 2 == 0){
        console.log (`${numero} es par`);
    
    }
    else{
      console.log (`${numero} es impar`);

    }

  })(27);
//con funcion flecha
  ((num) => {
    if (num % 2 === 0) {
      console.log(`${num} es un número par.`);
    } else {
      console.log(`${num} es un número impar.`);
    }
  })(47);
  
  