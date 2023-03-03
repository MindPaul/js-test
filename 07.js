console.log("------07-----");

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const raides = [];
let aRai = 0;
let bRai = 0;
let cRai = 0;
let dRai = 0;

function randRaides() {
  const abcd = 'ABCD';
  return abcd[Math.floor(Math.random() * abcd.length)];
}
for (let i = 0; i <=100; i++) {
  raides[i] = randRaides();
  if (raides[i] === 'A') {
    aRai++;
  }else if (raides[i] === 'B'){
    bRai++;
  }else if (raides[i] === 'C'){
    cRai++;
  }else {
    dRai++;
  }
}

console.log( "A:", aRai);
console.log( "B:", bRai);
console.log( "C:", cRai);
console.log( "D:", dRai);