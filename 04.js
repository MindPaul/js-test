console.log("-----04-----");

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randSkaiciai = [];

for (let i = 1; i <= 5; i++) {
  randSkaiciai.push(rand(1, 10));
} 
console.log(randSkaiciai);