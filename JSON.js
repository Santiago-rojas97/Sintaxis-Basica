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


const json = `{
    "Nombre":"Mariana",
    "Edad":32
}`;

const usuario =JSON.parse(json)
console.log(`Hola ${usuario.Nombre}`)
console.log(`Hola cautnos años tiene ?: ${usuario.Edad}`)
console.log(typeof(json))


const objeto ={
    nombre:"santiago",
    edad:26,
    peso:68
}
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
const rr=JSON.stringify(rrr)
console.log((ejercicio))
console.log((rr))

