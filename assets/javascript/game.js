
var wins = 0;
var losses = 0;
var guesses = 9;

var chosenLetter = '';

var alphabet = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

var guessesSoFar = [];

function reset() {
    guesses = 9;
    document.getElementById("guess-left").textContent = guesses;
    chooseNewLetter();
    guessesSoFar = [];
    document.getElementById("letter-guess").textContent = guessesSoFar;
}

function chooseNewLetter() {
    var index = Math.floor(Math.random() * alphabet.length);
    chosenLetter = alphabet[index];
    console.log('chosenLetter', chosenLetter);
}

chooseNewLetter();

document.onkeyup = function(event) {
    var userLetter = event.key.toLowerCase();

    if (userLetter === chosenLetter) {
        wins++;
        document.getElementById('wins').textContent = wins;
        reset();
    }
    else if (guesses === 1 && userLetter !== chosenLetter) {
        losses++;
        document.getElementById('losses').textContent = losses;
        reset();
    }
    else if (alphabet.indexOf(userLetter) === -1) {
        alert("That wasn't a letter! Try again!");
    }
    else if (guessesSoFar.indexOf(userLetter) > -1) {
        alert("You already guessed that. Lose a point :(");
        guesses--;
        document.getElementById('guess-left').textContent = guesses;
    }
    else if (userLetter !== chosenLetter) {
        guesses--;
        document.getElementById('guess-left').textContent = guesses;
        guessesSoFar.push(userLetter);
        document.getElementById('letter-guess').textContent = guessesSoFar.join(',  ');
    }

}
