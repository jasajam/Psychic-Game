//when the document is ready, wins, losses = 0 and guesses left = 9
    //bc these need to be dynamic variables

var wins = 0;
var losses = 0;
var guesses = 4;
// var round = 0;

var chosenLetter = '';

var alphabet = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

var guessesSoFar = [];

function reset() {
    // round++;
    // pastRounds();
    guesses = 4;
    document.getElementById("guess-left").textContent = guesses;
    chooseNewLetter();
    guessesSoFar = [];
    document.getElementById("letter-guess").textContent = guessesSoFar;
    // console.log(guesses);
    // console.log('guesses so far: ', guessesSoFar);
    
    // TODO: select elements on page to "reset"/update -> update those with out new guesses and guessesSoFar
}

function chooseNewLetter() {
    var index = Math.floor(Math.random() * alphabet.length);
    chosenLetter = alphabet[index];
    console.log('chosenLetter', chosenLetter);
}

function pastRounds() {
    var latestRound = document.createElement('h4');
    latestRound.textContent = 'hell0';
    $('past-record').append('<br><hr>' + latestRound);
    // var latestRoundContent = document.createTextNode('hey ba');
    // latestRound.appendChild(latestRoundContent);
    // latestRound.textContent = 'Round #' + round + " - " + chosenLetter;
    // latestRound.textContent = 'hey ba';
    // var roundsDiv = document.getElementsByClassName('pastRecord');
    // roundsDiv.appendChild(latestRound);
}
//you make a an element element, 
// 
// the p element's content gets filled with Round #:
// You (won / lost)
// winning letter:
// guesses: 

chooseNewLetter();

document.onkeyup = function(event) {
    var userLetter = event.key.toLowerCase();

    // if (wins === 0 && losses === 0) {
    //     chooseNewLetter();
    // didn't work bc wins and losses stayed 0, never hit rest of code
    // }
    if (userLetter === chosenLetter) {
        wins++;
        document.getElementById('wins').textContent = wins;
        // console.log('guesses so far: ', guessesSoFar);
        // console.log('no. of guesses: ', guesses);
        // console.log('wins: ', wins);
        // console.log('losses: ', losses);
        pastRounds();
        reset();
    }
    else if (guesses === 1 && userLetter !== chosenLetter) {
        losses++;
        document.getElementById('losses').textContent = losses;
        // console.log('guesses so far: ', guessesSoFar);
        // console.log('no. of guesses: ', guesses);
        // console.log('wins: ', wins);
        // console.log('losses: ', losses);
        pastRounds();
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
        // console.log('guesses so far: ', guessesSoFar);
        // console.log('no. of guesses: ', guesses);
        // console.log('wins: ', wins);
        // console.log('losses: ', losses);
    }

}


// ~how do i get randomly chosen letter & assign to chosenLetter
// DONE-JS listen for user's keystroke
    // DONE-JS check conditions for each key
        // DONE-JS if the user key is the chosen key -> wins++, reset everything
        // DONE-JS if the user key is not chosen key -> guesses--
            // DONE-JS letter they chose gets pushed in guessesSoFar and letters are shown in letter-guess span
            // DONE -JS guesses === 0 -> losses++, reset everything

// DONE-JSreset function: reset guesses to 9, choose new chosen letter, guesses so far is empty







// for (var i = 0; i < guesses; i++) {

// not needed - conditional statments will have conditions for resets

// }