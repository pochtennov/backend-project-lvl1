import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0);

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const upperRangeBoundary = 100;
  for (let i = 0; i < 3; i += 1) {
    const numberForQuestion = Math.floor(Math.random() * upperRangeBoundary);
    console.log(`Question: ${numberForQuestion}`);
    const userInput = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
    if (correctAnswer !== userInput) {
      console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export { greet, isEvenGame };
