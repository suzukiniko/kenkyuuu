//kenkyuuuuuuuuuuuuu



window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize",resizeCanvas);

  document.getElementById("gen").style.display = "none";
  document.getElementById("kob").style.display = "none";
  document.getElementById("kan").style.display = "none";

  const form = document.getElementById("pushed");

  document.getElementById("japanese").addEventListener("click",function(event){
    document.getElementById("gen").style.display = "block";
    document.getElementById("kob").style.display = "block";
    document.getElementById("kan").style.display = "block";
  });

  document.getElementById("start").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "starting";
  });
});
