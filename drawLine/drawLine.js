/* 
 * Created by benmagos on 1/30/14
 */

var canvas = document.getElementById("canvas");
canvas.addEventListener('click', draw, false);
window.addEventListener('resize', resizeCanvas, false);

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

function draw(e) {
    context = canvas.getContext("2d");
    var pointx = clickPosition(e)[0];
    var pointy = clickPosition(e)[1];
    
    var x = canvas.width / 2;
    var y = canvas.height / 2;

    console.log(x + " maps to x " + pointx);
    console.log(y + " maps to y " + pointy);
    
    var amount = 0;
    setInterval(function() {
    amount += 0.1; // change to alter duration
    if (amount > 1) amount = 1;
    context.moveTo(x, y);
    context.lineTo(x + (pointx - x) * amount, y + (pointy - y) * amount);
    context.strokeStyle = "white";
    context.stroke();
}, 30);
}