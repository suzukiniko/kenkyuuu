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

  function drawing(){
    if(jotai == "starting"){
      ctx.fillStyle = "rgba(255,255,60,0.8)"
    }else{
      ctx.fillStyle = "rgba(200,200,255,0.3)";
    }
      const rectWidth = 300;
      const rectHeight = 300;
      const rectx = (canvas.width - rectWidth) / 2;
      const recty = (canvas.height - rectHeight/2) / 2;
      ctx.fillRect(rectx,recty,rectWidth,rectHeight);
  }

  function triangleDrawing(){
    ctx.fillStyle = "rgba(255,0,0,0.8)"
    const triangleWidth = 300;
    const triangleXY = (canvas.width - triangleWidth) / 2;
    ctx.beginPath();
    ctx.moveTo(triangleXY, triangleXY);
    ctx.lineTo(triangleXY + triangleWidth, triangleXY);
    ctx.lineTo(triangleXY +  (triangleWidth / 2), triangleXY - (triangleWidth * Math.sqrt(3) / 2));
    ctx.closePath();
    ctx.fill();
  }

  function hexagonDrawing(){
    ctx.fillstyle = "rgba(90,255,50,0.8)";
    const hexagonWidth = 300;
    const hexagonXY = (canvas.width - hexagonWidth) / 2;
    ctx.beginPath();
    ctx.moveTo(hexagonXY,hexagonXY);
    ctx.lineTo(hexagonXY + (hexagonWidth / 4),hexagonXY + (hexagonWidth * Math.sqrt(3) / 2));
    ctx.lineTo(hexagonXY + (3 * hexagonWidth / 4),hexagonXY + (hexagonWidth + Math.sqrt(3) / 2));
    ctx.lineto(hexagonXY + hexagonWidth,hexagonXY);
    ctx.lineTo(hexagonXY + (3 * hexagonWidth / 4),hexagonXY - (hexagonWidth + Math.sqrt(3) / 2));
    ctx.lineTo(hexagonXY + (hexagonWidth / 4),hexagonXY - (hexagonWidth + Math.sqrt(3) / 2));
    ctx.closePath();
    ctx.fill();
    }

  const form = document.getElementById("pushed");

  function mode(){
    if(jotai === "fir"){
      document.getElementById("maizuru").innerHTML = "home";
      document.getElementById("FamousSaying").innerHTML = "苦しき稽古を積みし身が如何して負けよう自身と気迫";
      document.getElementById("jikotosui").innerHTML = "その日は必ず来る";
      document.getElementById("pushed").style.display = "block";
      document.getElementById("stpushed").style.display = "none"
    }else if(jotai === "starting"){
      document.getElementById("maizuru").innerHTML = "starting";
      document.getElementById("FamousSaying").innerHTML = "始めるよ"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      document.getElementById("stpushed").style.display = "block"
    }else if(jotai === "moding"){
      document.getElementById("maizuru").innerHTML = "moding";
      document.getElementById("FamousSaying").innerHTML = "モードを選んでね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      document.getElementById("stpushed").style.display = "none"
      drawing();
    }else if(jotai === "selecting"){
      document.getElementById("maizuru").innerHTML = "selecting";
      document.getElementById("FamousSaying").innerHTML = "選択してね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      document.getElementById("stpushed").style.display = "none"
      drawing();
    }
  }

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
