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
            this.classList.toggle('bg-green')
            console.log(this.classList);

        })

    }
}

// richiamo della funzione
generateboxes(boxesElement, limit)