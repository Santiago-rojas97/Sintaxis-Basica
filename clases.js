class Persona{
    constructor(nombre,edad,altura){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    if (this.edad <18) {
        console.log("Eres menor de edad")
        
    }else{
        console.log("Eres mayor de edad :D")
    }
    }
    saludar(){
        console.log("Hola mi nombre es "+ this.nombre)
    }
    Estatura(){
        if (this.altura <=1.65) {
            console.log("Eres una persona de baja estatura")
            
        }else{
            console.log("Tienes buena estatura :D")
        }
    }

}
let persona = new Persona("Santiago",19,1.77)
persona.saludar();
console.log(`hola mi nombre es `+persona.nombre+" y tengo "+persona.edad)
persona.Estatura();

class Person {
    constructor(nombre, fechaNacimiento, genero) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.genero = genero;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  
    calcularEdad() {
      var hoy = new Date();
      var fechaNac = new Date(this.fechaNacimiento);
      var edad = hoy.getFullYear() - fechaNac.getFullYear();
      var m = hoy.getMonth() - fechaNac.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < fechaNac.getDate())) {
          edad--;
      }
      return edad;
    }
  }
  
  var person= new Person("Juan", "1997-02-07", "Masculino");
  person.saludar();
  console.log(person.calcularEdad()); // muestra la edad actual de Juan en base a su fecha de nacimiento
  