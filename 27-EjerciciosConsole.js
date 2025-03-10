// 1. Crea una función que utilice error correctamente.

// divide realiza la división de dos números y maneja el caso de división por cero.
function divide(a, b) {
    if (b === 0) {
        throw new Error("no se puede dividir por cero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Resultado:", result);
} catch (err) {
    console.log("Error:", err.message);
}

// 2. Crea una función que utilice warn correctamente.

function warn(message) {
    console.warn("WARNING:", message);
}

function mediaDeviceInfo() {
    warn("Este es un mensaje de advertencia");
    console.log("El programa continúa ejecutándose normalmente");
}

mediaDeviceInfo();

// 3. Crea una función que utilice info correctamente.

function showInfo(message) {
    console.info("INFO:", message);
}

showInfo("Este es un mensaje informativo")

// 4. Utiliza table

function showTable(data) {
    console.table(data)
}

const data = [
    { name: "Rafael", age: 40, city: "Valparaíso" },
    { name: "José", age: 33, city: "Viña del Mar" },
    { name: "Benjamín", age: 20, city: "Talca" }
]

showTable(data)

// 5. Utiliza group

function showGroupedInfo() {
    console.group("Información Agrupada");
    console.info("Este es un mensaje informativo dentro del grupo");
    console.warn("Este es un mensaje de advertenccia dentro del grupo");
    console.error("Este es un mensaje de error dentro del grupo");
    console.groupEnd();
}

showGroupedInfo()

// 6. Utiliza time

function measureExecutionTime() {
    console.time("Tiempo de ejecución");
    for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i);
    }
    console.timeEnd("Tiempo de ejecución")
}

measureExecutionTime()

// 7. Valida con assert si un número es positivo.

function validatePositiveNumber(num) {
    console.assert(num > 0, `El número ${num} no es positivo`);
}
// Ejemplo de uso de la función validatePositiveNumber
validatePositiveNumber(5); // No mostrara nada en la consola porque la afirmación es verdadera
validatePositiveNumber(-3) // Mostrará un mensaje de error en la consola porque la afirmación es falsa.

// 8. Utiliza count

function countOccurrences(label) {
    console.count(label);
}

// Ejemplo de uso de la función countOccurrences
countOccurrences("apple")
countOccurrences("banana")
countOccurrences("apple")
countOccurrences("banana")
countOccurrences("apple")

// 9. Utiliza trace

function showTrace() {
    console.trace("Trace de la pila de llamadas");
}

// Ejemplo de uso de la función showTrace
function exampleFunction() {
    showTrace();
}

exampleFunction()

// 10. Utiliza clear

function clearConsole() {
    console.clear()
}

// Ejemplo de uso de la función clearConsole
clearConsole()