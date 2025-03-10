// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.

for (let i = 1; i < 21; i++) {
    console.log(`${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.
let numbersArray = [];
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`La suma de los números del 1 al 100 es: ${sum}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let myNames = ["Rafael", "Hector", "Benjamín", "José", "Sandra", "Ruth"]
for(let valor of myNames) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

const s = 'Hello Javascript'
const v = 'aeiou'
let vowelCount = 0

for(let i = 0; i < s.length; i++) {
  for(let j=0; j < v.length; j++) {
    if(v[j] === s[i]) {
      vowelCount++
    }
  }
}
console.log(`Número de vocales: ${vowelCount}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
let product = 1;
for (let i = 0; i < numbersArray2.length; i++) {
    product *= numbersArray2[i];
}

console.log(`El producto de los números es: ${product}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto.

const str = 'Hello Javascript';
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(`Cadena invertida: ${reversedStr}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de fibonacci.

let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(`Los primeros 10 números de la secuencia de Fibonacci son: ${fibonacci.join(', ')}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga sólo los números mayores a 10.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80];
const numerosMayoresadiez = [];

for (let i= 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        numerosMayoresadiez.push(numeros[i]);
    }
}
console.log(`Números mayores a 10: ${numerosMayoresadiez.join(', ')}`)
