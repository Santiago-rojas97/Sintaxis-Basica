//Manejo de errores con try y catch//
try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (err) {
    console.log('Hay un error!');
}

//arrows functions
let saludo = nombre => `Hola me llamox santiago`;
console.log(saludo())