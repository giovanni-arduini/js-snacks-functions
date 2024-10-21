/* Scrivi una funzione che accetti un'array di stringhe
 e una lettera e restituisca un array contenente solo
  le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui

function getInitialsFrom(array, letter) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    let element = array[i];
    let nameInit = element.charAt(0);
    if (nameInit === letter) {
      newArray.push(element);
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getInitialsFrom(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
