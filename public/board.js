const board = document.getElementsByClassName('board')[0];
const boardLetters = document.getElementsByClassName('boardLetters')[0];
const boardNumbers = document.getElementsByClassName('boardNumbers')[0];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

let black = false;

for (let i = 0; i < 8; i++) {
    let letter = document.createElement('div')
    letter.textContent = letters[i];
    boardLetters.appendChild(letter);

    let number = document.createElement('div')
    number.textContent = i + 1;
    boardNumbers.appendChild(number);
}



for (let i = 0; i < 64; i++) {
    const square = document.createElement('div')
    if (black) {
        square.classList.add('black');
        square.classList.add('square');
    }
    else {
        square.classList.add('white');
        square.classList.add('square');
    } 

    black = !black;

    if (i % 8 === 7) black = !black
    board.appendChild(square);

}