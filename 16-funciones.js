// Funciones

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Rafael")
myFuncWithParams("Rafaelpartner")

// Funciones Anónimas

const myFunc2 = function(name) {
    console.log(`¡Hola, ${name}!`)    
}

myFunc2("Rafael Mora")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Rafael Mora")
myFunc4("Rafael Mora")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}
sum(5, 10)
sum(5)
sum(0)

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()

// intern() Error: Fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Rafael", "Mora", "rafaelpartner", 40, true, "rafaelandres.7003@outlook.es"])

myMap = new Map([
    ["name", "Rafael"],
    ["email", "rafaelandres.7003@outlook.es"],
    ["age", 40]
])

myArray.forEach(function (value) {
    console.log(value)
})
    
myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))