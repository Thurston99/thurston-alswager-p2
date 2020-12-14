//Getter
function get(element) {
    return document.getElementById(element);
}
//Number guessing game
function game(){
    //Set up the game
    var low = 1;
    var high = 20;
    var guess = '';
    var message = 'Guess a number between '+ low + ' and ' + high + ':';
    var update;
    var answer = Math.floor(Math.random() * (high - low + 1)) + low;
    var tries = 5;
    //Update message array
    var updates = [ 
        'Game has ended.',
        'Your guess is out of the number range to be selected from.',
        'You guessed higher than the random number that was selected.',  
        'You guessed lower than the random number that was selected.',    
        'You won!',
        'You must enter a number.',
        'You are out of guesses. The number was '+answer+'.'
    ];
    //Guessing loop
    for(tries = 5; tries > 0; tries-1){
        guess = prompt(message, guess);
        //Allow the user to end game by clicking the cancel button
        if (guess === null){
            message = updates[0].toString();
            break;
        }
        //If user guess is a number, alert them if the number is out of range, higher than the random number, lower than the random number, or if they guessed correctly
        else if (isFinite(guess) && guess !== ''){
            guess = +guess;
            //Out of range message
            if(guess < low || guess > high){
                message = updates[1].toString();
            }
            //Guess is too high
            else if(guess > answer){
                message = updates[2].toString();
            }
            //Guess is too low
            else if(guess < answer){
                message = updates[3].toString();
            }
            //Win
            else{
                update = updates[4].toString();
                get("message").innerHTML = update;
                break;
            }
        }
        //Input must be a number
        else{
            message = updates[5].toString();
        }
        //Update try counter
        tries = tries - 1;
    }

    if(tries === 0){
        update = updates[6].toString();
        get("message").innerHTML = update;
    }
}
//Start the game when user clicks on the New Game button
function init(){
    get("newgame").addEventListener("click", game); 
}
init();




