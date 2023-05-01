/*{"empleados"[
    {"primer nombre":"Pablo","segundo nombre":"Santiago"},
    {"Primer nombre":"Juan","segundo nombre":"Pablo"}
]}*/
/*
{"Tienda"[
    {"titulo":2201},
    {"Autor":"Santi rest"},
    {"precio":98.500},
    {"Año":2023}
]}

{"Tuvalrep"[
    {"Empleado":"Santiago",
    "edad":26,
    "cargo":"Auxiliar logistico"
}
]}
*/

//String
const json = `{
    "Nombre":"Mariana",
    "Edad":32
}`;

//conversión JSON a bojetc con Parse
const usuario =JSON.parse(json)
console.log(`Hola ${usuario.Nombre}`)
console.log(`Hola cautnos años tiene ?: ${usuario.Edad}`)
console.log(typeof(json))

//Objeto
const objeto ={
    nombre:"santiago",
    edad:26,
    peso:68
}

//Conversión objetc a JSON con Stringify
const usu =JSON.stringify(objeto)
console.log((usu))
console.log(typeof(usu))

const ejercicio =`{
    "nombre":"Santiago",
    "Apellido":"Rojas",
    "Edad":26,
    "Hobbies":["Leer","Dibujar","Escribir"],
    "contacto":{
        "correo":"Santiago@gmail.com",
        "telefono":{
            "telefono cel":15454,
            "telefono fijo":564848
        }
    },
    "Direccion":"Avenidade siempre viva 123"

}`;

const rrr=JSON.parse(ejercicio);

const Productos=`{

    "Productos":[
        {
            "Nombre":"arroz",
            "Marca":"Diana",
            "valor":{
                "Valor_Compra":4200,
                "Valor_Venta":4600
            },
            "tipo":"Alimento",
            "Inventario":10
        },
        {
            "Nombre":"jabon",
            "Marca":"Axion",
            "valor":{
                "Valor_Compra":5200,
                "Valor_Venta":6500
            },
            "tipo":"Aseo",
            "Inventario":15
        },
        {
            "Nombre":"Detergente",
            "Marca":"Ariel",
            "valor":{
                "Valor_Compra":4200,
                "Valor_Venta":4600
            },
            "tipo":"Aseo",
            "Inventario":7
        },
        {
            "Nombre":"Gaseosa",
            "Marca":"Big cola",
            "valor":{
                "Valor_Compra":2200,
                "Valor_Venta":3000
            },
            "tipo":"Alimento",
            "Inventario":100
        },
        {
            "Nombre":"aceite",
            "Marca":"Diana",
            "valor":{
                "Valor_Compra":8500,
                "Valor_Venta":11000
            },
            "tipo":"Alimento",
            "Inventario":18
        },
        {
            "Nombre":"Cerveza",
            "Marca":"Poker",
            "valor":{
                "Valor_Compra":2000,
                "Valor_Venta":2500
            },
            "tipo":"Bebida",
            "Inventario":1000
        },
        {
            "Nombre":"Galletas",
            "Marca":"Festival",
            "valor":{
                "Valor_Compra":4200,
                "Valor_Venta":4600
            },
            "tipo":"Alimento",
            "Inventario":10
        }

    ]  

}`;
let obj=JSON.parse(Productos)
console.log(obj)

let gtr= obj.Productos[2].valor.Valor_Venta;
console.log(gtr)

let itemToPush = {
    "Nombre": "Galletas",
    "Marca": "Oreo",
    "valor" : {
        "Valor_Compra": 7500,
        "Valor_Venta": 9800
    },
    "tipo": "Alimento" 
}
let item2 = obj.Productos.push(itemToPush); 


console.log(obj);

for (Producto of  obj.Productos){
    console.log(Producto.valor.Valor_Compra)
    console.log(`El valor de venta del producto ${Producto.Nombre} es $${Producto.valor.Valor_Venta}`)
}

const parseo_Json =

    [
      {
          nombre:"Romanovich",
          apellido:"Raskolnikov",
          correo:"rmonnikov@.com",
          Telefono:214785,
          nacionaldad:"Rusia",
      },
    
    
      {
          nombre:"Zhukov",
          apellido:"Razumikhine",
          correo:"rzhuvkov@.com",
          Telefono:451485,
          nacionalidad:"Rusia",
      },
    
      {
          nombre:"pietr",
          apellido:"Petrovich",
          correo:"petro@.com",
          Telefono:478785,
          nacionalidad:"Rusia",
      },
   
      {
          nombre:"advoti",
          apellido:"Raskolnikova",
          correo:"petrova@.com",
          Telefono:2784785,
          nacionalidad:"Rusia",
      },
   
      {
          nombre:"katerina",
          apellido:"marmeladov",
          correo:"rmonnikov@.com",
          Telefono:2145885,
          nacionalidad:"Rusia",
      }
    ]
  
  
  

  let cambio =JSON.stringify(parseo_Json)
  console.log(cambio)

const pelis=`{

    

        "pelicula":[
            {
                "nombre":"El arbol de la vida",
                "genero":"Drama",
                "anio_estreno":2010,
                "director":"Terrence malick",
                "duracion":120
            },
        
        
            {
                "nombre":"El Padrino",
                "genero":"Drama,accion",
                "anio_estreno":1972,
                "director":" Francis ford coppola",
                "duracion":160
            },
      
            {
                "nombre":"Batman el caballero de la noche",
                "genero":"Accion,ficcion,drama",
                "anio_estreno":2008,
                "director":"Cristopher Nolan",
                "duracion":150
            },
     
            {
                "nombre":"Diamante de sangre",
                "genero":"Drama",
                "anio_estreno":2006,
                "director":"Martin scorsese",
                "duracion":120
            },
       
            {
                "nombre":"Los infiltrados",
                "genero":"Drama,policial",
                "anio_estreno":2006,
                "director":"Martin scorsese",
                "duracion":135
            }
        ]
    
    
    

}`
const cuevana=JSON.parse(pelis)
console.log(cuevana)
for (let i = 0; i < cuevana.pelicula.length; i++) {
    console.log(cuevana.pelicula[i])
}
console.log(cuevana.pelicula[0]);