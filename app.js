
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


/*------------------------ Cached Element References ------------------------*/
const cards = document.querySelectorAll('.memory-card');
const frontFace = document.querySelectorAll('.front-face');
const backFace = document.querySelectorAll('.back-face');


/*----------------------------- Event Listeners -----------------------------*/
cards.forEach(card => card.addEventListener("click", flipCard));


/*-------------------------------- Functions --------------------------------*/
function flipCard() {
    if(lockBoard) return; //lockBord true here | if cards flipped true don't execute rest of the code
    if(this === firstCard) return; //if first card clicked is 
    this.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;  
        checkForMatch();  
}
}


function checkForMatch() {
     //do cards match?
    if(firstCard.dataset.attr === secondCard.dataset.attr) {
        disbleCards();
    } else { //if its not a match unflip the card
        unflipCards();
    }
}

function disbleCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(params) {
    lockBoard = true; // prevent flipCard() to execute before unflip the cards
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard() // flipCard() code will run only when lockBoard equals to false
    }, 750);
    
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


//IIFE (Immetiately Invoked Function Expression)
// Executed after its definiton
(function shuffle () {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();