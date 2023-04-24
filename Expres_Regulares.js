const Ciudad = [
    "perla",
    "estrella",
    "pescado",
    "salero",
    "biblioteca",
    "guitarra",
    "dinero",
    "música",
    "edificio",
    "amor",
    
];

Ciudad.forEach(function(palabra) { //Recorre el arreglo.
    //Usando las barras // se define la expresión regular. Fuera de las barras va la bandera de la expresion regular.
    let expReg = /^(a).+$/i;
  
    if (expReg.test(palabra)) { //El método test() devuelve verdadero si cumple la expresion regular.
      console.log(`La palabra ${palabra} es un sustantivo femenino`);
    } else {
      console.log(`La palabra "${palabra}" es un sustantivo masculino`)
    }
  });


const ema=function(email){
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
if (regexEmail.test(email)) {
  return("La dirección de correo electrónico es válida.");
} else {
  return("La dirección de correo electrónico no es válida.");
}
}
console.log(ema("santiago_bogota@hotmail.com"));

(function(a,b){
    if (b==0) {
        console.log("Zero by errror")
        
    }
    else{
        console.log(a/b)
    }

})(10,4)


/*
let ttr=0;
const arr=[]
for (let index = 0; index <= 5; index++) {
    ttr += index;
    arr.push(index); 
    if (index %2==0) {
        console.log (`Numero par ${index}`)
        
    }
    else{
        console.log (`Numero impar ${index}`)
    }   
}

console.log(`El resultado dela suma es ${ttr}`)
*/