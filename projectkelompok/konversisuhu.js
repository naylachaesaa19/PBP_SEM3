const chalk = require('chalk');
const { celciusToFahrenheit } = require('./rumusSuhu');

console.log(chalk.magenta.bold('\n=== PROGRAM KONVERSI SUHU ===\n'));

const dataSuhu = [0, 25, 37, 100];

console.log(chalk.cyan('Hasil Konversi Celcius to Fahrenheit:\n'));

dataSuhu.forEach((c) => {
  const f = celciusToFahrenheit(c);
  console.log(chalk.yellow(` ${c}°C = ${f}°F`));
});

console.log(chalk.blue('\nTerima kasih sudah menggunakan program konversi suhu!\n'));