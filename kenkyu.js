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
    ctx.fillStyle = "rgba(200,200,255,0.3)";
    const rectWidth = 300;
    const rectHeight = 300;
    const rectx = (canvas.width - rectWidth) / 2;
    const recty = (canvas.height - rectHeight) / 2;
    ctx.fillRect(rectx,recty,rectWidth,rectHeight);
  }

  const form = document.getElementById("pushed");

  function mode(){
    if(jotai === "fir"){
      document.getElementById("maizuru").innerHTML = "home";
      document.getElementById("FamousSaying").innerHTML = "苦しき稽古を積みし身が如何して負けよう自身と気迫";
      document.getElementById("jikotosui").innerHTML = "その日は必ず来る";
      document.getElementById("pushed").style.display = "block";
    }else if(jotai === "sta"){
      document.getElementById("maizuru").innerHTML = "modeSelect";
      document.getElementById("FamousSaying").innerHTML = "セルフ・マネジメント";
      document.getElementById("jikotosui").innerHTML = "";
      document.getElementById("pushed").style.display = "none";
    }else if(jotai === "starting"){
      document.getElementById("maizuru").innerHTML = "starting";
      document.getElementById("FamousSaying").innerHTML = "始めるよ"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
    }else if(jotai === "moding"){
      document.getElementById("maizuru").innerHTML = "moding";
      document.getElementById("FamousSaying").innerHTML = "モードを選んでね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
    }else if(jotai === "selecting"){
      document.getElementById("maizuru").innerHTML = "selecting";
      document.getElementById("FamousSaying").innerHTML = "選択してね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
    }
  }

  document.getElementById("start").addEventListener("onclick",function(event){
    event.preventDefault();
    jotai = "starting";
    mode(jotai);
    drawing();
  });
  document.getElementById("mode").addEventListener("onclick",function(event){
    event.preventDefault();
    jotai = "moding";
    mode(jotai);
    drawing();
  });
  document.getElementById("select").addEventListener("onclick",function(event){
    event.preventDefault();
    jotai = "moding"
    mode(jotai);
    drawing();
  });

});
