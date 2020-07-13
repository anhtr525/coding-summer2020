for (let x = 1; x < 101; x++) {
    if (x%15 == 0) {
        console.log("FizzBuzz");
    }
    else if (x%5 == 0) {
        console.log("Buzz");
    }
    else if (x%3 == 0) {
        console.log( "Fizz");
    }
    else {
        console.log(x);
    }
}
// the program goes through the x%15 first, and then goes through the x%5 and x%3

// start with the first hashtag
// add 1 to the previous hashtag
// keep adding until there are 7 hashtags
let y = "#";
while (y.length <= 7 ) {
    console.log(y)
    y+="#";
}

