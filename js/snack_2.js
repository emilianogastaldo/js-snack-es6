/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e 
somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 
    e id superiore a 120
3. Dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente 
    il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
*/


console.log('---- SNACK 2 ----')

const studentsList = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];

console.log('Lista completa degli studenti: ', studentsList);


// Punto 1
console.log('PUNTO 1:');
// const studentsOver70 = studentsList.filter((student) => {
//     if (student.grades >= 70) return true;
//     else return false;
// });
const studentsOver70 = studentsList.filter(({ grades }) => grades >= 70);
console.log('Lista degli studenti con voto maggiore di 70: ', studentsOver70);

// Punto 2
console.log('PUNTO 2:');
// Primo modo:
// const studentsOver70and120 = studentsList.filter((student) => {
//     if (student.grades >= 70 && student.id >= 120) return true;
// });

// Secondo modo:
// const studentsOver70and120 = studentsOver70.filter((student) => {
//     if (student.id >= 120) return true;
// });
const studentsOver70and120 = studentsOver70.filter(({ id }) => id >= 120);
console.log('Lista studenti con id maggiore di 120 e voto maggiore di 70:', studentsOver70and120)