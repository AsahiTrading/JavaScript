// Sets

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Rafael", "Mora", "rafaelpartner", 40, true, "rafaelandres.7003@outlook.es"])

console.log(mySet)

// Métodos Comunes.

// add y delete

mySet.add("https://libertex.org/es?aff_id=44960&cxd=44960_726103")

console.log(mySet)

mySet.delete("https://libertex.org/es?aff_id=44960&cxd=44960_726103") // Entregar exactamente lo que quiero eliminar.

console.log(mySet)

console.log(mySet.delete("Rafael"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Mora"))
console.log(mySet.has("Rafael"))

// size

console.log(mySet.size)

// Convertir un Set a array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir un Array a Set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("rafaelandres.7003@outlook.es")
mySet.add("RafaelAndres.7003@outlook.es")
mySet.add("rafaelandres.7003@outlook.es")
console.log(mySet)