//kenkyuuuuuuuuuuuuu

var canvas = document.getElementById("excanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawing(){
  ctx.fillStyle = "rgba(35,35,255)";
  ctx.fillRect(40,80,100,200);
}

var form = document.getElementById("pushed");
form.addEventListener("submit",function(event){
  event.preventDefault();
  drawing();
})