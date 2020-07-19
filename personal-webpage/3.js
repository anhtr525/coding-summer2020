let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
class molecules {
    constructor(x, y, radius, color, xspeed, yspeed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    };
    circle() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
        context.fill();
    };
    move() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    };
}
let firstOne = new molecules(50, 25, 25, "yellow", 3, 2);
function animatemolecules() {
    context.clearRect(0, 0, 800, 800);
    firstOne.circle();
    firstOne.move();
}
setInterval(animatemolecules, 20);
