let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.strokeStyle = "blue";
context.strokeRect(0, 0, 800, 800); 
context.fillStyle = "lightblue";
class Rect {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
    };
    draw() { //to draw the rectangle
        context.fillRect(this.x, this.y, 168.75, 233.34);
    };
}
let arr = [[], [], []];
let c;
let d;
for(let a = 0; a < 3; a++) { //to draw tweleve of the rectangles
    if (a==0) {
        c = 25;
    }
    if (a==1) {
        c = 283.34;
    }
    if (a==2) {
        c = 541.58; 
    }
    for(let b = 0; b < 4; b++) {
        if (b==0) {
            d = 25;
        }
        if (b==1) {
            d = 218.75;
        }
        if (b==2) {
            d = 412.5;
        }
        if (b==3) {
            d = 606.25;
        }
        console.log(a, b, c, d);
        arr[a][b] = new Rect(d, c);
        arr[a][b].draw();
    }
}
let randomA = Math.floor(Math.random()*2);
let randomB = Math.floor(Math.random()*3);
let randomRect = arr[randomA][randomB]; //chose a random rect
console.log(randomRect.x);
console.log(arr[0].length);
console.log(randomRect.y);
function noti(arr, randomA, randomB) { //check if we click near the chosen rectangle or not
    let z = [];
    let index = 0;
    console.log(randomA);
    console.log(randomB);
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr[0].length; b++) {
            if (((b == randomB -1) && ((a == randomA -1) || (a == randomA) || (a == randomA +1))) ||((b == randomB + 1) && ((a == randomA -1) || (a == randomA) || (a == randomA +1))) ||((b == randomB) && ((a == randomA -1) || (a == randomA +1)))) {
                z[index] = arr[a][b];
                index++;
                console.log(a);
                console.log(b);
            }
        }
    }
    return z;
}
let counter = 0; //to count how many clicks we need to get to the chosen one
canvas.addEventListener('click', (event) => { //when we click on a random rect, there will be an alert
    // console.log(event.clientX); 
    // console.log(event.clientY);
    counter++;
    console.log(randomRect.x);
    console.log(randomRect.y);
    z = noti(arr, randomA, randomB);
    if( (event.clientX >= randomRect.x) && (event.clientX <= (randomRect.x + 168.75)) && (event.clientY >= randomRect.y) && (event.clientY <= (randomRect.y +233.34))) {
        alert("You have found it. It took " + counter + " clicks");
    }
    else { 
        for (let q = 0; q < z.length; q++) { //giving an alert when we click on the rectangle that is near the chosen one
            if( (event.clientX >= z[q].x) && (event.clientX <= (z[q].x + 168.75)) && (event.clientY >= z[q].y) && (event.clientY <= (z[q].y +233.34))) {
                alert("You have almost found it");
            }
        }
    }
    // mouseOver(randomRect, event);
});

