window.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  const japanese = document.getElementById("japanese");

  const jaSub = document.querySelector("#jaGrade").parentElement;
  
  const gen = document.getElementById("gen");
  const genlabel = document.getElementById("genlabel");

  const kob = document.getElementById("kob");
  const koblabel = document.getElementById("koblabel");

  const kan = document.getElementById("kan");
  const kanlabel = document.getElementById("kanlabel");

  const mathmatics = document.getElementById("mathmatics");

  const mathSub = document.querySelector("#mathGrade").parentElement;
  
  const one = document.getElementById("one");
  const onelabel = document.getElementById("onelabel");
  
  const two = document.getElementById("two");
  const twolabel = document.getElementById("twolabel");
  
  const three = document.getElementById("three");
  const threelabel = document.getElementById("threelabel");
  
  const a = document.getElementById("a");
  const alabel = document.getElementById("alabel");
  
  const b = document.getElementById("b");
  const blabel = document.getElementById("blabel");
  
  const c = document.getElementById("c");
  const clabel = document.getElementById("clabel")

  const form = document.getElementById("pushed");

  let jotai = ""

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize",resizeCanvas);



  japanese.addEventListener("change",function(){
    if (japanese.checked) {
      jaSub.style.display = "inline-flex";

      gen.style.display = "inline";
      genlabel.style.display = "inline";

      kob.style.display = "inline";
      koblabel.style.display = "inline";

      kan.style.display = "inline";
      kanlabel.style.display = "inline";
    } else {
      jaSub.style.display = "none";

      gen.style.display = "none";
      genlabel.style.display = "none";

      kob.style.display = "none";
      koblabel.style.display = "none";

      kan.style.display = "none";
      kanlabel.style.display = "none";
    }
  });

  mathmatics.addEventListener("change",function(){
    if (mathmatics.checked) {

      mathSub.style.display = "inline-flex";

      one.style.display = "inline";
      onelabel.style.display = "inline";

      two.style.display = "inine";
      twolabel.style.display = "inline";

      three.style.display = "inline";
      threelabel.style.display = "inline";

      a.style.display = "inline";
      alabel.style.display = "inline";

      b.style.display = "inline";
      blabel.style.display = "inline";

      c.style.display = "inline";
      clabel.style.display = "inline";

    } else {
      mathSub.style.display = "none";

      one.style.display = "none";
      onelabel.style.display = "none";

      two.style.display = "none";
      twolabel.style.display = "none";

      three.style.display = "none";
      threelabel.style.display = "none";

      a.style.display = "none";
      alabel.style.display = "none";

      b.style.display = "none";
      blabel.style.display = "none";

      c.style.display = "none";
      clabel.style.display = "none";
    }
  });

  document.getElementById("start").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "starting";
  });
});
