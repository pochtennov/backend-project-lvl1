import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const upperRangeBoundary = 200;
const bottomRangeBoundary = 0;
const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, (number1 % number2));
};

const playGcd = () => {
  const firstNumber = getRandomNumber(bottomRangeBoundary, upperRangeBoundary);
  const secondNumber = getRandomNumber(bottomRangeBoundary, upperRangeBoundary);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${findGcd(firstNumber, secondNumber)}`;
  return [question, correctAnswer];
};

export default () => gameEngine(playGcd, task);
