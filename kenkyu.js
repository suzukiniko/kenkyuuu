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

  var selectEn = [""];

  var selectJa = ["108 私の夢は英語で小説を書くことだ。 ",
    "109 夜にこの通りを一人で歩くのは危険だ。 ",
    "110 私がすぐに立ち上がって意見を述べる必要があった。 ",
    "111 日の出に間に合うように山頂に着くのは難しいと私はわかった。",
    "112 この機械の操作方法を教えていただけませんか。 ",
    "113 このエプロンには物を入れるポケットがない。",
    "114 彼らが座るのに十分な椅子がない。 ",
    "117 私は今学期によい成績を取るために，学校が終わってから，毎日5 時間勉強した。 "
    "118 空港への道で万一渋滞が起きても飛行機に遅れないように，あなたはもう家を出るべきだ。 ",
    "120 研究者たちが新しい素材を作り出すのは本当に難しかった。 ",
    "121 彼女が事故でひどいけがをしたと聞いて私は驚いた。 ",
    "123 彼は私に，いつも同じものを食べないように助言した。 ",
    "124 この人気の小説は書店で今なおよく売れているようだ。 ",
    "126 彼は40代のときは裕福だったようだ。 ",
    "127 私はホテルの部屋の窓越しに，太陽が湖の上に昇るのを見た。",
    "129 彼女は自分の娘に1週間に1回電話をよこすよう約束させた。 ",
    "130 両親は私に激怒し，私は二度とこんなに遅く帰宅しないと約束させられた。 ",
    "131 この洗濯機は，このスイッチを押すだけでよい。",
    "134 ニューヨークからサンフランシスコまで車で行くと4日くらいかかります。"
    "135 シンガポールへ飛行機で行くにはいくらかかるでしょう。 ",
    "137 あなたはいちばん上の棚にある箱に手が届くくらい背が高い。 ",
    "139 私はあまりにも忙しくて，彼の言っていることに注意を払うことができなかった。",
    "143 さらに悪いことに，彼は脚を骨折したあとで肺炎にかかった。 ",
    "146 チョコレートを食べ過ぎると健康を損なうかもしれない。",
    "148 ジムの両親は，彼がアルバイトをするという考えが気に入らない。 ",
    "149 その父親は自分の子どもたちに通りで遊ばないように強く求めている。 ",
    "150 彼は誰にも気づかれずにビルを出た。 ",
    "151 彼女は自分の娘が有名な女優になったことを自慢に思っている。 ",
    "152 私は明日，小学校の同窓会で昔のクラスメートに会うのを楽しみにしている。",
    "153 私は英語で発表することに慣れている。 ",
    "158 彼は私の言うことを聞いていなかったので，今日起こったことを彼に話してもむだだった。 ",
    "161 図書館での私の仕事は問題ないが，本を棚に戻すのに私の時間のほとんどを費やしているので，ちょっと退屈だ。",
    "162 デイビッドは庭で母親を手伝うのに忙しかった。",
    "163 ニューヨークに滞在中，私たちは駐車場を見つけるのに大変苦労した。",
    "164 ジョンはタバコをやめるのにとても苦労している。",
    "166 修理にどのくらい時間がかかるかは言えない。",
    ""
  ];

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

  let jotai = "";

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

  physics.addEventListener("change",function(){
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

  biology.addEventListener("change",function(){
    if(biology.checked) {
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

  chemistry.addEventListener("change",function(){
    if(chemistry.checked) {
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

  history.addEventListener("change",function(){
    if(history.checked) {
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



  document.getElementById("start").addEventListener("click",function(event){
    event.preventDefault();
    jotai = "starting";
  });
});
