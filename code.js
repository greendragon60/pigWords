let paragraph = "I am the Green Dragon";

function transLateParagraph(paragraph) {
  let words = paragraph.split(" ");
  //console.log(words);
  let tWords = [];

  words.forEach((w) => {
    tWords.push(translateWord(w));
  });

  console.log("translated", words, tWords);
  let PLsentence = tWords.join(" ");
  //console.log(PLsentence);
  return PLsentence;
}

function translateToPigLatin() {
  const englishMessageHolder = document.getElementById("englishMessageHolder");
  console.log("englishMessageHolder", englishMessageHolder);
  let englishMessage = englishMessageHolder.value;
  console.log("translating :");
  console.log(englishMessage);
  console.log(" to Pig Latin, giving us -");
  let pigLatinTranslation = transLateParagraph(englishMessage);
  console.log(pigLatinTranslation);
  const pigLatinMessageHolder = document.getElementById(
    "pigLatinMessageHolder"
  );
  pigLatinMessageHolder.value = pigLatinTranslation;
}
function translateToEnglish() {
  const pigLatinMessageHolder = document.getElementById(
    "pigLatinMessageHolder"
  );

  let pigLatinMessage = pigLatinMessageHolder.value;
  console.log("translating :");
  console.log(pigLatinMessage);
  console.log(" to English as: ");
  let translatedPigLatin = transLateParagraph(pigLatinMessage);
  console.log("translatedPigLatin = ", translatedPigLatin);
  let retranslationArea = document.getElementById("finalTranslationArea");
  retranslationArea.value = translatedPigLatin;
}

function translateWord(inWord) {
  let vowels = ["a", "e", "i", "o", "u"];
  let transword = "";
  if (inWord.includes("-")) {
    word = inWord;
    //word is piglatin

    if (word.slice(word.length - 4) === "-ay") {
      //word is vowel pig latin word
      transword = word.slice(0, length - 4);
      return transword;
    } else {
      // word is a consanant word.
      tempWord = word.slice(0, word.length - 2);
      //console.log("tempword->", tempWord);
      let transPart = tempWord.split("-");
      //console.log(transPart);
      transword =
        transPart[1].slice(0).toLowerCase() + transPart[0].toLowerCase();

      return transword;
    }
  } else {
    // word is normal english
    word = inWord.toLowerCase();
    if (vowels.includes(word[0])) {
      transword = word + "-ay";
      return transword;
    } else {
      //word is a consanant word
      let tempW = "";
      for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
          // you found a consenant save it with the others and continue
          tempW = tempW + word[i].toUpperCase();
          //console.log("tempW", tempW);
          if (i === word.length) {
            console.log("AAAAAAAAAAAAAAAAAAAA", word, "-", tempW);
          }
        } else {
          // once a vowel is
          //found we are done, all left over parts of word,
          //word[i] - through - word.length - 1
          //so assemble the word  and you are done.

          transword = word.slice(i) + "-" + tempW.toUpperCase() + "ay";
          //console.log("returning transword 1", transword);
          return transword;
        }
      }
      // if at this point you have inspected the entire word, consenents are in tempw. Uppercased.  left over vowels are
      //console.log("returning transword 2", transword);

      return transword;
    }
    //console.log("returning transword 3", transword);

    return transword;
  }
}
console.log("--------------- testing begins ---------------------");
console.log("--------------- TDD testing begins ---------------------");

console.log("---------------testing anEnglishVowelWord---------------------");
console.log("eat = ", translateWord("eat"));
console.assert(translateWord("eat") === "eat-ay", "bad english2PL VW");

console.log("---------------testing aPigLatinVowelWord---------------------");
console.log("eat-ay = ", translateWord("eat-ay"));
console.assert(translateWord("eat-ay") === "eat", "bad PL2english VW");

console.log("-----------testing anEnglishConsonantWord-----------------");
console.log("yeat = ", translateWord("yeat"));
console.assert(translateWord("yeat") === "eat-Yay", "bad english2PL cW-y");

console.log("-----------testing aPigLatinConsonantWord-----------------");
console.log("eat-ay = ", translateWord("eat-ay"));
console.assert(translateWord("eat-ay") === "eat", "bad PL2english cW-y");

console.log("------------testing anEnglishConsonantWord---------------");
console.log("bob = ", translateWord("bob"));
console.assert(translateWord("bob") === "ob-Bay", "bad english2PL cW");

console.log("-------------testing aPigLatinConsonantWord----------------");
console.log("ob-Bay = ", translateWord("ob-bay"));
console.assert(translateWord("ob-Bay") === "bob", "bad PL2english cW");

console.log("-------------testing anEnglishMultiConsonantWord----------------");
console.log("three = ", translateWord("three"));
console.assert(translateWord("three") === "ee-THRay", "bad english2PL McW");

console.log("-------------testing aPigLatinMultiConsonantWord----------------");
console.log("ee-THRay = ", translateWord("ee-THRay"));
console.assert(translateWord("ee-THRay") === "three", "bad PL2english McW");

console.log("-------------testing a paragraph----------------");
console.log("I am the Dragon = ", transLateParagraph("I am the Dragon"));
console.assert(
  transLateParagraph("I am the Dragon") === "i-ay am-ay e-THay agon-DRay",
  "trouble with GD translation"
);
console.log("-------------testing a PLparagraph----------------");
console.log(
  "i-ay am-ay e-THay agon-DRay = ",
  transLateParagraph("i-ay am-ay e-THay agon-DRay")
);
console.assert(
  transLateParagraph("i-ay am-ay e-THay agon-DRay") === "i am the dragon",
  "trouble with GD PL translation"
);
console.log("-------------testing a paragraph with comma ----------------");
console.log(
  "Grace has a boy named jake, he is a handfull",
  transLateParagraph("Grace has a boy named jake, he is a handfull")
);
console.assert(
  transLateParagraph("Grace has a boy named jake, he is a handfull") ===
    `ace-GRay as-Hay a-ay oy-Bay amed-Nay ake,-Jay e-Hay is-ay a-ay andfull-Hay`,
  "bad bad ake-jay e2pl"
);

console.log("-------------testing a PLparagraph with comma----------");

console.log(
  "ace-GRay as-Hay a-ay oy-Bay amed-Nay ake,-Jay e-Hay is-ay a-ay andfull-Hay = ",
  transLateParagraph(
    `ace-GRay as-Hay a-ay oy-Bay amed-Nay ake,-Jay e-Hay is-ay a-ay andfull-Hay`
  )
);
console.assert(
  transLateParagraph(
    `ace-GRay as-Hay a-ay oy-Bay amed-Nay ake,-Jay e-Hay is-ay a-ay andfull-Hay`
  ) === "grace has a boy named jake, he is a handfull",
  "bad bad ake-jay pl2e"
);
console.log("---------------TDD testing complete---------------------");
console.log("---------------Phase One testing---------------------");

console.log("------------testing eat ---------------");
console.log("eat = ", translateWord("eat"));
console.assert(translateWord("eat") === "eat-ay", "invalid translation of eat");
console.log("--------------- testing omlet ---------------------");
console.log("omlet = ", translateWord("omlet"));

console.log("--------------- testing are ---------------------");
console.log("are = ", translateWord("are"));
console.log("--------------- testing egg ---------------------");
console.log("egg = ", translateWord("egg"));
console.log("--------------- testing explain ---------------------");
console.log("explain = ", translateWord("explain"));
console.log("--------------- testing allways ---------------------");
console.log("allways = ", translateWord("allways"));
console.log("--------------- testing ends ---------------------");
console.log("ends = ", translateWord("ends"));
console.log("--------------- testing every ---------------------");
console.log("every = ", translateWord("every"));
console.log("--------------- testing another ---------------------");
console.log("another = ", translateWord("another"));
console.log("--------------- testing under ---------------------");
console.log("under = ", translateWord("under"));
console.log("--------------- testing island ---------------------");
console.log("island = ", translateWord("island"));
console.log("--------------- testing elegant ---------------------");
console.log("elegant = ", translateWord("elegant"));
console.log("--------------- testing latin ---------------------");
console.log("latin = ", translateWord("latin"));
console.log("--------------- testing bananna ---------------------");
console.log("bananna = ", translateWord("bananna"));
console.log("--------------- testing trash ---------------------");
console.log("trash = ", translateWord("trash"));
console.log("--------------- testing happy ---------------------");
console.log("happy = ", translateWord("happy"));
console.log("--------------- testing duck ---------------------");
console.log("duck = ", translateWord("duck"));
console.log("--------------- testing gofish ---------------------");
console.log("gofish = ", translateWord("gofish"));
console.log("--------------- testing dopest ---------------------");
console.log("dopest = ", translateWord("dopest"));
console.log("--------------- testing me ---------------------");
console.log("me = ", translateWord("me"));
console.log("--------------- testing too ---------------------");
console.log("too = ", translateWord("too"));
console.log("--------------- testing will ---------------------");
console.log("will = ", translateWord("will"));
console.log("--------------- testing moist ---------------------");
console.log("moist = ", translateWord("moist"));
console.log("--------------- testing wet ---------------------");
console.log("wet = ", translateWord("wet"));
console.log("--------------- testing real ---------------------");
console.log("real = ", translateWord("real"));
console.log("--------------- testing simple ---------------------");
console.log("simple = ", translateWord("simple"));
console.log("--------------- testing say ---------------------");
console.log("say = ", translateWord("say"));
console.log("--------------- testing bagel ---------------------");
console.log("bagel = ", translateWord("bagel"));
console.log("--------------- testing you ---------------------");
console.log("you = ", translateWord("you"));
console.log("--------------- testing cheers ---------------------");
console.log("cheers = ", translateWord("cheers"));
console.log("--------------- testing shesh ---------------------");
console.log("shesh = ", translateWord("shesh"));
console.log("--------------- testing smile ---------------------");
console.log("smile = ", translateWord("smile"));
console.log("--------------- testing string ---------------------");
console.log("string = ", translateWord("string"));
console.log("--------------- testing thanks ---------------------");
console.log("thanks = ", translateWord("thanks"));
console.log("--------------- testing stupid ---------------------");
console.log("stupid = ", translateWord("stupid"));
console.log("--------------- testing glove ---------------------");
console.log("glove = ", translateWord("glove"));
console.log("--------------- testing stupid sentence ---------------------");
/* console.log(`note to the creator of this challenge, 
1) it is clear that you did not grow up speaking Pig Latin  Pigs do not understand numbers, they understand words.  as such your date of 1993 was
changed to "ineteen-Nay inety-Nay ree-THay"  Next it is an extremely offensive thing to the porcine galaxy to allow punctuation to touch letters, something to do with their inability to say comma, and the fact that pigs see the world as an all in adventure, so the concept of a semi-colon is something assigned to the chicken consolation,  last and most importantly it is important, for interstellar relations, that you learn to use Capital Letters, when appropriate.  Pigs for what ever reason use Capitals to insure correct understand of a word, the word eat-ay and the word eat-ay are two different constructs. Finally, if you check your spelling, you will find that your word usage, is totally incorrect , this is how you say -then sit back- (en-THay it-Say ack-Bay), not (en-THay its-ay ack-Bay)).  I might suggest that you translate your English into Pig Latin using this program.  this will correctly punctuate and capitalize your words and ideas and allow you to communicate, otherwise, because of a misunderstand, you may be attacked  by the

-------------------------- PIGS         FROM         SPACE!! ------------------

`); */
console.log(
  "stupid sentence says = ",
  transLateParagraph(
    "ince-Say e-THay irst-Fay ipotle-CHay opened-ay in-ay ineteen-Nay inety-Nay ree-THay , (1993) , e-way ave-hay earned-lay a-ay ot-lay about-ay igs-Pay . e-Way ow-KNay its-ay important-ay or-Fay em-THay o-Tay oot-Ray , oam-Ray , and-ay express-ay eir-THay atural-Nay endencies-Tay , o-Say e-Way ork-Way ith-Way armers-Fay o-Whay aise-Ray igs-Pay at-THay ang-Hay out-ay outdoors-ay or-ay in-ay eeply-Day edded-Bay arns-Bay . ey're-THay also-ay ever-Nay iven-Gay aily-Day oses-Day of-ay antibiotics-ay o-Tay ake-May em-THay ow-GRay aster-Fay . ut-Bay , eaking-Spay of-ay all-ay ings-THay ig-Pay , at-WHay on-ay earth-ay is-ay ig-Pay atin-Lay ? eally-Ray , o-WHay invented-ay it-ay ? en-WHay o-Day ou-ay use-ay it-ay ? is-ay it-ay only-ay or-Fay eens-TWay ? oes-Day it-ay ake-May ou-ay ound-Say art-Smay ? is-ay it-ay only-ay used-ay y-Bay armers-Fay ? is-ay is-THay ust-Jay a-ay ong-Lay etup-Say or-Fay a-ay ogwash-Hay oke-Jay ? are-ay ou-ay ill-Stay eading-Ray ? o-Say any-May uestions-Qay , o-Say ittle-Lay ime-Tay . en-THay again-ay , if-ay ou're-ay itting-Say ere-THay ith-Way a-ay ag-Bay ull-Fay of-ay urritos-Bay , aybe-May ou-ay ave-Hay e-THay ime-Tay o-Tay onder-Pay and-ay ecode-Day all-ay is-THay . and-ay if-ay at's-THay e-THay ase-Cay , en-THay it-Say ack-Bay , unwrap-ay , and-ay onder-Pay away-ay"
  )
);

console.log("---------------testing complete---------------------");
