let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "Red"; //make the sun
context.beginPath();
context.arc(150,150,100,0, 2*Math.PI, true);
context.fill();
context.fillStyle = "yellow"; //make the house
context.beginPath();
context.moveTo(800, 800);
context.lineTo(600, 800);
context.lineTo(600, 600);
context.lineTo(800, 600);
context.lineTo(800, 800);
context.fill();
context.fillStyle = "Brown"; //make the roof
context.beginPath();
context.moveTo(600, 600);
context.lineTo(700, 550);
context.lineTo(800, 600);
context.fill();
context.fillRect(660, 700, 80, 100);
context.fillStyle = "794D2E"; //make the trunk
context.fillRect(400, 600, 25, 600);
context.fillStyle = "Green"; //make the leaves
context.beginPath();
context.arc(412.5, 600, 75, 0, 2*Math.PI, true);
context.fill();
context.beginPath();
context.arc(375, 660, 45.5, 0, 2*Math.PI, true);
context.fill();
context.beginPath();
context.arc(450, 660, 45.5, 0, 2*Math.PI, true);
context.fill();