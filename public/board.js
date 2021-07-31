const board = document.getElementsByClassName('board')[0];
const rankLegend_left = document.getElementsByClassName('rankLegend-left')[0];
const rankLegend_right = document.getElementsByClassName('rankLegend-right')[0];
const fileLegend_top = document.getElementsByClassName('fileLegend-top')[0];
const fileLegend_bottom = document.getElementsByClassName('fileLegend-bottom')[0];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

let black = false;

for (let i = 1; i <= 8; i++) {
    let rank1 = document.createElement('div')
    rank1.classList.add('sidebar')
    rank1.textContent = 9-i;
    rankLegend_left.appendChild(rank1);
    let rank2 = document.createElement('div')
    rank2.classList.add('sidebar')
    rank2.textContent = 9-i;
    rankLegend_right.appendChild(rank2);

    let file1 = document.createElement('div')
    file1.textContent = letters[i-1];
    file1.classList.add('sidebar')
    fileLegend_top.appendChild(file1);
    let file2 = document.createElement('div')
    file2.classList.add('sidebar')
    file2.textContent = letters[i-1];
    fileLegend_bottom.appendChild(file2);
}



for (let i = 1; i <= 64; i++) {
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

    if (i % 8 === 0) black = !black
    board.appendChild(square);

}