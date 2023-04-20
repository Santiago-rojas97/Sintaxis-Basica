class Animal{
    constructor (nombre,edad){
    this.nombre = nombre;
    this.edad = edad;


    }
    saludar(){
        return `Hola soy un animal y me llamo ${this.nombre}`
    }

    
}
class Gato extends Animal{
    constructor(nombre,edad,color){
        super(nombre,edad)
        this.color = color;
    }
    saludar(){
        return `Soy un michi,me llamo ${this.nombre} y hago MIAUW`;
    }
}

class Vaca extends Animal{
    constructor(nombre,edad,tipo){
    super(nombre,edad);
    this.tipo = tipo
    }
    saludar(){
        return `Soy una vaca me llamo ${this.nombre} y hago MUUUUU`
    }
}

let perro= new Animal("Bambi",5);
console.log(perro.nombre,perro.edad,perro.saludar());
let gato= new Gato("Botas",3,"Gris")
console.log(gato.nombre)
console.log(gato.saludar());
let cow = new Vaca("Lola",10,"lechera");
console.log(cow.nombre,cow.saludar(),cow.tipo)


class Figura{
    constructor(color){
        this.color = color;
    }
    saludar(){
        return `Hola! Soy una figura y mi color es ${this.color}`
    }
}

class cuadradp extends Figura{
    constructor(color,alto,peso){
        super(color,alto=1.77,peso=65);
        this.alto = alto;
        this.peso =peso;
    }
    saludar(){
        return `Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto} x ${this.peso}`
    }
    areaCuadrado(a,b){
        return a*b;

    }
}

class Circulo extends Figura{
    constructor(color){
        super(color);
    }
    areaCuadrado(radio){
        return  Math.PI*radio**2;
       
         
    }
}
circus = new Circulo("Oliva");
console.log(circus.areaCuadrado(10))

juanGuillermoCuadrado = new cuadradp("Bianconero",undefined,undefined);
console.log(juanGuillermoCuadrado.saludar())
console.log("mi area es "+juanGuillermoCuadrado.areaCuadrado(5,50))

piramide = new Figura("Rojo");
console.log(piramide.color)