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
let arr = [];
for(let n = 0; n < 12; n++) { //draw 12 of the rect in row and column
    if(n%3 == 0) {
        arr[n] = new Rect(168.75*(n/3) + 25*((n/3)+1), 25);
        arr[n].draw();
    }
    if(n%3 == 1) {
        arr[n] = new Rect(168.75*(n-1)/3 + 25*(((n -1)/3) +1), 283.34);
        arr[n].draw();
    }
    if(n%3 == 2) {
        arr[n] = new Rect(168.75*(n-2)/3 + 25*(((n-2)/3 +1)), 541.58);
        arr[n].draw();
    }
}
let randomRect = arr[Math.floor(Math.random()*arr.length)]; //chose a random rect
console.log(randomRect.x);
console.log(randomRect.y);
// function popUp() {
//     alert("You have found it");
// }
function mouseOver(rect, event) { 
    if( (event.clientX >= rect.x) && (event.clientX <= (rect.x + 168.75)) && (event.clientY >= rect.y) && (event.clientY <= (rect.y +233.34))) {
        alert("You have found it");
    }
}
canvas.addEventListener('click', (event) => { //when we click on a random rect, there will be an alert
    // console.log(event.clientX); 
    // console.log(event.clientY);
    console.log(randomRect.x);
    console.log(randomRect.y);
    if( (event.clientX >= randomRect.x) && (event.clientX <= (randomRect.x + 168.75)) && (event.clientY >= randomRect.y) && (event.clientY <= (randomRect.y +233.34))) {
        alert("You have found it");
    };
    // mouseOver(randomRect, event);
});

