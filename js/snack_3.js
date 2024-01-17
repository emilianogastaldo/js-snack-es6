/*
SNACK 3

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring
*/

/**
 * Creo l'array di oggetti
 * 
 * ? Devo capire come trovare il peso minore.
 * 
 * Tiro fuori un array con solo il peso
 * Comparo i valori dell'array per trovare il più basso
 * Trovato il più basso vado a stampare l'oggetto che ha quel peso.
 */
console.log('---- SNACK 3 ----');

const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const bikesList = [
    { name: 'bike 1', weight: 7 },
    { name: 'bike 2', weight: 1 },
    { name: 'bike 3', weight: 3 },
    { name: 'bike 4', weight: 4 },
    { name: 'bike 5', weight: 5 },
    { name: 'bike 6', weight: 6 },
    { name: 'bike 7', weight: 7 },
];

console.log('Lista iniziale di bici: ', bikesList);

