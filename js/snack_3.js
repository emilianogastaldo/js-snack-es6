/*
SNACK 3

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring
*/

/**
 * Creo l'array di oggetti 
 * 
 * 1) Comparo i valori dell'array per trovare il più basso
 * 2) Per farlo prendo il primo e inizio a compararlo agli altri
 * 3) Trovato il più basso vado a stampare l'oggetto che ha quel peso.
 */
console.log('---- SNACK 3 ----');

//Creo un array di oggetti
const bikesList = [];
for (let i = 0; i < 10; i++) {
    bikesList.push(
        { name: `bike ${i + 1}`, weight: randomNumber() }
    );
}
console.log('Lista iniziale di bici: ', bikesList);

// Creo una costante in cui salvare il peso minore
let lightBike = bikesList[0].weight; // Potevo usare Infinity

// Cerco la più leggera
bikesList.forEach(({ weight }) => {
    if (lightBike > weight) lightBike = weight
})

// Stampo il risultato
let message = 'La bici più leggera è: '
bikesList.forEach(({ name, weight }) => {
    if (weight === lightBike) message += `${name} `;
});
console.log(message, 'con il peso di: ' + lightBike);

// reduce fa il return di quello che voglio utilizzare al prossimo giro
const lightestItem = bikesList.reduce((result, bike) => {
    return bike.weight < result.weight ? bike : result
    // if (bike.weight < result.weight) return bike;
    // else return result;
}, bikesList[0]);

console.log(lightestItem);
console.log('');