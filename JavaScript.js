/*console.log(undefined == null);
console.log(NaN == NaN);
console.log(null == false);
console.log(0 == false);
console.log("" == false);*/

// a = [1,2,3] + [4,5,6]
// console.log(a)
/*b = !![]
console.log(b)
console.log([] == true)
c = [10,1,3].sort()
console.log(c)
console.log([] == 0)*/

/*function f1(x) {
    var baz = 3;
    return function (y) {
        console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);*/

// function greatestNumber(array) {
//     for (let i of array) {
//         let isIValTheGreatest = true;
//         for (let j of array) {
//             if (j > i) {
//                 isIValTheGreatest = false;
//             }
//         }
//         if (isIValTheGreatest) {
//             return i;
//         }
//     }
// }

// a = greatestNumber([1,992,3,45,5])
// console.log(a)

// function greatestNumber(array){
//     let max = array[0];
//     for(let i of array){
//         if(i > max){
//             max = i
//         }
//     }
//     return max;
// }

// b = greatestNumber([1,99200000,3,4566,500000])
// console.log(b)

// function containsX(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "X") {
//             return true;
//         }
//     }
//     return false;
// }

// a = containsX("Hola con X");
// console.log(a)

// function primerNoDuplicado(cadena) {
//     const frecuencia = {};

//     // Contamos la frecuencia de cada carácter
//     for (let i = 0; i < cadena.length; i++) {
//         const caracter = cadena[i];
//         frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
//     }

//     // Encontramos el primer carácter no duplicado
//     for (let i = 0; i < cadena.length; i++) {
//         const caracter = cadena[i];
//         if (frecuencia[caracter] === 1) {
//             return caracter;
//         }
//     }
//     return null;
// }

// a = primerNoDuplicado("mama");
// b = primerNoDuplicado("mamas");
// console.log(a)
// console.log(b)
//Clases:

class Pokemon{
    constructor(hp, ataque, defensa) {
        this.hp = hp
        this.ataque = ataque
        this.defensa = defensa
        this.movimiento = ""
        this.nivel = 1
        this.tipo = ""
    }
    fight(){
        if(this.movimiento === ""){
            throw new Error("No hay nigun movimiento")
        }
    }
    canFLy(){
        if(this.tipo === ""){
            throw new Error("No se especificó el tipo")
        }
        return this.tipo === "volador";
    }
}

class Charizard extends Pokemon{
    constructor(hp, ataque, defensa, movimiento) {
        super(hp, ataque, defensa);
        this.movimiento = movimiento;
        this.tipo = "volador";
    }
    fight(){
        super.fight();
        console.log(`Se usó ${this.movimiento} con un ataque de ${this.ataque}`)
    }
}

const chari1 = new Charizard(90, 30, 20, "Terremoto");
const chari2 = new Charizard(30, 40, 20);
chari1.fight();
chari2.fight();