var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(250, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(345, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(440, 210, 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(297.5, 252.5, 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(392.5, 252.5, 40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "chocolate";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(133, 130, 430, 200);
ctx.stroke();
