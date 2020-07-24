let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
class molecules { //abstraction for the molecules
    constructor(x, y, radius, color, xspeed, yspeed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    };
    circle() { //draw them as circles
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.fill();
    };
    move() { //make them move
        this.x += this.xspeed;
        this.y += this.yspeed;
    };
    wall() { //make them bounce when they hit the wall
        if(this.x+this.radius > 800) {
            this.xspeed*=-1;
        }
        if(this.y+this.radius > 800) {
            this.yspeed*=-1;
        }
        if(this.x-this.radius< 0) {
            this.xspeed*=-1;
        }
        if(this.y-this.radius < 0) {
            this.yspeed*=-1;
        }
    };
    static mole(a, b) { //make them bounce when they hit each other
        if (Math.sqrt((a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y -b.y)) <= (a.radius+b.radius)){
            a.xspped*=-1;
            b.xspeed*=-1;
            a.yspeed*=-1;
            b.yspeed*=-1;
        }
    };
}
function check(arr) { //check if the two molecules hit each other
    for(let index = 0; index < arr.length; index++) {
        for(let newIndex = index+1; newIndex < arr.length; newIndex++ ) {
            molecules.mole(arr[index], arr[newIndex]);
        }
    }
}
let firstOne = new molecules(50, 25, 25, "yellow", 3, 2);
// function animatemolecules() {
//     context.clearRect(0, 0, 800, 800);
//     firstOne.circle();
//     firstOne.move();
//     firstOne.wall();
// }
function allthemolecules () { //control all the molecules
    context.clearRect(0, 0, 800, 800);
    for(let z = 0; z < arr.length; z++) {
        arr[z].circle();
        // check(arr);
        arr[z].move();
        arr[z].wall();
        // check(arr);
    }
    check(arr);
    context.strokeRect(0, 0,800, 800);
}
let numberofmolecules = prompt("How many molecules do you want to put?");
let arr = [];
let color = ["yellow", "black", "red", "orange", "lightblue", "pink"] ;
// arr[0] = new molecules(100, 100, 25, "yellow", 0, 5);
// arr[1] = new molecules(100, 200, 25, "black", 0, -5);
let temperature = prompt("What temperature is it?"); //use temperature to affect the speed of the molecules
for (let n = 0; n < numberofmolecules; n++) { //create the molecules
    arr[n] = new molecules(Math.random()*800, Math.random()*800, 25, color[Math.floor(Math.random()*color.length)], (Math.random()*2-1)*temperature, (Math.random()*2-1)*temperature);
}
setInterval(allthemolecules, 10); //making them move
