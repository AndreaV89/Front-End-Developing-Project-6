const qwertyDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset');
const ul = document.querySelector('#phrase ul');
const tries = document.querySelectorAll('.tries img');
const overlay = document.getElementById('overlay');
var missed = 0;
var letterFound;
const phrases = [
    'Java Script', 
    'Pyt hon', 
    'Ja va', 
    'Sw ift', 
    'Ru by'
];
const characters = [];

// return random phrase from the array
function getRandomPhraseAsArray (arr) {
    const index = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < phrases[index].length; i++) {
        let  char = phrases[index].charAt(i).toLowerCase();
        characters.push(char);
    }
    return characters;
}

// display the random phrase
function addPhraseToDisplay (arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('LI');
        li.innerText = arr[i];
        ul.appendChild(li);
        if (li.textContent !== ' ') {
            li.className = 'letter'; 
        } else {
            li.className = 'space';
        }
    }
}

// check if the chosen letter is in the phrase or not
function checkLetter (button) {
    const letters = ul.getElementsByTagName('li');
    var check = false;
    for (let i = 0; i < letters.length ; i++) {
        if (button.textContent === letters[i].textContent) {
            letters[i].className += ' ' + 'show';
            letterFound = letters[i].textContent;
            check = true;
        }
    }
    if (check === false) {
        letterFound = null;
    }
}

// restart game
function restartGame() {
    const li = ul.getElementsByTagName('li');
    while (li.length > 0) {
        ul.removeChild(li[0]);
    }
}

// check win or lose
function checkWin () {
    const letters = ul.getElementsByClassName('letter');
    const letterShow = ul.getElementsByClassName('letter show');
    if (letterShow.length === letters.length) {
        overlay.setAttribute('class', 'win');
        overlay.style.display = 'flex';
        restartGame();
    } else if (missed >= 5){
        overlay.setAttribute('class', 'lose');
        overlay.style.display = 'flex';
        restartGame();
    }

}

// Hide overlay and start game
startButton[0].addEventListener('click', () => {
    overlay.style.display = 'none';
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
});

qwertyDiv.addEventListener('click', function(e) {
    e.target.className = 'chosen';
    e.target.setAttribute ('disabled', '');
    checkLetter(e.target); 
    if (letterFound === null) {
        tries[missed].setAttribute ('src', 'images/lostHeart.png');
        missed ++;
    } 
    checkWin();
})





