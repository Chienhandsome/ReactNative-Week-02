let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const checkWinner = (dolphinsAverage, koalasAverage) => {
  if (dolphinsAverage >= 2 * koalasAverage) {
    console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`);
  } else if (koalasAverage >= 2 * dolphinsAverage) {
    console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`);
  } 
};

checkWinner(dolphinsAverage, koalasAverage);


