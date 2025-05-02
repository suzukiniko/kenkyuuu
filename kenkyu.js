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
    ctx.fillStyle = "rgba(200,200,255,30)";
    const rectWidth = 300;
    const rectHeight = 300;
    const rectx = (canvas.width - rectWidth) / 2;
    const recty = (canvas.height - rectHeight) / 2;
    ctx.fillRect(rectx,recty,rectWidth,rectHeight);
  }

  const form = document.getElementById("pushed");

  function started(event){
    event.preventDefault();
    jotai = "starting";
    mode(jotai);
    drawing();
  };

  function moded(event){
    event.preventDefault();
    jotai = "moding";
    mode(jotai);
    drawing();
  }

  function selected(event){
    event.preventDefault();
    jotai = "selecting";
    mode(jotai);
    drawing();
  }

  function mode(state){
    if(state === "fir"){
      document.getElementById("maizuru").innerHTML = "home";
      document.getElementById("FamousSaying").innerHTML = "苦しき稽古を積みし身が如何して負けよう自身と気迫";
      document.getElementById("jikotosui").innerHTML = "その日は必ず来る";
      document.getElementById("pushed").style.display = "block";
      jotai = "fir";
    }else if(state === "sta"){
      document.getElementById("maizuru").innerHTML = "modeSelect";
      document.getElementById("FamousSaying").innerHTML = "セルフ・マネジメント";
      document.getElementById("jikotosui").innerHTML = "";
      document.getElementById("pushed").style.display = "none";
      jotai = "sta";
    }else if(state === "starting"){
      document.getElementById("maizuru").innerHTML = "starting";
      document.getElementById("FamousSaying").innerHTML = "始めるよ"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      jotai = "starting";
    }else if(state === "moding"){
      document.getElementById("maizuru").innerHTML = "moding";
      document.getElementById("FamousSaying").innerHTML = "モードを選んでね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      jotai = "moding";
    }else if(state === "selecting"){
      document.getElementById("maizuru").innerHTML = "selecting";
      document.getElementById("FamousSaying").innerHTML = "選択してね"
      document.getElementById("jikotosui").innerHTML = ""
      document.getElementById("pushed").style.display = "none"
      jotai = "selecting";
    }
  }

  document.getElementById("start").addEventListener("click",started);
  document.getElementById("mode").addEventListener("click",moded);
  document.getElementById("select").addEventListener("click",selected);

});
