// Array

// Declaración
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Rafael", "Mora", "Rafaelpartner", 40, true]
myArray2 = new Array("Rafael", "Mora", "Rafaelpartner", 40, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Rafael"
// myArray2[0] = "Mora"
myArray2[1] = "rafaelpartner"
myArray[4] = "rafaelpartner"

console.log(myArray2)

myArray = []
myArray[2] = "Rafael"
// myArray[0] = "Mora"
myArray[1] = "rafaelpartner"

console.log(myArray)

// Métodos Comunes.

myArray = []

// push y pop

myArray.push("Rafael")
myArray.push("Mora")
myArray.push("rafaelpartner")
myArray.push(40) // Agrega elementos en orden de llegada.

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve.
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina el primer y lo devuelve
console.log(myArray)

myArray.unshift("Rafael", "rafaelpartner") //Agrega elementos al inicio de la lista.
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // Alternativa
console.log(myArray)

// slice

myArray = ["Rafael", "Mora", "rafaelpartner", 40, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice
myArray.splice(1, 3)
console.log(myArray)

myArray = ["Rafael", "Mora", "rafaelpartner", 40, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)