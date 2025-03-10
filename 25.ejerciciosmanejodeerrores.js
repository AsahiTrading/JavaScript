// 1. Captura una excepción utilizando try-catch

let myObject
try {
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally.

function main() {
    try {
        // Código que puede lanzar una excepción
        let result = 10 / 0;
    } catch (e) {
        // Código para manejar la excepción
        console.log("Se ha producido una excepción aritmética: " + e.message);
    } finally {
        // Código que se ejecuta siempre, haya o no excepción
        console.log("El bloque finally siempre se ejecuta.");
    }
}

main();

// 3. Lanza una excepción genérica.

try {
    // Lanza una excepción genérica
    throw new Error("Este es un mensaje de excepción genérica");
} catch (e) {
    // Código para manejar la excepción
    console.log("Se ha producido una excepción: " + e.message);
}

// 4. Crea una excepción personalizada.

class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomException";
    }
}

class Main {
    static main() {
        try {
            // Lanza una excepción personalizada
            throw new CustomException("Este es un mensaje de excepción personalizada");
        } catch (e) {
            // Código para manejar la excepción personalizada.
            console.log("Se ha producido una excepción personalizada: " + e.message);
        }
    }
}

Main.main();

// 5. Lanza una excepción personalizada.

class CustomException extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomException";
    }
  }
  
  function main() {
    try {
      // Lanza una excepción personalizada
      throw new CustomException("Este es un mensaje de excepción personalizada");
    } catch (e) {
      // Código para manejar la excepción personalizada.
      console.log("Se ha producido una excepción personalizada: " + e.message);
    }
  }
  
  main();

// 6. Lanza varias excepciones según una lógica definida.

class CustomExceptionA extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomExceptionA";
    }
}

// filepath: CustomExceptionB.java
class CustomExceptionB extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomExceptionB";
    }
}

function main() {
    try {
        // Lógica que determina qué excepción lanzar
        let value = 10; // Puedes cambiar este valor para probar diferentes excepciones

        if (value < 0) {
            throw new CustomExceptionA("El valor es negativo");
        } else if (value > 5) {
            throw new CustomExceptionB("El valor es mayor que 5");
        } else {
            console.log("El valor está dentro del rango permitido");
        }
    } catch (e) {
        if (e instanceof CustomExceptionA) {
            // Código para manejar CustomExceptionA
            console.log("Se ha producido CustomExceptionA: " + e.message);
        } else if (e instanceof CustomExceptionB) {
            // Código para manejar CustomExceptionB
            console.log("Se ha producido CustomExceptionB: " + e.message);
        } else {
            throw e; // Re-lanza la excepción si no es una de las esperadas
        }
    }
}

main();

// 7. Captura varias excepciones en un mismo try-catch.

try {
    // Código que puede lanzar varias excepciones
    let str = null;
    console.log(str.length); // Puede lanzar NullPointerException

    let array = new Array(5);
    console.log(array[10]); // Puede lanzar ArrayIndexOutOfBoundsException

    let number = parseInt("abc"); // Puede lanzar NumberFormatException

} catch (e) {
    // Código para manejar las excepciones
    console.log("Se ha producido una excepción: " + e.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

const values = ["10.5", "abc", "20.3", "xyz", "30.7"];

for (const value of values) {
    try {
        // Intenta transformar el valor a float
        const floatValue = parseFloat(value);
        console.log("Valor transformado: " + floatValue);
    } catch (e) {
        // Captura y muestra el error
        console.log("Error al transformar '" + value + "' a float: " + e.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.

class PropertyNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "PropertyNotFoundException";
    }
}

class MyObject {
    constructor(property) {
        this.property = property;
    }

    getProperty() {
        return this.property;
    }
}

function checkProperty(obj, propertyName) {
    return new Promise((resolve, reject) => {
        const value = obj[`get${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}`]();
        if (value === null || value === undefined) {
            reject(new PropertyNotFoundException(`La propiedad '${propertyName}' no existe o es nula.`));
        } else {
            resolve(value);
        }
    });
}

async function main() {
    let obj = new MyObject(null);

    try {
        await checkProperty(obj, "property");
        console.log("La propiedad existe y no es nula.");
    } catch (e) {
        if (e instanceof PropertyNotFoundException) {
            console.log("Se ha producido una excepción: " + e.message);
        } else {
            console.error("Ocurrió un error inesperado:", e);
        }
    }
}

main();

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.

class MainA {
    static main(args) {
        try {
            MainA.retryOperation(10);
        } catch (e) {
            console.log("Operación fallida después de múltiples reintentos: " + e.message);
        }
    }

    static retryOperation(maxRetries) {
        let attempt = 0;
        return new Promise((resolve, reject) => {
            const attemptOperation = () => {
                if (attempt >= maxRetries) {
                    reject("Se alcanzó el número máximo de reintentos");
                    return;
                }
                attempt++;
                MainA.performOperation()
                    .then(() => {
                        console.log("Operación exitosa en el intento " + attempt);
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error en el intento " + attempt + ": " + e);
                        attemptOperation();
                    });
            };
            attemptOperation();
        });
    }

    static performOperation() {
        return new Promise((resolve, reject) => {
            // Simula una operación que puede fallar
            if (Math.random() > 0.7) {
                reject("Error simulado");
                return;
            }
            // Operación exitosa
            console.log("Operación realizada con éxito");
            resolve();
        });
    }
}

MainA.main();