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

  var selectEn = ["My dream is to write a novel in English.",
    "It is dangerous to walk alone along this street at night.",
    "It was necessary for me to stand up and speak out right away.",
    "I found it difficult to get to the top of the mountain in time for the sunrise.",
    "Could you show me how to operate this machine?",
    "This apron has no pocket to put things in.",
    "There are not enough chairs for them to sit on.",
    "I studied five hours every day after school in order to get good grades this term.",
    "You should leave home now in order (so as) not to miss your flight should there be a lot of traffic on the way to the airport.",
    "The new materials were very tough for the researchers to create.",
    "I was surprised to hear that she was badly injured in the accident.",
    "He advised me not to eat the same foods all the time.",
    "This popular novel still seems to be selling well at bookstores.",
    "He seems to have been rich when he was in his forties.",
    "I saw the sun rise over the lake through my hotel room window.",
    "She made her daughter promise to call her once a week.",
    "My parents were really angry with me, and I was made to promise never to come home so late again.",
    "With this washing machine, all you have to do is press this button.",
    "It takes about four days to drive from New York to San Francisco.",
    "How much would it cost me to fly to Singapore?",
    "You are tall enough to reach the box on the top shelf.",
    "I was too busy to pay attention to what he was saying.",
    "To make matters worse, he got pneumonia after breaking his leg.",
    "Eating too much chocolate can destroy your health.",
    "Jim's parents don't like the idea of his working part-time.",
    "The father insists on his children not playing in the street.",
    "He got out of the building without being noticed by anyone.",
    "She is proud of her daughter having become a famous actress.",
    "I'm looking forward to meeting my old classmates tomorrow at our elementary school reunion.",
    "I am used to making presentations in English.",
    "He was not listening to me, so it was no good telling him what happened today.",
    "My job at the library is OK, but I spend most of my time putting books back on the shelves, so it's a little boring.",
    "David was busy helping his mother in the yard.",
    "While in New York, we had a lot of difficulty finding a parking place.",
    "John is having a lot of trouble giving up cigarettes.",
    "There is no telling how long the repairs will take.",
    "Bill looked at the sleeping child.",
    "The passengers traveling from Paris to Sydney must go to the transit area in Terminal A as soon as possible.",
    "The exam given to students in the reading class was too hard.",
    "A quarter of British adults walk for less than ten minutes a day, including time spent walking to their cars.",
    "She felt encouraged by her parents' kind words.",
    "I was shocked to find that someone had left the water running in the upstairs bathtub.",
    "She kept me waiting for half an hour at the station.",
    "Because of the noise, I could not make myself heard.",
    "Can you make yourself well understood in English?",
    "When I looked out of the window last night, I saw a cat sneaking into my neighbor's yard.",
    "I heard my name called. Didn't you hear it?",
    "Feeling tired, I decided not to go to the party.",
    "Not knowing what to do, he came to me for help.",
    "All things considered, we should not take such a risk.",
    "He was sitting by the desk with his arms folded.",
    "There is no bread left in the basket."
  ];

  var selectJa = ["108 私の夢は英語で小説を書くことだ。 ",
    "109 夜にこの通りを一人で歩くのは危険だ。 ",
    "110 私がすぐに立ち上がって意見を述べる必要があった。 ",
    "111 日の出に間に合うように山頂に着くのは難しいと私はわかった。",
    "112 この機械の操作方法を教えていただけませんか。 ",
    "113 このエプロンには物を入れるポケットがない。",
    "114 彼らが座るのに十分な椅子がない。 ",
    "117 私は今学期によい成績を取るために，学校が終わってから，毎日5 時間勉強した。 ",
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
    "134 ニューヨークからサンフランシスコまで車で行くと4日くらいかかります。",
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
    "168 ビルは眠っている子どもを見た。",
    "171 パリからシドニーへ行く乗客は，できるだけ速やかにAターミナルの乗り継ぎエリアに行かなければならない。",
    "172 講読の授業で生徒たちに課された試験はあまりにも難しかった。",
    "173 イギリスの成人の4 分の1 は，自分の車のところまで歩くのにかかる時間を含めても，一日に10 分未満しか歩かない。",
    "174 彼女は両親の優しい言葉に励まされたと感じた。",
    "175 誰かが上の階の風呂の水を出しっぱなしにしていたのがわかって，私はショックだった。",
    "176 彼女は駅で私を30分待たせた。",
    "178 騒音のせいで，私の話すことを聞き取ってもらえなかった。",
    "179 あなたは英語で十分に用が足せますか。",
    "180 昨夜，私が窓の外を見たとき，一匹のネコが隣の庭にこっそり入っていくのを見た。",
    "181 私の名前が呼ばれるのが聞こえた。聞こえませんでしたか。",
    "183 疲れていると感じたので，私はパーティーに行かないことに決めた。",
    "185 何をすればよいかわからなかったので，彼は私に助けを求めにきた。",
    "193 すべてのことを考慮すれば，私たちはそのような危険を冒すべきではない。",
    "195 彼は机の側で腕を組んで座っていた。",
    "196 かごの中にパンが残っていない。"
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
  const textarea = document.getElementById("text");

  let jotai = "";
  var number = Math.floor(Math.random() * 52);
  var subsubtext = document.getElementById("subsub").textContent;

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
    jotai = "starting"; //飾り
    document.getElementById("text").value = "";
    document.getElementById("subsub").textContent = "";
    document.getElementById("result").textContent = "";
    selectEnglish();
    document.getElementById("subtitle").textContent = selectJa[number];
    let text = document.getElementById("subtitle").textContent;
  });

  document.getElementById("answered").addEventListener("click",function(event){
    event.preventDefault();
    const ans = document.getElementById("text").value;
    if (selectEn[number] == ans){
      document.getElementById("result").textContent = "success!";
      selectEnglish();
    }else{
      document.getElementById("result").textContent = "failed";
    }
  });

  document.getElementById("skip").addEventListener("click",function(event){
    event.preventDefault();
    subsubtext = document.getElementById("subsub").textContent;
    if (subsubtext == ""){
      document.getElementById("subsub").textContent = selectEn[number];
    } else {
      document.getElementById("subsub").textContent = "";
    }
  })

  function selectEnglish(){
    number = Math.floor(Math.random() * 52);
  }

});
