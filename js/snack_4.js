/*
SNACK 4
Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console
 */
console.log('---- SNACK 4 ----');

//Creo un array di oggetti
const clubList = [];
for (let i = 0; i < 20; i++) {
    clubList.push(
        { name: `Squadra ${i + 1}`, score: 0, fouls: 0 }
    );
}
console.log('Lista delle squadre: ', clubList);
// Cambio il valore allo score e ai falli
clubList.forEach((club) => {
    club.score = 10 + randomNumber();
    club.fouls = randomNumber();
});
console.log('Lista delle squadre dopo: ', clubList);
/**
 * Creo il nuovo array vuoto
 * Per ogni club creo due variabili con il destructuring che poi andrò a mettere in un nuovo oggetto
 * Pusho il nuovo oggetto nel nuovo array
 * Stampo il nuovo array
 */
const newClubList = [];
clubList.forEach((club) => {
    const { name, fouls } = club;
    const newObj = { name, fouls };
    newClubList.push(newObj);
});
console.log('Nuova lista: ', newClubList);

console.log('Fine snack');