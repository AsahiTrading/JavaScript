// if, else, if, else

// if(si)

let age = 40

if (age == 40) {
    console.log("La edad es 40")
}

// else (si no)
let message = ""
if (age == 40) {
    console.log("La edad es 40")
} else {
    console.log("La edad no es 40")
}

// else if (si no, si)

if (age == 40) {
    console.log("La edad es 40")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 40 ni es menor de edad")
}

// Operadores ternarios

message = age == 40 ? "La edad es 40" : "La edad no es 40"
console.log(message)

// Switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)