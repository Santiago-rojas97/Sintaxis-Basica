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

    let colors = ['red', 'green', 'blue']
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i])
    }
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

let resultadoResta = resta (40,7);

function resta (numeroUno, nuemroDos){
    return numeroUno - nuemroDos;
}
    
console.log (resultadoResta);



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



const convertPesosADollars = (pesos) => {
const rateChange = 4570;
const dollars = pesos / rateChange;
return dollars.toFixed(2);
}
            
            
console.log(convertPesosADollars(5000));

function Suma(a,b){
    return a+b;
}
function Resta(a,b){
    return a-b;
}
function multiplicacion(a,b) {
    return a*b;
    
}
function division(a,b) {
    return a/b;
}
let s=10;
let s2=5;
let resul=s+s2;
console.log(resul);