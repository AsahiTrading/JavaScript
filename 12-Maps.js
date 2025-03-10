// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Rafael"],
    ["email", "rafaelandres.7003@outlook.es"],
    ["age", 40]
])

console.log(myMap)

// Métodos y Propiedades.

// Set

myMap.set("alias", "rafaelpartner")
myMap.set("name", "Rafael Mora")

console.log(myMap)

// Get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// Has

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// Delete

myMap.delete("email")

console.log(myMap)

// Keys

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// Size

console.log(myMap.size)

// Clear

myMap.clear()

console.log(myMap)
