let words = ["random", "plane", "ball", "water", "math", "happy", "milk", "vanilla"];
let x = words[Math.floor(Math.random()*words.length)]; // choose a random word from the list
let arr = [];
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
            if (guess == x) {
                console.log("Congratulations"); // if the requirement is met, so the output will be congratulations
                break;
            }
            else if (guess !==x && times == 0) {
                console.log("Game over");
                break;
            }
            else if (guess!==x) {
            console.log("Try again"); // if none of the requriment is met, so the output will be try again
            }
        }
        else { 
            let correct = false;
            for (let y=0; y<x.length; y++){ // if the letter is right, so the letter will replace the underscore otherwise the times will be minus
                if (guess == x[y]) {
                    arr[y] = guess;
                    console.log(arr.join(" "));
                    correct = true;
                }
            }
            if (correct != true) {
                times--;
            }
            console.log(times); // drawing the stick person
            if (times == 9) {
                console.log("____");
            }
            else if(times == 8) {
                console.log("|");
                console.log("|");
                console.log("____");
            }
            else if(times == 7) {
                console.log("--");
                console.log("|");
                console.log("|");
                console.log("____");
            }
            else if (times == 6) {
                console.log("--|");
                console.log("|");
                console.log("|");
                console.log("____");
            }
            else if(times ==5) {
                console.log("--|");
                console.log("| o");
                console.log("|");
                console.log("____");
            }
            else if (times == 4) {
                console.log("--|");
                console.log("| o");
                console.log("| |");
                console.log("____");
            }
            else if (times==3) {
                console.log("--|");
                console.log("| o");
                console.log("|-|");
                console.log("____");
            }
            else if (times ==2) {
                console.log("--|");
                console.log("| o");
                console.log("|-|-");
                console.log("____");
            }
            else if (times == 1) {
                console.log("--|");
                console.log("| o");
                console.log("|-|-");
                console.log("__/_");
            }
            else if (times == 0) {
                console.log("--|");
                console.log("| o");
                console.log("|-|-");
                console.log("__/\\");
            }
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

       

    