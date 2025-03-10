// 1. Crea una variable para cada operación aritmética.

let a = 15
let b = 20
console.log(a + b) // Suma
console.log(a -b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo
console.log(a ** b) // Exponente

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritméticas.

let myDate = 4
console.log(myDate)
myDate += 4
console.log(myDate)

myDate -= 4
myDate *= 4
myDate /= 4
myDate %= 4
myDate **= 4

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación.

console.log(a < b)
console.log(a <= b)
console.log(a == 15)
console.log(a == "15")
console.log(a == a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación.

console.log(a > b)
console.log(a >= b)
console.log(a == b)
console.log(a === b)
console.log(a != 15)

// 5. Utiliza el operador lógico and

console.log(5 > 4 & 40 < 50)

// 6. Utiliza el operador lógico or

console.log(5 > 4 || 40 > 50)

// 7. Combina ambos operadores lógicos.

console.log(5 < 10 && 15 < 20 || 40 < 50)

// 8. Añade alguna negación.

console.log(!(5 > 4 && 40 < 50))

// 9. Utiliza el operador ternario.

const isBurning = false
isBurning ? console.log("Está ardiendo") : console.log("No está ardiendo")

// 10. Combina operadores aritméticos, de comparación y lógicos.

console.log((a * b) > (a / b))
console.log(a > b || a < b)
