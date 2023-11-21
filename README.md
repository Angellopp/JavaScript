## Tarea

### Preguntas conceptuales
Piensa en las siguientes preguntas sobre JavaScript. Si puedes, ¡coméntalo con tus compañeros!

- En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?
- En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?
- ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
- ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?

### Respuestas

1. En JavaScript, las operaciones de red son asíncronas, lo que significa que no es necesario esperar, permitiendo que el programa continúe su ejecución mientras aguarda la respuesta de la red.

2. La programación asincrónica en JavaScript posibilita realizar acciones tras la finalización de operaciones de red, evitando bloqueos y facilitando un flujo más fluido.

3. Respecto a la herencia en JavaScript, se basa en prototipos en lugar de clases convencionales, transmitiendo conocimientos entre objetos.

4. El DOM (Modelo de Objetos del Documento) representa la estructura de la página web. jQuery es una biblioteca que simplifica la manipulación del DOM con un código más conciso.

#### Comparaciones

```javascript
console.log(undefined == null);
console.log(NaN == NaN);
console.log(null == false);
console.log(0 == false);
console.log("" == false);
```
#### OUTPUT

```javascript
true
false
false
true
true
```

#### Arrays

```javascript
a = [1,2,3] + [4,5,6]
console.log(a)
b = !![]
console.log(b)
c = [] == true
console.log(c)
d = [10,1,3].sort()
console.log(d)
e = [] == 0
console.log(e)
```
#### OUTPUT

```javascript
1,2,34,5,6
true
false
[ 1, 10, 3 ]
true
```
#### Clausuras

Código:

```javascript
function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);
```
#### OUTPUT

 `19`

#### Algoritmos

Reescribe la función para que se convierta en una `O(N)` más rápida:

```javascript
function greatestNumber(array) {
    for (let i of array) {
        let isIValTheGreatest = true;
        for (let j of array) {
            if (j > i) {
                isIValTheGreatest = false;
            }
        }
        if (isIValTheGreatest) {
            return i;
        }
    }
}
```

Ahora vamos a convertir este algoritmo en `O(N)`

```javascript
function greatestNumber(array){
    let max = array[0];
    for(let i of array){
        if(i > max){
            max = i
        }
    }
    return max;
}
```
Aquí la complejidad comprende principalmente el bucle `for` con `n` iteraciones, por lo que la complejidad es `O(N)`.

#### Pregunta

¿Cuál es la complejidad temporal de esta función en términos de notación O grande? Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios.

```javascript
function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
            foundX = true;
        }
    }
    return foundX;
}
```

La complejidad es de `O(N)` ya que principalmente la complejidad contiene un bucle `for` con `n` iteraciones, con `n = string.length`

Ya que la funcion solo retorna si existe o no una `X` en el `string`, podemos hacer retornar `true` a la funcion a la primera coincidencia. En caso no haya, retorna ``false``, en la misma complejidad pero con menos operaciones en los mejores escenarios.

```javascript
function containsX(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
            return true;
        }
    }
    return false;
}
```

Escribe una función que devuelva el primer carácter no duplicado de una cadena. Por ejemplo, la cadena "mínimum" tiene dos caracteres que solo existen una vez: la n y la u, por lo que su función debería devolver la n, ya que aparece primero. La función debe tener una eficiencia de O(N).

```javascript
function primerNoDuplicado(cadena) {
    const frecuencia = {};

    // Contamos la frecuencia de cada carácter
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
    }

    // Encontramos el primer carácter no duplicado
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (frecuencia[caracter] === 1) {
            return caracter;
        }
    }
    return null;
}
```
#### INPUT
```javascript
a = primerNoDuplicado("mama");
b = primerNoDuplicado("mamas");
console.log(a)
console.log(b)
```

#### OUTPUT

```javascript
null
s
```


#### Clases

Clase Pokémon:

- El constructor toma 3 parámetros (HP, ataque, defensa)
- El constructor debe crear 6 campos (HP, ataque, defensa, movimiento, nivel, tipo). Los valores de (mover, nivelar,
  tipo) debe inicializarse en ("", 1, "").
- Implementa un método `flight` que arroje un error que indique que no se especifica ningún movimiento.
- Implementa un método `canFly` que verifica si se especifica un tipo. Si no, arroja un error. Si es así, verifica si el tipo incluye "volar". En caso afirmativo, devuelve verdadero; si no, devuelve falso.


```javascript
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
```
Clase Charizard:

- El constructor toma 4 parámetros (HP, ataque, defensa, movimiento)
- El constructor configura el movimiento y el tipo (para "disparar/volar") además de establecer HP, ataque y defensa como el constructor de superclase.
- Sobreescribe el método fight. Si se especifica un movimiento, imprime una declaración que indique que se está utilizando el movimiento y devuelve el campo de ataque. Si no, arroja un error.

```javascript
class Charizard extends Pokemon{
    constructor(hp, ataque, defensa, movimiento) {
        this.movimiento = movimiento;
        this.tipo = "volador";
        super(hp, ataque, defensa);
    }
    fight(){
        super.fight();
        console.log(`Se usó ${this.movimiento} con un ataque de ${this.ataque}`)
    }
}
```
Ahora creamos un objeto Charizard
#### INPUT
```javascript
const chari1 = new Charizard(90, 30, 20, "Terremoto");
chari1.fight();
```

#### OUTPUT
```javascript
Se usó Terremoto con un ataque de 30
```