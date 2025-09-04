window.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById("excanvas");
  const ctx = canvas.getContext("2d");

  //国語
  const japanese = document.getElementById("japanese");

  const jaSub = document.querySelector("#jaGrade").parentElement;

  const gen = document.getElementById("gen");
  const genlabel = document.getElementById("genlabel");

  const kob = document.getElementById("kob");
  const koblabel = document.getElementById("koblabel");

  const kan = document.getElementById("kan");
  const kanlabel = document.getElementById("kanlabel");

  //数学
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
  const clabel = document.getElementById("clabel");

  //英語
  const english = document.getElementById("english");

  //物理
  const physics = document.getElementById("physics");

  const phSub = document.querySelector("#phGrade").parentElement;

  const phKiso = document.getElementById("phKiso");
  const phKisolabel = document.getElementById("phKisolabel");

  const phNormal = document.getElementById("phNormal");
  const phNormallabel = document.getElementById("phNormallabel");

  //生物
  const biology = document.getElementById("biology");

  const bioSub = document.querySelector("#bioGrade").parentElement;

  const bioKiso = document.getElementById("bioKiso");
  const bioKisolabel = document.getElementById("bioKisolabel");

  const bioNormal = document.getElementById("bioNormal");
  const bioNormallabel = document.getElementById("bioNormallabel");

  //化学
  const chemistry = document.getElementById("chemistry");

  const cheSub = document.querySelector("#cheGrade").parentElement;

  const cheKiso = document.getElementById("cheKiso");
  const cheKisolabel = document.getElementById("cheKisolabel");

  const cheNormal = document.getElementById("cheNormal");
  const cheNormallabel = document.getElementById("cheNormallabel");

  //歴史
  const history = document.getElementById("history");

  const hisSub = document.querySelector("#hisGrade").parentElement;

  const japan = document.getElementById("japan");
  const japanlabel = document.getElementById("japanlabel");

  const world = document.getElementById("world");
  const worldlabel = document.getElementById("worldlabel");

  //地理
  const geography = this.document.getElementById("geography");

  const form = document.getElementById("pushed");
  const textarea = document.getElementById("text");

  let jotai = "";
  var selnumber = Math.floor(Math.random() * 52);
  var phrnumber = Math.floor(Math.random() * 57);
  var subsubtext = document.getElementById("subsub").textContent;

  let text = "";

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);



  japanese.addEventListener("change", function () {
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

  mathmatics.addEventListener("change", function () {
    if (mathmatics.checked) {

      mathSub.style.display = "inline-flex";

      one.style.display = "inline";
      onelabel.style.display = "inline";

      two.style.display = "inline";
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

  physics.addEventListener("change", function () {
    if (physics.checked) {
      phSub.style.display = "inline-flex";

      phKiso.style.display = "inline";
      phKisolabel.style.display = "inline";

      phNormal.style.display = "inline";
      phNormallabel.style.display = "inline";
    } else {
      phSub.style.display = "none";

      phKiso.style.display = "none";
      phKisolabel.style.display = "none";

      phNormal.style.display = "none";
      phNormallabel.style.display = "none";
    }
  })

  biology.addEventListener("change", function () {
    if (biology.checked) {
      bioSub.style.display = "inline-flex";

      bioKiso.style.display = "inline";
      bioKisolabel.style.display = "inline";

      bioNormal.style.display = "inline";
      bioNormallabel.style.display = "inline";
    } else {
      bioSub.style.display = "none";

      bioKiso.style.display = "none";
      bioKisolabel.style.display = "none";

      bioNormal.style.display = "none";
      bioNormallabel.style.display = "none";
    }
  })

  chemistry.addEventListener("change", function () {
    if (chemistry.checked) {
      cheSub.style.display = "inline-flex";

      cheKiso.style.display = "inline";
      cheKisolabel.style.display = "inline";

      cheNormal.style.display = "inline";
      cheNormallabel.style.display = "inline";
    } else {
      cheSub.style.display = "none";

      cheKiso.style.display = "none";
      cheKisolabel.style.display = "none";

      cheNormal.style.display = "none";
      cheNormallabel.style.display = "none";
    }
  })

  history.addEventListener("change", function () {
    if (history.checked) {
      hisSub.style.display = "inline-flex";

      japan.style.display = "inline";
      japanlabel.style.display = "inline";

      world.style.display = "inline";
      worldlabel.style.display = "inline";
    } else {
      hisSub.style.display = "none";

      japan.style.display = "none";
      japanlabel.style.display = "none";

      world.style.display = "none";
      worldlabel.style.display = "none";
    }
  })

  //今度コメントアウト消す

  //  document.getElementById("start").addEventListener("click",function(event){
  //    event.preventDefault();
  //    jotai = "starting"; //飾り
  //    document.getElementById("text").value = "";
  //    document.getElementById("subsub").textContent = "";
  //    document.getElementById("result").textContent = "";

  //    if(japanese.checked){
  //      selectEnglish();
  //      document.getElementById("subtitle").textContent = selectJa[selnumber];
  //    }else if(english.checked){
  //      phraseEnglish();
  //      document.getElementById("subtitle").textContent = phraseJa[phrnumber];
  //    }

  //    text = document.getElementById("subtitle").textContent;
  //  });

  //  document.getElementById("answered").addEventListener("click",function(event){
  //    event.preventDefault();
  //    const ans = document.getElementById("text").value;
  //    if(japanese.checked){
  //      if (selectEn[selnumber] == ans){
  //        document.getElementById("result").textContent = "success!";
  //        selectEnglish();
  //      }else{
  //        document.getElementById("result").textContent = "failed";
  //      }
  //    }else if(english.checked){
  //      if (phraseEn[phrnumber] == ans){
  //        document.getElementById("result").textContent = "succes!";
  //        phraseEnglish();
  //      }else{
  //        document.getElementById("result").textContent = "failed";
  //      }
  //    }
  //  });

  //  document.getElementById("skip").addEventListener("click",function(event){
  //    event.preventDefault();
  //    subsubtext = document.getElementById("subsub").textContent;
  //    if (subsubtext == ""){
  //      if(japanese.checked){
  //        document.getElementById("subsub").textContent = selectEn[selnumber];
  //      }else if(english.checked){
  //        document.getElementById("subsub").textContent = phraseEn[phrnumber];
  //      }
  //    } else {
  //      document.getElementById("subsub").textContent = "";
  //    }
  //  })
});

//文化祭用追加
function playMusic(id) {
  const audio = document.getElementById(id);
  audio.play();
  console.log("playmusic")
}

function pauseMusic(id) {
  const audio = document.getElementById(id);
  audio.pause();
}

function stopMusic(id) {
  const audio = document.getElementById(id);
  audio.pause();
  audio.currentTime = 0;
}