const coches = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(coches);

/*
Recorrer Arreglos con un ciclo For
*/


for(let contador = 0; contador < coches.length; contador++){
    console.log(contador + ': ' + coches[contador]);
}
/*
coches[1] = 'Mercedes Benz';
console.log(coches[1]);

coches.push('Nissan');
coches.push('Renault');

console.log(coches);
*/

const peliculas=['la milla verde','parásitos','el viaje de chihiro','coco','interstellar'];

for (let i = 0; i < peliculas.length; i++) {
console.log(`Pelicula(${i}):${peliculas[i]}`) 

}


//“Película #posicion+1: nombrePelicula”

/*
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(10)
console.log(a)

console.log(a.length)

for (let index = 100; index < a.length; index=+2) {
    console.log(a)
}*/

//Creamo un arreglo vacio [] y con un ciclo For lo recorremos.
//despues utilizamos el metdo (push) para agregar uno a uno los elementos del array,hasta 10

let numeros = [];
for (let i = 0; i <= 10; i ++) {
     numeros.push(i);
}
console.log(numeros)

/*
var pares = [];
for ( pares=0; pares<=100; pares=pares +1 *2) {
      console.log( pares);
}
*/
let arr1 = [ 40, 1, 5,45,78];
arr1.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]

console.log(arr1) 


//

let arr = [ 70, 1, 5, 20 ];
function comparar ( a, b ){
     return a - b;
 }
 arr.sort(comparar);  // [ 1, 5, 40, 200 ]
 console.log(arr);
 
 
 const rr=[] 
 //copiar un array con .slice()
 const copiarr =arr.slice();
 console.log(copiarr)

const flecha =(a,b)=>{
    return a-b;

}
console.log(flecha(1,5))