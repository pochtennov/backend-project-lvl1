import getRandomNumber from '../utils/randomValueFromRange.js';

const upperRangeBoundary = 200;
const signRangeBoundary = 2;
const questionPhrase = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const getCorrectAnswer = (sign, number1, number2) => {
  switch (sign) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: throw new Error('Operation is not supported');
  }
};

const playCalc = () => {
  const firstNumber = getRandomNumber(upperRangeBoundary);
  const secondNumber = getRandomNumber(upperRangeBoundary);
  const signIndex = getRandomNumber(signRangeBoundary);
  const sign = signs[signIndex];
  const questionValue = `${firstNumber} ${sign} ${secondNumber}`;
  const correctAnswer = `${getCorrectAnswer(sign, firstNumber, secondNumber)}`;
  return [questionValue, correctAnswer, questionPhrase];
};

export default playCalc;
