// Operadores

// Operadores Aritméticos

console.log(5 + 10) // Suma

// O bien...

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo (resto de la división)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)


// Operadores de Asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Es lo mismo que [myVariable = myVariable + 2]
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor

console.log(a == a)
console.log(a === a) // Igualdad por Identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")

console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 == "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy Values (Valores verdaderos)
// Todos los números positivos y negativos, menos el cero.
// Todas las cadenas de texto, menos las vacías.
// El boolean True.

// Falsy Values (Valores falsos)
// Cero.
// 0n
// null
// Undefined
// NaN
// El boolean False
// Cadenas de texto vacías.


// Operadores Lógicos
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not(!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = false

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
