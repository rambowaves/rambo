/* 
 * Created by benmagos on 1/30/14
 */

var canvas = document.getElementById("canvas");
canvas.addEventListener('click', draw, false);
window.addEventListener('resize', resizeCanvas, false);
context = canvas.getContext("2d");
var stopWhen;

function clickPosition(e) {
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    
    return [x, y];
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
var f = 0;
function draw(e) {
    context.clearRect(0,0,canvas.width,canvas.height);
    if (f === 0) {
        f = e;
    }
    else {
        actuallyDraw(e, f);
        f = 0;
    }
}
var amount = 0;
function actuallyDraw(e, f){
    var pointx = clickPosition(e)[0];
    var pointy = clickPosition(e)[1];
    var x = clickPosition(f) [0];
    var y = clickPosition(f) [1];

    console.log(x + " maps to x " + pointx);
    console.log(y + " maps to y " + pointy);
    
    context.beginPath();
    stopWhen = setInterval("loop("+x+","+y+","+pointx+","+pointy+")", 30);
    setTimeout(function() {
        clearInterval(stopWhen);
        amount = 0;
    }, 360);
    
}

function loop(x,y,pointx,pointy){
    amount += 0.1; // change to alter duration
    if (amount > 1) amount = 1;
    context.moveTo(x, y);
    context.lineTo(x + (pointx - x) * amount, y + (pointy - y) * amount);
    context.strokeStyle = "white";
    context.stroke();
    console.log(amount);
}