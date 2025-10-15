const chalk = require('chalk');
const readline = require('readline-sync');
const { celciusToFahrenheit } = require('./rumusSuhu');

console.log(chalk.yellow.bold('\n=== PROGRAM KONVERSI SUHU ===\n'));

while (true) {
  const input = readline.question(chalk.white('Masukkan suhu (°C): '));

  const c = Number(input.replace(',', '.'));
  if (Number.isNaN(c)) {
    console.log(chalk.red('Input tidak valid — masukkan angka (contoh: 25 atau 37.5) .\n'));
    continue;
  }
  const f = celciusToFahrenheit(c);
  const fRounded = Number.isInteger(f) ? f : Math.round(f * 100) / 100;

  console.log(chalk.green(`\n→ ${c}°C = ${fRounded}°F\n`));
}

console.log(chalk.blue('Terima kasih sudah menggunakan program konversi suhu! Baybayy.\n'));
