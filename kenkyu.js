//kenkyuuuuuuuuuuuuu
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawing(){
    ctx.fillStyle = "rgba(200,200,255,30)";
    ctx.fillRect(100,400,300,300);
  }


  const form = document.getElementById("pushed");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    drawing();
  });
});