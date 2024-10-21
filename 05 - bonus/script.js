/* Scrivi una funzione che accetti una stringa c
ontenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

function timeSensitiveGreetingsTo(userName, hour) {
  if (hour >= 17) {
    return `Buonasera ${userName}`;
  } else if (hour >= 13) {
    return `Buon pomeriggio ${userName}`;
  }
  return `Buongiorno ${userName}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(timeSensitiveGreetingsTo("Mario", 18));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
