const sumar = (num1,num2) => num1-num2;
console.log(sumar(10,52));


const compara = (a,b) => {
    if (a<b){
        return 1
    }else {
        return 0
    }
}
console.log(compara(1,5))

//Usando operador terniario (?) se valida una condicion y se ejecuta 'par y menor' o '0'
const compara2 = (a,b) => (a !==b && a % 2==0 ? 'Par' : 'Impar')

console.log(compara2(-9,50))