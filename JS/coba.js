// for
for (let i = 0; i < 3; i++) {
  console.log("Iterasi ke-" + i);
}

// while
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}

// for-of (array)
let angka = [10, 20, 30];
for (let a of angka) {
  console.log("Angka:", a);
}

// forEach
angka.forEach(function (val) {
  console.log("Val:", val);
});

function tambah(a, b) {
  return a + b;
}

const hasil = tambah(5, 3);
console.log("Hasil:", hasil);

// arrow function
const kurang = (x, y) => x - y;

console.log("Kurang:", kurang(10, 4));
