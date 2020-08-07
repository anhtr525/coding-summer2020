let start = confirm("Start?"); //create a confirm pop up to ask if the player want to play or not
let canvas = document.getElementById("canvas");
let paragraph1 = document.getElementsByTagName("P")[0]; //get the paragraph element from HTML
let paragraph2 = document.getElementsByTagName("P")[1];
let context = canvas.getContext("2d");
let offsetX;
let offsetY;
function update() { //identify the top left coordinate of the window
    let BB = canvas.getBoundingClientRect();
    offsetX = BB.left;
    offsetY = BB.top;
}
update();
window.onscroll = function(event){ update(); }
window.onresize = function(event){ update(); }
canvas.onresize = function(event){ update(); }
let score = 0; //set the score to be 0
class Rect { //describe all the rectangles
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;
        this.color = color;
    };
    draw() { 
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
    };
}
let arr = [[], [], [], []];
function makingRect() { //making all the bricks into the grid
    let c;
    let d;
    for (let a = 0; a < 4; a++) { 
        if (a == 0) {
            c = 80;
        }
        if (a == 1) {
            c = 296.25;
        }
        if (a == 2) {
            c = 512.5; 
        }
        if (a == 3) {
            c = 728.75;
        }
        for (let b = 0; b < 4; b++) {
            if (b == 0) {
                d = 75;
            }
            if (b == 1) {
                d = 150;
            }
            if (b == 2) {
                d = 225;
            }
            if (b == 3) {
                d = 300;
            }
            arr[a][b] = new Rect(c, d, 191.25, 50, "skyblue");
        }
    }
}
makingRect();
function drawingRect() { //draw all the rectangles
    for (let a = 0; a < 4; a++) { 
        for (let b = 0; b < 4; b++) {
            arr[a][b].draw();
        }
    }
}
let life = 3; //set the life to be 3
let s = true; //if this s is true, the ball won't move when the game starts or when it loses a life
class ball { //describe the ball
    constructor (m, n, mspeed, nspeed) {
        this.m = m;
        this.n = n;
        this.mspeed = mspeed;
        this.nspeed = nspeed;
    };
    circle() { //make the ball
        context.fillStyle = "039aff";
        context.beginPath();
        context.arc(this.m, this.n, 15, 0, 2*Math.PI, true)
        context.fill();
    };
    move() { //make the ball move
        this.m += this.mspeed;
        this.n += this.nspeed;
    };
    wall() { //make the ball bounce when it hit the wall
        if (this.m + 15 > 1000) {
            this.mspeed*=-1;
        }
        if (this.n + 15 > 1000) {
            this.m = 500;
            this.n = 500;
            life --;
            s = true;
        }
        if (this.m - 15 < 0) {
            this.mspeed*=-1;
        }
        if (this.n - 15 < 0) {
            this.nspeed*=-1;
        }
    };
    bounce() { //make the ball bounce when it hit the rectangle
        if (this.m + 15 > R.x && this.m < R.x + R.w && this.n + 15 > R.y && this.n < R.y + R.h) {
            this.nspeed*=-1;
        }
    };
    disappear() {//make the bricks disappear when the ball hit them
        for (let index = 0; index < arr.length; index ++) {
            for (let u = 0; u < arr[0].length; u++){
                if ((this.m + 15 > arr[index][u].x && this.m + 15 < arr[index][u].x + arr[index][u].w && this.n + 15 > arr[index][u].y && this.n + 15 < arr[index][u].y + arr[index][u].h) ||
                    (this.m - 15 > arr[index][u].x && this.m - 15 < arr[index][u].x + arr[index][u].w && this.n - 15 > arr[index][u].y && this.n - 15 < arr[index][u].y + arr[index][u].h)) {
                    arr[index][u] = new Rect(0, 0, 0, 0);
                    arr[index][u].draw();
                    score++;
                    this.nspeed*=-1; //to make the ball bounce back
                }
            }
        }
    };
}
canvas.addEventListener('click', (event) => { //when we click on the canvas, the ball will move
    if(start) { //when the game start
        s = false;
    }
    if(start && life < 3) { //when the ball loses a life
        s = false;
    }
})
//draging: false

let dragging = false; //when dragging is false, the rectangle can't be dragged
canvas.onmousedown = handleMousedown;
canvas.onmousemove = handleMousemove;
canvas.onmouseup = handleMouseup;

//check that the click is inside of the rectangle
//calculate the position of the x of the mouse relative to the rectangle
//dragging: true

let startX;
let startY;
function handleMousedown (event) {  //check when we press the mouse down, the mouse is inside of the rectangle or not
    startX = parseInt(event.clientX - offsetX);
    startY = parseInt(event.clientY - offsetY);
    if ((startX >= R.x) && (startX<= R.x + R.w) && (startY >= R.y) && (startY <= R.y + R.h)) {
        dragging = true; //dragging will turn into true if the mouse is inside of the rectangle
    }
}

//update x position of the rectangle
//get the x position of the mouse
//add or subtract the constant t to the top left x position of the rectangle
//draw a new rectangle

function handleMousemove (event) { //if the mouse is inside of the rectangle, we can drag it
    let t;
    if (dragging == true) {
        mouseX = parseInt(event.clientX - offsetX);
        t = mouseX - startX;
        R.x += t;
        R.draw();
        startX = mouseX;
    }
}

//draging: false

function handleMouseup () { //when we press up the mouse, dragging will turn to false
    dragging = false;
}
let R = new Rect (400, 600, 200, 25, "skyblue"); 
let mSpeed = [-2, -4, 2, 4];
let nSpeed = [3, 6, 2, 4]
let Ball = new ball(500, 500, mSpeed[Math.floor(Math.random()*mSpeed.length)], nSpeed[Math.floor(Math.random()*nSpeed.length)]);
let I;
function check () { 
    context.clearRect(0, 0, 1000, 1000);
    Ball.circle();
    if(start && s == false) {
        Ball.move();
    }
    Ball.wall();
    drawingRect();
    R.draw();
    Ball.bounce();
    Ball.disappear();
    paragraph1.innerHTML = "Life: " + life; //update the life of the ball on the canvas
    paragraph2.innerHTML = "Score: " + score; //update the score of the ball on the canvas
    if(life == 0) { //when the life is 0, there is an alert to say the game is over
        alert("GAME OVER");
        clearInterval(I); //stop the animation
        start = confirm("Do you want to play again?");
        life = 3;
        score =  0;
        makingRect();
        Ball.m = 500;
        Ball.n = 500;
        setInterval(check, 10); //begin animation again
    }
    if(score == 16) { //when all the bricks disappear, there is an alert to say you won the game
        alert("YOU WON");
        clearInterval(I);
        start = confirm("Do you want to play again?");
        life = 3;
        score = 0;
        Ball.m = 500;
        Ball.n = 500;
        makingRect();
        setInterval(check, 10);
    }
}
if (start) { //begin animation
    I = setInterval(check, 10); 
}
else {
    alert("See you next time");
}