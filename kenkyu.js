//kenkyuuuuuuuuuuuuu



window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  const japanese = document.getElementById("japanese");
  const gen = document.getElementById("gen");
  const kob = document.getElementById("kob");
  const kan = document.getElementById("kan");
  const mathmatics = document.getElementById("mathmatics");
  const one = document.getElementById("one");
  const two = document.getElementById("two");
  const three = document.getElementById("three");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");

  const form = document.getElementById("pushed");

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize",resizeCanvas);

  gen.style.display = "none";
  gen.style.display = "none";
  gen.style.display = "none";

  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "none";
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";

  japanese.addEventListener("change",function(){
    if (japanese.checked) {
      gen.style.display = "block";
      kob.style.display = "block";
      kan.style.display = "block";
    } else {
      gen.style.display = "none";
      kob.style.display = "none";
      kan.style.display = "none";
    }
  });

  mathmatics.addEventListener("change",function(){
    if (mathmatics.checked) {
      one.style.display = "block";
      two.style.display = "block";
      three.style.display = "block";
      a.style.display = "block";
      b.style.display = "block";
      c.style.display = "block";
    } else {
      one.style.display = "none";
      two.style.display = "none";
      three.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
    }
  });

  document.getElementById("start").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "starting";
  });
});
