/* Scrivi una funzione che accetti una stringa e 
restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

function howManyVowelsIn(thisWord) {
  const vowels = "AaIiUuEeOo";
  let wordVowels = [];

  for (i = 0; i < thisWord.length; i++) {
    letter = thisWord.charAt(i);
    if (vowels.includes(letter)) {
      wordVowels.push(letter);
    }
  }
  return wordVowels.length;
}

// Invoca la funzione qui e stampa il risultato in console

console.log("Il numero di vocali nella parola è", howManyVowelsIn(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
