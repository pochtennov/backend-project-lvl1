import readlineSync from 'readline-sync';

const roundsPerGame = 3;

const gameEngine = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);

  for (let round = 1; round <= roundsPerGame; round += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userInput = readlineSync.question('Your answer: ');
    if (correctAnswer !== userInput) {
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default gameEngine;
