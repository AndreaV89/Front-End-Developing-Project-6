const qwertyDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset');
const ul = document.querySelector('#phrase ul');
let missed = 0;
const phrases = [
    'Java Script', 
    'Pyt hon', 
    'Ja va', 
    'Sw ift', 
    'Ru by'
];

// return random phrase from the array
function getRandomPhraseAsArray (arr) {
    const characters = [];
    const index = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < phrases[index].length; i++) {
        let  char = phrases[index].charAt(i);
        characters.push(char);
    }
    return characters;
}


function addPhraseToDisplay (arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('LI');
        li.innerText = arr[i];
        ul.appendChild(li);
        if (li.textContent !== ' ') {
            li.className = 'letter'; 
        }
    }
}

function checkLetter () {

}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Hide overlay
startButton[0].addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
