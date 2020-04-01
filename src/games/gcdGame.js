import getRandomNumber from '../utils/randomValueFromRange.js';

const upperRangeBoundary = 200;
const questionPhrase = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, (number1 % number2));
};

const playGcd = () => {
  const firstNumber = getRandomNumber(upperRangeBoundary);
  const secondNumber = getRandomNumber(upperRangeBoundary);
  const questionValue = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${findGcd(firstNumber, secondNumber)}`;
  return [questionValue, correctAnswer];
};

export default () => [playGcd, questionPhrase];