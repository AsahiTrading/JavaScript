// 1. Crea una clase que reciba dos propiedades.

class SimpleClass {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
}

let instance = new SimpleClass("Valor1", "Valor2");
console.log(instance)

// 2. Añade un método a la clase que utilice las propiedades.

class SimpleClase {
    constructor(property3, property4) {
        this.property3 = property3;
        this.property4 = property4;
    }

    displayProperties() {
        console.log(`Property 3: ${this.property3}, Property 4: ${this.property4}`);
    }
}

let instance1 = new SimpleClase("Valor1", "Valor2");
console.log(instance)

// 3. Muestra los valores de las propiedades e invoca a la función.

instance1.displayProperties()

// 4. Añade un método estático a la primera clase.

class SimpleClases {
    constructor(property5, property6) {
        this.property5 = property5;
        this.property6 = property6;
    }

    displayProperties() {
        console.log(`Property 5: ${this.property5}, Property 6: ${this.property6}`);
    }

    static staticMethod() {
        console.log("Éste es un método estático");
    }
}

let instance2 = new SimpleClases("Valor1", "Valor2");
console.log(instance1)

// 5. Haz uso del método estático.

SimpleClases.staticMethod()

// 6. Crea una clase que haga uso de herencia.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} hace un ruido.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed
    }

    speak() {
        console.log(`${this.name} ladra.`);
    }
}

let myDog = new Dog("Firulais", "Labrador");
console.log(myDog);
myDog.speak()

// 7. Crea una clase que haga uso de getters y setters.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getter para name
    get name() {
        return this._name;
    }

    // Setter para name
    set name(newName) {
        this._name = newName;
    }

    // Getter para age
    get age() {
        return this._age;
    }

    // Setter para age
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("La edad debe ser un número positivo.");
        }
    }
}

let person = new Person("Rafael", 40);
console.log(person.name); // Rafael
console.log(person.age);  // 40

person.name = "Benjamín";
person.age = 20;

console.log(person.name); // Benjamín
console.log(person.age);  // 20

person.age = -5 // La edad debe ser un número positivo.

// 8. Modifica la clase con getters y setters para que use propiedades privadas.

class Person1 {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Getter para name
    get name() {
        return this.#name;
    }

    // Setter para name
    set name(newName) {
        this.#name = newName;
    }

    // Getter para age
    get age() {
        return this.#age;
    }

    // Setter para age
    set age(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("La edad debe ser un número positivo.");
        }
    }
}

let person1 = new Person1("Rafael", 40);
console.log(person1.name); // Rafael
console.log(person1.age);  // 40

person1.name = "Benjamín";
person1.age = 20;

console.log(person1.name); // Benjamín
console.log(person1.age);  // 20

person1.age = -5 // La edad debe ser un número positivo.

// 9. Utiliza los get y set y muestra sus valores.

let person3 = new Person1("Rafael", 40);
console.log(person3.name); // Rafael
console.log(person3.age);  // 40

person3.name = "Benjamín";
person3.age = 20;

console.log(person3.name); // Benjamín
console.log(person3.age);  // 20

person3.age = -5;

// 10. Sobrescribe un método de una clase que utilice herencia.

class Animal1 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} hace un ruido.`);
    }
}

class Dogs extends Animal1 {
    constructor(name, breed) {
        super(name);
        this.breed = breed
    }

    speak() {
        console.log(`${this.name} ladra.`);
    }
}

let myDogs = new Dogs("Firulais", "Labrador");
console.log(myDogs);
myDogs.speak()