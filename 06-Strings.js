// Strings

// Concatenación.

let myName = "Rafael"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud.
console.log(greeting.length)

// Acceso a caracteres.
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Rafael"))
console.log(greeting.indexOf("Rafaelpartner"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Rafael"))
console.log(greeting.includes("Rafaelpartner"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Rafael", "Rafaelpartner"))

// Templates literals (Plantillas Literales)

let message = `Hola, este 
es mi 
curso de 
Javascript`
console.log(message)

// Interpolación de valores
let email = "rafaelandres.7003@outlook.es"
console.log(`Hola, ${myName}! Tu email es ${email}.`)   