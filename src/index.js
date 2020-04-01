import readlineSync from 'readline-sync';
import gamePicker from './gamePicker.js';


const gameEngine = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  const game = gamePicker(gameType);
  const [,, questionPhrase] = game();
  console.log(questionPhrase);

  for (let i = 0; i < 3; i += 1) {
    const [questionValue, correctAnswer] = game();
    console.log(`Question: ${questionValue}`);
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

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export { greetUser, gameEngine };
