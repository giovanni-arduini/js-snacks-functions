/* Scrivi una funzione che accetti un array di nomi e
 restituisca nuovo un array con le iniziali di ogni 
 parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function getInitialsFrom(names) {
  let newArray = [];
  for (i = 0; i < names.length; i++) {
    let element = names[i];
    let nameInit = element.charAt(0);
    newArray.push(nameInit);
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitialsFrom(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
