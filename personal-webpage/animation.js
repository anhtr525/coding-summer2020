let canvas = document.getElementById("canvas"); //get the canvas from the html using DOM
let context = canvas.getContext("2d"); //get 2d context from the canvas
let positionx = 20;
let positiony = 100;
function ball() {
    context.clearRect(0, 0, 800, 800); //clear the rectangle
    context.beginPath(); 
    context.arc(positionx, positiony, 50, 0, 2*Math.PI, true); //draw the circle
    context.fill();
    positionx+=3; 
    positiony = positionx*positionx;
    if (positionx > 800) {
        positionx = 0;
    }
    if( positiony > 800) {
        positiony = 100;
    }
}
setInterval(ball, 30); //calls ball at every 30mm/sec interval
