var nombre = "santiago";
var edad = 23;
var altura = 1.77;
let peso = 70;

{
    let altura = 99
    let nombre = "juan";
    let edad = 26;
    console.log(`mi nombre es ${nombre} y mi edad es ${edad} mi altura es ${altura}`)
}
console.log(`${nombre} ${edad}`);

let string = "Hola"
let numero = 15;
let numeroFlotante = 1.025;
let boolean = true;

console.log(typeof (numeroFlotante))
console.log(boolean)

let x = 9
let z = 8
console.log("-------------------Incremento y decremento---------------------")
x++ //Incremento en una unidad al valor de x
z-- //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`)

const ejemplo = function (a, b) {

    return a - b;



}
console.log(ejemplo(10, 5))

function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) {
        return "Error by zero"
    } else {
        return a / b;

    }
}

let a = 40;
let b = 5;

op = "div";

switch (op) {
    case "Suma":
        console.log(suma(a, b))
        break;
    case "resta":
        console.log(resta(a, b))

        break;
    case "multi":
        console.log(multi(a, b))

        break;
    case "div":
        console.log(div(a, b))

    default:
        break;
}
let contt = 0
const cont = [];
for (let index = 0; index < 5; index++) {
    contt += index;
    if (index % 2 == 0) {
        console.log(`numero par ${index}`)
    } else {
        console.log(`Impar ${index}`)
    }
    cont.push(index);
    console.log(`${contt}`)



}
console.log(`Resultado de toda la suma es ${contt}`)
console.log(cont);

const arreglos = [];
for (let i = 0; i <= 10; i += 2) {
    arreglos.push(i)
}
console.log(arreglos)








function ordenar(numeros = []) {
    let cantidad = numeros.length;
    // pivote :referencia usada para  comparar
    let pivote = numeros[cantidad - 1];
    let menores = [];
    let mayores = [];

    if (cantidad < 2) {
        // caso base: cuando el numero de elementos del array es 1 o 0
        return numeros;
    } else {
    }
    for (let i = 0; i < cantidad - 1; i++) {
        numeros[i] < pivote ? menores.push(numeros[i]) : mayores.push(numeros[i]);
    }
    // ... operador de propagación
    return [...ordenar(menores), pivote, ...ordenar(mayores)];
}

console.log(ordenar([10, 1, 8, 7]));





function ordenar(...numeros) {
    let desordenada = numeros;
    let limite = desordenada.length;
    let permutar;
  
    for (let i = 0; i < limite - 1; i++) {
      for (let j = 0; j < limite - i - 1; j++) {
  
        if (desordenada[j] > desordenada[j + 1]) {
          
          permutar = desordenada[j];
          desordenada[j] = desordenada[j + 1];
          desordenada[j + 1] = permutar;
          
        }
      }
    }
  
    return desordenada;
  }
  
  console.log(ordenar(9, 2, 10, 1));



const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueArray = array.filter((elem, index) => array.indexOf(elem) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



const arreglo = [1, 2, 2, 3, 3, 3, 4, 5,6,6, 5];
const otroArray = [...new Set(arreglo)];
console.log(otroArray); // Output: [1, 2, 3, 4, 5]



function ejercicio(){
    const arreglo=[1,3,4,5,5,6,2,7,3,5,7];

    const otroArreglo = [...new Set(arreglo)];
    console.log(otroArreglo);
    return otroArreglo.sort((x,y)=> {
        return x-y;
    });
}
console.log(ejercicio())




