// if/else/else if/ternaria

let nota = 10
let message = ""
if (nota == 10) {
    console.log("Aprobado")
}
if (nota == 0) {
    console.log("Reprobado")
}
if (nota < 5) {
    console.log("Reprobado")
}

message = nota == 10 ? "Aprobado" : "Reprobado"
console.log(message)

// 1. Imprime por consola tu nombre si una variable toma su valor.

let myName = 1
if (myName == 1){
    console.log("Rafael Mora")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos.

let usuario = "Rafa01"
let password = "0o102030405"
let mensaje = "Aceptado"
if (usuario == "Rafa01" && password == "0o102030405") {
    console.log(mensaje)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let number = 0
if (number < 0 && number != 0) {
    console.log("Negativo")
} else if (number > 0 && number != 0) {
    console.log("Positivo")
} else {
    console.log ("Cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

let age = 18
let edadActual = 19
let restante = age - edadActual
if (edadActual < age) {
    console.log("No Puede votar aún")
} else if (edadActual >= age) {
    console.log("Puede votar")
}
if (edadActual < age)
    console.log ("Te faltan ", restante)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.

let valor = ""
valor = edadActual >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(valor)

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes".

let mes = 6
if (mes <= 3){
    console.log("Verano")
} else if (mes > 4 && mes <= 6){
    console.log("Otoño")
} else if (mes > 7 && mes <= 9){
    console.log("Invierno")
} else if (mes >= 10){
    console.log("Primavera")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

mes = 6
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("Tiene 31 días")
} else if (mes == 2 || mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("Tiene 30 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let greet = "Ruso"
let greeting

switch (greet) {
    case "Español":
        greeting = "Hola"
        break
    case "Inglés":
        greeting = "Hello"
        break
    case "Alemán":
        greeting = "Hallo"
        break
    case "Japonés":
        greeting = "Konnichiwa"
        break
    case "Chino":
        greeting = "Ni Hao"
        break
    case "Ruso":
        greeting = "Привет"
        break
    default:
        greeting = "Idioma no reconocido"
}

console.log(greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

let month = 8
let estacion

switch (month) {
    case 0, 1, 2:
        estacion = "Verano"
        break
    case 3, 4, 5:
        estacion = "Otoño"
        break
    case 6, 7, 8:
        estacion = "Invierno"
        break
    case 9, 10, 11:
        estacion = "Primavera"
        break
    default:
        estacion = "Equivocado"
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7.


let noMes = 11
let dias
switch (noMes) {
    case 1:
        dias = "31 días"
        break
    case 2:
        dias = "28 dias"
        break
    case 3:
        dias = "31 días"
        break
    case 4:
        dias = "30 días"
        break
    case 5:
        dias = "31 días"
        break
    case 6:
        dias = "30 días"
        break
    case 7: 
        dias = "31 días"
        break
    case 8:
        dias = "31 días"
        break
    case 9:
        dias = "30 días"
        break
    case 10:
        dias = "31 días"
        break
    case 11:
        dias = "30 días"
        break
    case 12:
        dias = "31 días"
        break
    default:
        dias = "Equivocado"
}
console.log(dias)