const p1Display = document.querySelector('#score1Display');
const p2Display = document.querySelector('#score2Display');
const button1 = document.querySelector('#p1Button');
const button2 = document.querySelector('#p2Button');
let score = 0;

button1.addEventListener('click', () => {
   score += 1;
   p1Display.textContent= score;
})
button2.addEventListener('click', () => {
   score += 1;
   p2Display.textContent= score;
})