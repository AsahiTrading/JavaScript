// 1. Crea un objeto con tres propiedades

let Person = {
    name: "Rafael",
    surname: "Mora",
    age: 40
}

// 2. Accede y muestra su valor.

console.log(Person)

// 3. Agrega una nueva propiedad.

Person.alias = "Rafaelpartner"

console.log(Person)

// 4. Elimina una de las tres primeras propiedades.

delete Person.age

console.log(Person)

// 5. Agrega una función e invócala.

Person = {
    name: "Rafael Mora",
    age: 40,
    alias: "Rafaelpartner",
    read: function() {
        console.log("La persona lee.")
    }
}
Person.read()

// 6. Itera las propiedades del objeto.

for (let key in Person) {
    console.log(key + ": " + Person[key])
}

// 7. Crea un objeto anidado.

Person = {
    name: "Rafael Mora",
    age: 40,
    alias: "Rafaelpartner",
    address: {
        street: "Calle Amanecer",
        number: 6,
        city: "Valparaíso"
    },
    read: function() {

    }
}
console.log(Person)

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(`Calle: ${Person.address.street}`);
console.log(`Número: ${Person.address.number}`);
console.log(`Ciudad: ${Person.address.city}`);

// 9. Comprueba si los dos objetos creados son iguales.

let Person1 = {
    name: "Rafael Mora",
    age: 40,
    alias: "Rafaelpartner",
    address: {
        street: "Calle Amanecer",
        number: 6,
        city: "Valparaíso"
    },
    read:function() {
        console.log("La persona lee.")
    }
};

let Person2 = {
    name: "Rafael Mora",
    age: 40,
    alias: "Rafaelpartner",
    address: {
        street: "Calle Amanecer",
        number: 6,
        city: "Valparaíso"
    },
    read: function() {
        console.log("La persona lee.")
    }
};

function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(`¿Son los dos objetos iguales? ${areObjectsEqual(Person1, Person2)}`)

// 10. Comprueba si dos propiedades diferentes son iguales.

function arePropertiesEqual(obj, prop1, prop2) {
    return obj[prop1] === obj[prop2];
}

console.log(`¿Son las propiedades 'name' y 'alias' iguales? ${arePropertiesEqual(Person1, 'name', 'alias')}`);
console.log(`¿Son las propiedades 'name' y 'name' iguales? ${arePropertiesEqual(Person1, 'name', 'name')}`)