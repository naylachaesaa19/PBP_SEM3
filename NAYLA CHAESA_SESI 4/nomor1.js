let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 },
];

let highest = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > highest.score) {
    highest = studentsScore[i];
  }
}

console.log("Nilai siswa yang tertinggi adalah :", highest.name);
console.log("Dengan nilai :", highest.score);
