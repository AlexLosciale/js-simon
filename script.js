/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
1- randomizzare 5 numeri casuali da 1 a 50 per tutte e 5 le caselle tramite ul number-list
2- appena compaiono i 5 numeri randob, create un timer che dopo 30 secondi fa scomparire i numeri 
    2.2- conservare i 5 numeri random in un arrey
3- dopo 30 secondi fare riapparire i contenitori dopo far inserire i numeri da indovinare 
    3.2- conservare i numeri del giocatore in un arrey 
4- paragonare i 2 arrey e contare quanti numeri sono giusti di quelli iniseriti dal giocatore 
5- scrivere il risultato sullo schermo
*/
let numberList = document.getElementById("numbers-list");
let formNumber = document.getElementById("input-group");
const form = document.querySelector("form");
let risultatoGioco = document.getElementById("message");

let storeNumeri = [];

for (let i = 0; i < 5; i++) {
    const numeroCasuale = Math.floor(Math.random() * 50) + 1;
    storeNumeri.push(numeroCasuale);
}
console.log("Numeri generati:", storeNumeri);

let listaNumeriStringa = storeNumeri.join(", ");

if (numberList) {
    numberList.textContent = listaNumeriStringa;
}

setTimeout(sceltaGiocatore, 3000);
function sceltaGiocatore() {
    let numberListElement = document.getElementById("numbers-list");
    let answersForm = document.getElementById("answers-form");

    if (numberListElement) {
        numberListElement.classList.add("d-none");
    }
    if (answersForm) {
        answersForm.classList.remove("d-none");
    }
}

let numeriGiocatore = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputs = form.querySelectorAll("input");
    numeriGiocatore = Array.from(inputs).map(function(input) {
        return Number(input.value);
    });

    console.log("Numeri inseriti dall'utente:", numeriGiocatore);

    const elementiComuni = storeNumeri.filter(num => numeriGiocatore.includes(num));
    console.log("Gli elementi uguali sono:", elementiComuni);

    risultatoGioco.innerHTML = elementiComuni;
});

