const coches = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(coches);

/*
Recorrer Arreglos
*/

console.log(coches[0]);

for(let contador = 0; contador < coches.length; contador++){
    console.log(contador + ': ' + coches[contador]);
}

coches[1] = 'Mercedes Benz';
console.log(coches[1]);

coches.push('Nissan');
coches.push('Renault');

console.log(coches);
