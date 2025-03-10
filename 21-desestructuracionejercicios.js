// 1. Usa desestructuración para extraer los dos primeros elementos de un array.

const array = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = array;

console.log(`Primer elemento: ${firstElement}`);
console.log(`Segundo elemento: ${secondElement}`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.

const array2 = [1, 2];
const [firstEl, secondEl, thirdElement = 3] = array2;

console.log(`Primer elemento: ${firstEl}`);
console.log(`Segundo elemento: ${secondEl}`);
console.log(`Tercer elemento (con valor predeterminado): ${thirdElement}`);

// 3. Usa desestructuración para extraer dos propiedades de un objeto.

const person = {
    name: "Rafael",
    age: 40,
    city: "Valparaíso"
};

const { name, age } = person;

console.log(`Nombre: ${name}`);
console.log(`Edad: ${age}`);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asignalas a
// nuevas variables con nombres diferentes.

const person1 = {
    name: "Rafael",
    age: 40,
    city: "Valparaíso"
};

const { name: personName, age: personAge } = person1;

console.log(`Nombre: ${personName}`);
console.log(`Edad: ${personAge}`)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.

const person2 = {
    name: "Rafael",
    age: 40,
    address: {
        street: "Calle Amanecer",
        city: "Valparaíso"
    }
};

const { address: { street, city } } = person2;

console.log(`Calle: ${street}`);
console.log(`Ciudad: ${city}`)

// 6. Usa propagación para combinar dos arrays en uno nuevo.

const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const combinedArray = [...array3, ...array4];

console.log(`Array combinado: ${combinedArray}`)

// 7. Usa propagación para crear una copia de un array.

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log(`Array original: ${originalArray}`);
console.log(`Array copiado: ${copiedArray}`)

// 8. Usa propagación para combinar dos objetos en uno nuevo.

const obj3 = {
    name: "Rafael",
    age: 40
};
const obj4 = {
    city: "Valparaíso",
    country: "Chile"
};
const combinedObj = {...obj3, ...obj4 };

console.log(`Objeto combinado:`, combinedObj)

// 9. Usa propagación para crear una copia de un objeto.

const originalObj = {
    name: "Rafael",
    age: 40,
    city: "Valparaíso"
};

const copiedObj = { ...originalObj };

console.log(`Objeto original:`, originalObj);
console.log(`Objeto copiado:`, copiedObj)

// 10. Combina desestructuración y propagación.

const person4 = {
    myName: "Rafael",
    myAge: 40,
    city: "Valparaíso",
    country: "Chile"
};
//(Desestructuración para extraer propiedades y propagación para crear un objeto nuevo)
const { myNamey, myAge, ...rest } = person4;
const newPerson = { myName, myAge, ...rest, profession: "Developer" }

console.log(`Nuevo objeto:`, newPerson)