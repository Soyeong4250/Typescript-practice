enum Language {
  C,  // 0
  Java,  // 1
  TypeScript,  // 2
}

var a:number = 10;
a = Language.C;
console.log(a);  // 0


enum Programming {
  C,
  Java, 
  TypeScript,
}

var langC: Language.C;
langC = Programming.C;  // 에러