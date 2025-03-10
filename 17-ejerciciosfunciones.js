// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sum(a, b) {
    console.log(a + b)
}
sum (13, 27)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

function findMaxNumber(array) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
const myArray = [1, 2, 3, 4];
console.log(`El número mayor es: ${findMaxNumber(myArray)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

function countVowels(str) {
    const vowels = `aeiouAEIOU`;
    let vowelCount = 0;

    for (let i= 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
const myString = 'Hellos Javascript';
console.log(`Número de vocales: ${countVowels(myString)}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function toUpperCaseArray(strings) {
    const upperCaseStrings = [];
    for (let i = 0; i < strings.length; i++) {
        upperCaseStrings.push(strings[i].toUpperCase());
    }
    return upperCaseStrings;
}
const myStrings = ['hello', 'world', 'javascript'];
console.log(`Strings en mayúsculas: ${toUpperCaseArray(myStrings).join(', ')}`)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i= 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const number = 7;
console.log(`¿El número ${number} es primo? ${isPrime(number)}`)

// 6. Crea una función que reciba dos array y devuelva un nuevo array que contenga los elementos comunes entre ambos.

function findCommonElements(array1, array2) {
    const commonElements = [];
    for (let i= 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            commonElements.push(array1[i]);
        }
    }
    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(`Elementos comunes: ${findCommonElements(array1, array2).join(', ')}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array [i];
        }
    }
    return sum;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`La suma de los números pares es: ${sumEvenNumbers(numbersArray)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function squareNumbers(array) {
    const squaredArray = [];
    for (let i = 0; i < array.length; i++) {
        squaredArray.push(array[i] ** 2);
    }
    return squaredArray;
}

const numerosArray = [1, 2, 3, 4, 5];
console.log(`Array con números al cuadrado: ${squareNumbers(numerosArray).join(', ')}`)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
const myStr = 'Hello Javascript World';
console.log(`Cadena con palabras en orden inverso: ${reverseWords(myStr)}`)

// 10. Crea una función que calcule el factorial de un número dado.

function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
const numero = 5;
console.log(`El factorial de ${numero} es: ${factorial(numero)}`)