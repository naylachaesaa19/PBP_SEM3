var motoGP = [
{
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
    }
},
{
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
        firstName: 'Cal',
        lastName: 'Crutchlow',
        country: 'UK'
    }
},
{
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
        firstName: 'Valentino',
        lastName: 'Rossi',
        country: 'Italy'
    }
},
{
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
        firstName: 'Andrea',
        lastName: 'Dovizioso',
        country: 'Italy'
    }
}
]

let groupedResult = {};
motoGP.forEach(event => {
  let country = event.winner.country;
  let name = `${event.winner.firstName} ${event.winner.lastName}`;
  let winLocation = `${event.circuit}, ${event.location}`;

  if (!groupedResult[country]) {
    groupedResult[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  groupedResult[country].winningCircuits.push({
    name: name,
    winLocation: winLocation
  });

  groupedResult[country].totalWin++;
});

console.log(groupedResult);

for (let country in groupedResult) {
  console.log(`\n🏆 Negara: ${country} (Total Win: ${groupedResult[country].totalWin})`);
  console.table(groupedResult[country].winningCircuits);
}