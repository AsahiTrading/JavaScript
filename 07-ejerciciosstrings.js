// 1. Concatena dos cadenas de texto.

let myName = "Rafael"
let mySecondname = "Mora"
console.log(myName, mySecondname)

// 2. Muestra la longitud de una cadena de texto.

console.log(myName.length)

// 3. Muestra el primer y último caracter de un string.

console.log(myName[0])
console.log(myName[5])

// 4. Convierte a mayúsculas y minúsculas un string.

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.

let greeting = `Hola, 
este es mi saludo 
de verano`
console.log(greeting)

// 6. Interpola el valor de una variable en un string.

console.log(`Hola, ${myName}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

console.log(`Hola,-${myName}-${mySecondname}.`)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(myName.includes("Rafael"))

// 9. Comprueba si dos strings son iguales.

console.log(myName.indexOf("Rafaelpartner"))

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(myName.slice(0, 6), mySecondname.slice(0, 4))