/* 

Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/


//creare una griglia di 10 caselle per 10 righe e assegnare a ciascuna casella un numero da 1 a 100
const boxesElement = document.querySelector('.boxes')
const limit = 100

function generateboxes(domElement, limit) {

    // creazione boxes
    for (let i = 0; i < limit; i++) {

        const cellElement = document.createElement('div')
        cellElement.className = 'cell'
        cellElement.append(i + 1)
        domElement.append(cellElement)

        // aggiungere addEventListner quando clicco e far colorare la casella di azzurro
        cellElement.addEventListener('click', function () {

            if (randomNumbers.includes(i + 1)) {
                this.classList.toggle('bg-danger')

            } else {
                this.classList.toggle('bg-green')

            }

        })

    }
}

document.querySelector('.play_grid').addEventListener('click', function (event) {
    event.preventDefault();

    generateRandomNumbers();
    generateboxes(boxesElement, limit);
})

// richiamo della funzione


/* 

Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

*/

let randomNumbers = [];
function generateRandomNumbers() {

    while (randomNumbers.length < 16) {

        let pcRandomNumber = Math.floor((Math.random() * 100) + 1);

        if (!randomNumbers.includes(pcRandomNumber)) {
            randomNumbers.push(pcRandomNumber);
        }

    }

    console.log(randomNumbers);
}
