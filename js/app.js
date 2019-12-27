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
        let  char = phrases[index].charAt(i).toLowerCase();
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
        } else {
            li.className = 'space';
        }
    }
}

function checkLetter (button) {
    const letters = ul.getElementsByTagName('li');
    for (let i = 0; i < letters.length ; i++) {
        if (button.textContent === letters[i].textContent) {
            letters[i].className += ' ' + 'show';
            letter = letters[i].textContent;
            return letter;
        }
    }
}

// Hide overlay
startButton[0].addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

qwertyDiv.addEventListener('click', function(e) {
    e.target.className = 'chosen';
    e.target.setAttribute ('disabled', '');
    checkLetter(e.target);    
})


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


