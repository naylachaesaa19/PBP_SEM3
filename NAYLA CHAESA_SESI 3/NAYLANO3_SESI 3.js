let mahasiswa = ["Kanjeng", "Ajeng", "Bunga", "Siti", "Putri"];

console.log("Daftar nama mahasiswa awal:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

mahasiswa.push("Maesaroh");

mahasiswa.shift();

console.log("\nDaftar nama mahasiswa setelah dimodifikasi:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}