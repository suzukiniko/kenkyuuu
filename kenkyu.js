//kenkyuuuuuuuuuuuuu

var jotai = "fir";

window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  mode(jotai);

  function drawing(){
    ctx.fillStyle = "rgba(200,200,255,30)";
    ctx.fillRect(100,400,300,300);
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
      document.getElementById("kenkyu").innerHTML = "KENKYU";
      document.getElementById("jishintokihaku").innerHTML = "苦しき稽古を積みし身が如何して負けよう自身と気迫";
      document.getElementById("thatDay").innerHTML = "その日は必ず来る";
    }else if(state === "sta"){
      document.getElementById("kenkyu").innerHTML = "code moved";
      document.getElementById("jishintokihaku").innerHTML = "";
      document.getElementById("thatDay").innerHTML = "";
    }
  }
  mode(fir);
});
