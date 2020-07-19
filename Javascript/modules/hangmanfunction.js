function guessRespond (guess, x, times) { //to send output when the input meets the conditions
    if (guess.length > 1) { //when input is more than one letter
        if (guess == x) { //when the input is equal to x
            console.log("Congratulations");
            return [true, times];
        }
        else if (guess !== x && times == 0) { //when the input isn't equal to x and the times is equal to 0
            console.log("Game over");
            return [true, times];
        }
        else if (guess !== x) { //when the input isn't equal to x
            console.log("Try again")
            times --;
            console.log(times);
            stickperson(times);
            return [false, times];
        }
    }
}
function stickperson (times) { //to draw a stickperson for giving times
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
}
exports.guessRespond = guessRespond; //export the function using the exports object
exports.stickperson = stickperson;