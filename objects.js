/*
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

*/

class Figura{
    constructor(color){
        this.color = color;
    }
    saludar(){//Metodo
        return `Hola! Soy una figura y mi color es ${this.color}`
    }
    area(){

    }
    
}


class Cuadradp extends Figura{//Creando una Subclase
    constructor(color,alto,ancho){
        super(color,alto,ancho);//Herencia
        this.alto = alto;
        this.ancho =ancho;
    }
    area(a,b){
        return a*b;

    }
}

class Circulo extends Figura{
    constructor(color){
        super(color);
    }
    area(radio){
        const area1 =Math.PI*radio**2;
        return  area1.toFixed(2)  
         
    }
}

class Triangulo extends Figura{
    constructor(color){
        super(color)
    }
    area(base,altura){
        const are =base*altura/2;
        return are.toFixed(2);
    }
}
class Trapecio extends Figura{
    constructor(color){
        super (color)
    }
    area(baseMenor,baseMayor,altura){
        let sumBases=baseMenor+baseMayor;
        let multiBaseAltura= sumBases*altura;
        let area = multiBaseAltura/2;
        return area;
    }
}

trap= new Trapecio("verde")
console.log(trap.area(10,15,14))

tri= new Triangulo("Amarillo")
console.log(tri.area(10,5))

circus = new Circulo("Oliva");
console.log(circus.area(10));

juanGuillermoCuadrado = new Cuadradp("Bianconero",5,10);
console.log("mi area es "+juanGuillermoCuadrado.area(50,50))


piramide = new Figura("Rojo");
console.log(piramide.color)

/*

class Persona{
    constructor(nombre,apellido,edad,nacionalidad){//Atributos de la clase Persona
        this.nombre = null;
        this.edad = null;
        this.apellido = null;
        this.nacionalidad = null;

    }
    static quienEres(){ //Método estatico
        console.log("Hay 8.010.359.063 personas en el mundo")
    }
    get getNombre(){
        return this.nombre;
       

    }//Set solo puede alamcenar un parametro :c
    set setNombre(nombre){
        this.nombre= nombre;
    }
    get getApellido(){
        return this.apellido;
       

    }//Set solo puede alamcenar un parametro :c
    set setApellido(apellido){
        this.apellido = apellido;
        
    }
    get getEdad(){
        return this.edad;
       

    }//Set solo puede alamcenar un parametro :c
    set setEdad(edad){
        this.edad = edad;
        
    }
    get getNacionalidad(){
        return this.nacionalidad;
       

    }//Set solo puede alamcenar un parametro :c
    set setNacionalidad(nacionalidad){
        this.nacionalidad = nacionalidad;
        
    }   

}
//Metodos setter y getter
Gente = new Persona();
Gente.setNombreApellido="pablo Santiago,Rojas";
console.log(Gente.getNombreApellido);
console.log(Gente.nombre)
console.log(Gente.apellido)
Gente.setApellido="Rojas";
console.log(Gente.getApellido);
Gente.setEdad=26;
console.log(Gente.getEdad);
Gente.setNacionalidad="Colombiano";
console.log(Gente.getNacionalidad);


//Metodo estatico
Persona.quienEres()
*/

const carro = {
    marca: 'Williams Racing',
    modelo: 'FW45',
    año: 2023,
    color: 'Azul y Negro',
    descripcion: function(){
    let msj = `Hola! Mi marca es ${this.marca}, soy el modelo ${this.modelo} año ${this.año} y mi color es ${this.color}`;
    
    return msj;
    }
    }
    
    let ferrari = carro;
    console.log(`Propiedad marca del objecto: ${carro.marca}`);
    console.log(`Propiedad modelo del objecto: ${carro.modelo}`);
    console.log(`Propiedad año del objecto: ${carro.año}`);
    console.log(`Propiedad descripción del objecto: ${carro.descripcion()}`)


const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] = diasSemana;

console.log(diaUno);
console.log(diaDos);
console.log(diaTres);
console.log(diaCuatro);
console.log(diaCinco);
console.log(diaSeis);
console.log(diaSiete);


const mascota = {
    nombre : "Pedro",
    edad : 5,
    tamaño : "Grande",
    color : "Blanco"
    };
    
 const {nombre, edad, tamaño, color} = mascota;
 console.log(edad);