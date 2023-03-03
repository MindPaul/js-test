console.log("-----06------");

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const masyvas = [];

for (let i =0; i <rand(20, 30); i++) {
  masyvas.push(rand(10, 30));
}
console.log(masyvas);

const maxSkaicius = masyvas[0];
for (let i = 0; i < length; i++) {
  if(masyvas[i] > maxSkaicius){
    maxSkaicius = masyvas[i];
  }
  
}

console.log(`Didziausias skaicius: `, maxSkaicius);