/*Display on Page: 
*Press any key to get started!
*Wins (# of times the user correctly guessed the word)
    **When game starts, display like this: _ _ _ _ _ _ _ _
    **As user guesses, display like this: _ _ c a r t n e _
    * # of guesses the user has left
    * Letters already guessed (in an empty array)
    * Computer reset to let the user guess another word.

How This Game Works: 
    1. Words "Press any key to get started!" already on the screen.
    2. Computer randomly generates a word from the array.
    3. Number of guesses remaining & empty letter lines appear on the screen.
    4. User begins to guess letter that may or may not appear in the word.
        IF letter is in the word:
            show letter on page, DO NOT decrease guesses left. 
        IF letter is NOT in the word:
            decrease guesses left. (-1)
            add letter to empty "guesses" array. 
    5. IF user guesses word correctly:
        alert ("Congrats, you know stuff about the Beatles!")
        +1 to wins
    6. IF user runs out of guesses:
        alert ("Do you even know music?")

Variables Needed:
    compWord: random word from array computer chooses
    wordChosen: container holding computer's chosen word
    userGuess: letters user guesses (an array as well? can limit to no special characters).
    wins
    guessLeft: remaining guesses for the user 
    prevGuesses: incorrect user letter guesses. */

//Declare the variables
var words = ["Lennon", "Liverpool", "Abbey Road", "Sgt. Pepper", "George Martin", "Candlestick Park"];
var cpuWord = null;
var userGuess = [];
var wins = 0;
var guessLeft = 9;
var prevGuesses = [];
var reset; 

//Create functions using variables above
/*guessesLeft variable printed onto browser*/
function {
    document.querySelector("#left").innerHTML = "Guesses Left: " + guessesLeft;
}

/*choosing random word from array*/
function {
    cpuWord = words[Math.floor(Math.random() * words.length)];
}

/*Add prevGuesses to browser, use .join function to add to array*/
function {

}

//Add Wins to browser
document.querySelector('#wins').innerHTML = "Wins: " + wins;