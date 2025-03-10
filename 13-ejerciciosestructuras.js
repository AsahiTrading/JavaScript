// 1. Crea un array que almacene cinco animales.

let animals = ["perro", "gato", "elefante", "cocodrilo", "mono"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final.

animals.push("leon", "caballo")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición.

animals.splice(2, 1)
console.log(animals)

// 4. Crea un Set que almacene cinco libros.

let myBiblio = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(myBiblio)

// 5. Añade dos más. Uno de ellos repetido.

myBiblio.add("Libro6")
myBiblio.add("LIBRO1")
console.log(myBiblio)

// 6. Elimina uno concreto a tu elección.}

myBiblio.delete("LIBRO1")
console.log(myBiblio)

// 7. Crea un mapa que asocie el número del mes a su nombre.

let myMap = new Map()
myMap = new Map([
    ["Enero", "Sandra"],
    ["Febrero", "XXX"],
    ["Marzo", "Benja"],
    ["Marzo2", "Papá"],
    ["Abril", "Rafael"],
    ["Mayo", "Mahi"],
    ["Diciembre", "Jose"]
])
console.log(myMap)

// 8. Comprueba si el mes número cinco existe en el map e imprime su valor.

console.log(myMap.get("Mayo"))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano.

let myMap2 = new Map()
myMap2 = new Map([
    ["Enero", "Sandra"],
    ["Febrero", "XXX"],
    ["Diciembre", "Jose"]
])
console.log(myMap2)

// 10. Crea un Array, transformalo a un Set y almacénalo en un Map.

let myArray = Array.from(myBiblio)

myBiblio = new Set([
    "Libro1",
    "Libro2",
    "Libro3",
    "Libro4",
    "Libro5",
    "Libro6"
])
console.log(myBiblio)