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
    
};


