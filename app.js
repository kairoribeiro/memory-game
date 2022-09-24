
/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const cards = document.querySelectorAll('.memory-card');
const frontFace = document.querySelectorAll('.front-face');
const backFace = document.querySelectorAll('.back-face');


/*----------------------------- Event Listeners -----------------------------*/
cards.forEach(card => card.addEventListener("click", flipCard));


/*-------------------------------- Functions --------------------------------*/
function flipCard() {
    this.classList.toggle('flip') ;
}
