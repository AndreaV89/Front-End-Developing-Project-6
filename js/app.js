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

// win
function win () {
    overlay.setAttribute('class', 'win');
    overlay.style.display = 'flex';
    const winTitle = document.createElement('H2');
    winTitle.innerText = 'You Win!!';
    winTitle.className = 'title';
    overlay.insertBefore(winTitle, startButton[0]);
    startButton[0].textContent = 'Restart Game';
}

// lose
function lose () {
    overlay.setAttribute('class', 'lose');
    overlay.style.display = 'flex';
    const loseTitle = document.createElement('H2');
    loseTitle.innerText = 'You Lose!!';
    loseTitle.className = 'title';
    overlay.insertBefore(loseTitle, startButton[0]);
    startButton[0].textContent = 'Restart Game';
}

// restart game
function restartGame() {
    keyboardBtn = document.querySelectorAll('.keyrow button');
    li = ul.getElementsByTagName('li');
    overlay.style.display = 'none';
    missed = 0;
    for (let j = 0; j < tries.length; j++) {
        tries[j].setAttribute ('src', 'images/liveHeart.png');
    }
    for (let c = 0; c < keyboardBtn.length; c ++) {
        keyboardBtn[c].removeAttribute('class');
        keyboardBtn[c].removeAttribute('disabled');
    }
    while (li.length > 0) {
        li[0].remove();
        characters.shift();
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
}

// check win or lose
function checkWin () {
    const letters = ul.getElementsByClassName('letter');
    const letterShow = ul.getElementsByClassName('letter show');
    if (letterShow.length === letters.length) {
        win();
    } else if (missed >= 5){
        lose();
    }
}

// Hide overlay and start game
startButton[0].addEventListener('click', () => {
    if (startButton[0].textContent === 'Start Game') {
        overlay.style.display = 'none';
        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
    } else {
        restartGame();
    }
});

qwertyDiv.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        e.target.setAttribute ('disabled', '');
        checkLetter(e.target); 
        if (letterFound === null) {
            tries[missed].setAttribute ('src', 'images/lostHeart.png');
            missed ++;
        } 
        checkWin();
    }
})





