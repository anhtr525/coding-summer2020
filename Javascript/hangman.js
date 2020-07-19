console.time('game'); //to time the game
let words = ["random", "plane", "ball", "water", "math", "happy", "milk", "vanilla"];
let x = words[Math.floor(Math.random()*words.length)]; // choose a random word from the list
let arr = [];
const hangmanfunction = require('./modules/hangmanfunction'); //import the functions
let readline = require('readline-sync') // to plug in the input
let start = readline.question("Start? (Yes/No)");
if (start == "Yes" || start == "yes" || start == "of course") {
    for (let index = 0; index < x.length; index++){
        arr[index] = "_";  //to write the underscore for each letter
    }
    console.log(arr.join(" "));
    let times = 10;
    while (arr.join("") !== x && times !== 0) { // to make the code continuing until the requirements are met
        let guess = readline.question("Guess a letter:");
        // if the letter matches any of the letters in the word, so it will replace the underscore by that letter
        // if the input is more than one letter, it will compare with the word and if it's right, the output will be "Congratulations" 
        //or if it's not right, the output will be "Try again" or "Game over"
        if (guess.length>1) {
            console.log(arr.join(" "));
            let holder = hangmanfunction.guessRespond(guess, x, times);
            if (holder[0] ===true) {
                break;
            }
            else {
                times = holder[1];
            }
        }
        else { 
            let correct = false;
            for (let y=0; y<x.length; y++){ // if the letter is right, so the letter will replace the underscore otherwise the times will be minus
                if (guess == x[y]) {
                    arr[y] = guess;
                    correct = true;
                }
            }
            console.log(arr.join(" "));
            if (correct != true) {
                times--;
            }
            console.log(times); // drawing the stick person
            hangmanfunction.stickperson(times);
            if (arr.join("") === x) {
                console.log("Congratulations");
            }
            else if (times !== 0) {
                console.log("Try again");
            }
            else {
                console.log("Game over");
            }
        }
    }
}
else {
    console.log("See you next time");
}
console.timeEnd('game'); //to end the timing
       

    