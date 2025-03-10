// Console Methods

// log

console.log("¡Hola, Javascript!")

// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de Datos", new Error("Conexión fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Rafael", 40],
    ["Sandra", 38]
]

console.table(data)

data = [
    { name: "Rafael", age: 40},
    { name: "Sandra", age: 38}
]

console.table(data)

// group ()

console.group("Usuario:")
console.log("Nombre: Rafael")
console.log("Edad: 40")
console.groupEnd()

// time

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")



for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear() (Limpia la terminal)