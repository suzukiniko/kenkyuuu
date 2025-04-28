//kenkyuuuuuuuuuuuuu

var jotai = "fir";

window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  mode(jotai);

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  this.window.addEventListener("resize",resizeCanvas);

  function drawing(){
    ctx.fillStyle = "rgba(200,200,255,30)";
    const rectWidth = 300;
    const rectHeight = 300;
    const rectx = (canvas.width - rectWidth) / 2;
    const recty = (canvas.height - rectHeight) / 2;
    ctx.fillRect(x,y,rectWidth,rectHeight);
  }

  const form = document.getElementById("pushed");

  form.addEventListener("submit",function(event){
    event.preventDefault();
    jotai = "sta"
    mode(jotai);
    drawing();
  });

  function mode(state){
    if(state === "fir"){
      document.getElementById("maizuru").innerHTML = "加藤寛章";
      document.getElementById("FamousSaying").innerHTML = "苦しき稽古を積みし身が如何して負けよう自身と気迫";
      document.getElementById("jikotosui").innerHTML = "その日は必ず来る";
    }else if(state === "sta"){
      document.getElementById("maizuru").innerHTML = "長野雅樹";
      document.getElementById("FamousSaying").innerHTML = "セルフ・マネジメント";
      document.getElementById("jikotosui").innerHTML = "";
      document.getElementById("pushed").style.display = "none";
    }
  }
});
