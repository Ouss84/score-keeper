const p1Display = document.querySelector('#score1Display');
const p2Display = document.querySelector('#score2Display');
const button1 = document.querySelector('#p1Button');
const button2 = document.querySelector('#p2Button');
const reset = document.querySelector('#resetButton');
const selectedWinningScore = document.querySelector('#winningScoreSelect');

let p1score = 0;
let p2score = 0;
let winningScore =2;
let isGameOver = false;

button1.addEventListener('click', () => {
    if(!isGameOver){
   p1score += 1;
   p1Display.textContent= p1score;
    }
    if (p1score === winningScore){
        isGameOver= true;
        p1Display.classList.add ('has-text-primary');
        p2Display.classList.add ('has-text-danger');
        button1.disabled = true;
        button2.disabled = true;
    }
})
button2.addEventListener('click', () => {
    if(!isGameOver){
        p2score += 1;
        p2Display.textContent= p2score;
         }
         if (p2score === winningScore){
             isGameOver= true;
             p2Display.classList.add ('has-text-primary');
             p1Display.classList.add ('has-text-danger');
             button1.disabled = true;
             button2.disabled = true;
         }
})

function resetScore () {
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1Display.textContent= 0;
    p2Display.textContent= 0;
    button1.disabled = false;
    button2.disabled = false;
    p1Display.classList.remove ('has-text-primary','has-text-danger');
    p2Display.classList.remove ('has-text-primary','has-text-danger');
    
    
}
reset.addEventListener('click', resetScore);

selectedWinningScore.addEventListener('change', () =>{
    winningScore = parseInt(selectedWinningScore.value);
    resetScore();
}
)