
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

//Manejo de Errores con try y catch
function dora(num1, num2, operador) {
    try {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Solo se aceptan números");//excepción con `throw`
      }
  
      switch(operador) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            throw new Error("No se puede dividir por cero");
          } else {
            return num1 / num2;
          }
        case '^':
          return Math.pow(num1, num2);
        case '√':
           if (num1<0){
            throw new Error (" No es posible la raíz cuadrada de números negativos.");
           } else{
          return Math.sqrt(num1);
           }
        default:
          throw new SyntaxError();
      }
    } catch(error) {
      return error;
    }
  }
  
  console.log(dora(0, 5, "√")); 
  console.log(dora(45, 0, "/")); 
  console.log(dora(5, 2,"+"));
  console.log(dora(5, 2,"^"));
  console.log(dora(5, 2,""));
  console.log(dora(5, "f","^"));

  
  
  