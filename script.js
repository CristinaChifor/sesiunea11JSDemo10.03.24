let checked = "Hello World";
console.log(checked);

// array - structura de date ( poate contine mai multe tipuri de date)
// const art1 = ['a', 'b', 'c'];
// array: datele incep de la indexul 0

// Array
// Declarare arry

const myProducts = ['Camasa', 'Pantaloni', 'Manusi'];
console.log('myProducts:', myProducts);
console.log(`First item in my products is ${myProducts[0]}`);
console.log(`Length of my products is ${myProducts.length}`);

// Adaugare de elem .push

const newItem = "Pantofi";
myProducts.push(newItem);
console.log('myProducts after push:', myProducts);

myProducts.push(25);
console.log(myProducts);

// Modificarea unui element 

myProducts[0] = "Tricou";
console.log(`After changing first item`, myProducts);

// Stergerea unui element- ultimul elem din array

myProducts.pop();
console.log(`My list of items after pop-ing`, myProducts);

// Adaugarea unui elem la inceput de array .unshift

myProducts.unshift("Camasa");
console.log(`My list of items after unshift`, myProducts);

// Stergerea unui elem de la inceputul listei/ array-ului .shift

myProducts.shift();
console.log(`My list of items after shift`, myProducts);

// IndexOf - gasirea index-ului unui element din Array

const indexOfPantaloni= myProducts.indexOf('Pantaloni');
console.log(`Elem Pantaloni se afla in lista la indexul ${indexOfPantaloni}`);

// .slice returneaza o portiune a array-ului. Subset al unui array

const subsetOfMyProducts = myProducts.slice(1, 3);
console.log(`Subset from 1 to 3 is:`, subsetOfMyProducts);

// .splice modif cont array-ului adaugand elem la index start

myProducts.splice(2, 1, "Camasa");
console.log(`My products after splice (2, 1, "Camasa") is`, myProducts);

// Concatenare de doua sau mai multe array-uri

const concatenatedArrays = myProducts.concat(subsetOfMyProducts);
console.log(`After concatenation of subset`, concatenatedArrays);


// Date de tip Object
// În JavaScript, obiectele sunt structuri de date complexe care permit stocarea și organizarea datelor în perechi cheie-valoare. 

let person = {
    name: "John",
    surname: "Doe",
    address: {
        street: "Cetatii",
        number: 21,
        appartment: "B1",
        block: "7B",
        tronson: 1,
        zipCode: "1002023",
        city: "Cluj",
        country: "Romania",
        county: "Cluj-Napoca"
    },
    age: 30

};

console.log(`person:`, person);
console.log(`nume persoana: ${person.name}`);
console.log(`cod postal ${person.address.zipCode}`);
console.log(`surname ${person.surname}`);
//console.log(person.appartment); returneaza undefined
console.log(person.address.appartment);

// Proprietățile unui obiect pot fi accesate utilizând notația cu punct sau notația cu paranteze drepte ([ ]):
// brackets notation

console.log(`person surname: ${person["surname"]}`);

// Proprietățile unui obiect pot fi modificate sau adăugate prin atribuirea unei noi valori.
// Modificare valori in obiect

person.name = "Ion";
console.log(`name: `, person.name);

person.age = 31;
person ["gender"] = "male";
console.log(person);

// Compararea Obiectelor - se compara ref obiectelor: ref a doua obiecte sunt diferite
//Două obiecte sunt considerate egale doar dacă se referă la aceeași instanță a obiectului.
// In variabile se tine o referinta catre obiect nu obiectul in sine

const obj1 = {a: 10, b: true};
const obj2 = {a: 10, b: true};
const obj3 = obj1;
// au aceeasi referinta
console.log(`obj1 === obj2 => ${obj1 === obj2}`); // returneaza false deoarece avem doua obiecte cu aceeasi val dar instantele sunt diferite/ adrese diferite
console.log(`obj1 === obj3 => ${obj1 === obj3}`); // returneaza true in obj3 salvam adresa catre obj1; doua copii ale aceleasi adrese

// comparare dupa proprietati

const areEqual = obj1.a === obj2.a && obj2.b === obj3.b;
console.log(`areEqual: `, areEqual);





