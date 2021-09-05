var lpx, lpy;
var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 5;

var w = screen.width;
var h = screen.height;
var nw = w - 50;
var nh = h - 70;
if (w <992)
{
    document.getElementById("my_canvas").width = nw;
    document.getElementById("my_canvas").height = nh;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    lpx = e.touches[0].clientX - canvas.offsetLeft;
    lpy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();

    lpx = cpx;
    lpy = cpy;
}

function clear()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("width").value = "";
}