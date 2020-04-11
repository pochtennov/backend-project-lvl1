import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGameEngine = (genGameData, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);

  for (let round = 1; round <= roundsCount; round += 1) {
    const [question, correctAnswer] = genGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default runGameEngine;
