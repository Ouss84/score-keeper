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
    }
})
button2.addEventListener('click', () => {
    if(!isGameOver){
        p2score += 1;
        p2Display.textContent= p2score;
         }
         if (p2score === winningScore){
             isGameOver= true;
         }
})

function resetScore () {
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1Display.textContent= 0;
    p2Display.textContent= 0;
    
}
reset.addEventListener('click', resetScore);

selectedWinningScore.addEventListener('change', () =>{
    winningScore = parseInt(selectedWinningScore.value);
    resetScore();
}
)