/*Variables
Para declarar una variable, se puede hacer uso de las palabras reservadas var o let como se ve a continuación.
La sintaxis que se usará para declarar una variable será:
    var / let nombreVariable = valorVariable.
Para ver el valor que se almacena en la variables en JavaScript se puede utilizar el método console.log(nombreVariable) como se ve a continuación

var hola="Hola mundo" 
console.log(hola)

/*Las variables pueden cambiar de valor en el transcurso del código cómo se ve a continuación

var hola="Hola mundo! x2"
console.log(hola)
*/

let nombre= "santiago";
let edad = 26;

console.log(nombre,edad);

const numero=10;
let suma=numero+10
console.log(numero,suma);

let x=1,l=4;
sum=++x;
console.log(x)

sum=l++;
console.log(l)
console.log(sum)

let a=0;
let v =0;
let summ=a/v;
console.log(summ)

const array = [1, 2, 3, 4, 5]

array.forEach((element) => {
  console.log(element)
})

//creamos un array de 1000 números
const arg = Array.from({ length: 1000 }, (_, i) => i)

// creamos un nuevo array con los números pares
let newArray = []

// con for
for (let i = 0; i < array.length; i++) {
  if (arg[i] % 2 === 0) {
    newArray.push(arg[i])
  }
}
