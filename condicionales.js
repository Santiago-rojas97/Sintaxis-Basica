/*
let edad =26;
if (edad>=18) {
    console.log("Eres mayor de edad :C");
}
else{
    console.log("Eres menor de edad preparate");
}
let a=3,b=0;
/*
```

let mayor= (a>b)? `${a} es mayor que ${b}`:`${b} es mayor que ${a}`
console.log(mayor);
*/
/* 
let n=1,u=2,c=3;

if (n>u && n>c) {
    console.log(n+"es mayor que "+u+" y "+c)
} else if (n<u && u>c){
    console.log(u+"es mayor que "+n+" y "+c)
} else if (c>n && c>u){
    console.log(c +" es mayor que "+u+" y "+n)
}else{
    console.log("nada")
}
*/
/*
 let numero=4;

 if (numero %2==0){
    console.log("numero par");
 }else {
    console.log("Numero impar");
 }

          for (let i = 2; i <= 10; i+=2) 
            console.log(i);
            
            
 for (let i = 0; i < 20; i++) {
    if (i %2==0){
        console.log(i);
        
    }
    
 }        

*/
/*

let compra=1;
if (1<= compra  && 4 >=compra){
    
    var descuento=0.10;
    var precio_final = compra-(compra*descuento);
    console.log("su compra fue de: "+compra+" Su descuento es de "+descuento);
    console.log("El precio con descuento es: "+ precio_final);

}
else if ( 5 <= compra  && compra <9) {
    var descuento2=0.15;
    var precio_final2 = compra-(compra*descuento2);
    console.log("su compra fue de: "+compra+" Su descuento es de "+descuento2);
    console.log("El precio con descuento es: "+ precio_final2);

}
else if (compra =>10) {
    var descuento3=0.20;
    var precio_final3 = compra-(compra*descuento3);
    console.log("su compra fue de: "+compra+" Su descuento es de "+descuento3);
    console.log("El precio con descuento es: "+ precio_final3);
}
else {
    console.log("Error");
}
*/
let cont=0;
let multi=7;
/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while(cont<10){
    cont++;
    multiplicacion=multi*cont;
    console.log(`Tablas de multiplicacion del numero 7: 7 x ${cont} = ${multiplicacion}`)
}

let resultad=0;
for (let f = 0; f <= 5; f++) {
    resultad +=f;
    console.log(`f es ${f} y resultado es ${resultad}`)
    console.log(`resultado actual es ${resultad}`)
}
let parcial=5.5;
let = parseFloat = parcial_final= 5.5;
let =parseFloat = promedio=(parcial+parcial_final)/2;

if (promedio >= 6.0) {
    console.log("Paso el Semestre "+promedio);
} else {
    console.log("perdio el semenstre "+promedio);
    
}

function miPrimerFuncion (){
for (let f = 0; f <= 10; f++) {
    console.log(f);
    if (f %2==0) {
     console.log(f);   
    }
    
}
return
}
miPrimerFuncion();