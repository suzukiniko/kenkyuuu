//kenkyuuuuuuuuuuuuu
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawing(){
    ctx.fillStyle = "rgba(35,35,255)";
    ctx.fillRect(40,80,100,200);
  }


  const form = document.getElementById("pushed");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    drawing();
  });
});