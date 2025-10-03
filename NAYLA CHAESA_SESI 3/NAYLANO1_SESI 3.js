let input = prompt("Masukkan nilai (0-100): ");
let nilai = parseInt(input);
let huruf;

if (isNaN(nilai) || nilai < 0 || nilai > 100) {
  alert("Input tidak valid! Tolong masukkan angka antara 0-100.");
} else if (nilai >= 80) {
  huruf = "A";
} else if (nilai >= 70) {
  huruf = "B";
} else if (nilai >= 60) {
  huruf = "C";
} else if (nilai >= 50) {
  huruf = "D";
} else {
  huruf = "E";
}

if (huruf) {
alert(`Nilai kamu: ${nilai} \nNilai huruf: ${huruf}`);
}