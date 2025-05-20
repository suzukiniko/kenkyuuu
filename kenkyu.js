//kenkyuuuuuuuuuuuuu



window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  let jotai = "fir";

  mode(jotai);

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize",resizeCanvas);

  const form = document.getElementById("pushed");

  document.getElementById("start").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "starting";
    mode(jotai);
    drawing();
  });
  document.getElementById("mode").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "moding";
    mode(jotai);
    drawing();
  });
  document.getElementById("select").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "selecting"
    mode(jotai);
    drawing();
  });
  document.getElementById("triangle").addEventListener("click",function(event){
    event.preventDefault();
    triangleDrawing();
  });
  document.getElementById("rectangle").addEventListener("click",function(event){
    event.preventDefault();
    drawing();
  });
  document.getElementById("hexagon").addEventListener("click",function(event){
    event.preventDefault();
    hexagonDrawing();
  });

});
