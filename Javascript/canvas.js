let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "Red";
context.beginPath();
context.arc(150,150,100,0, 2*Math.PI, true);
context.fill();