import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getResultOfOperation = (operation, number1, number2) => {
  switch (operation) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: throw new Error('Operation is not supported');
  }
};

const playCalc = () => {
  const firstNumber = getRandomNumber(0, 200);
  const secondNumber = getRandomNumber(0, 200);
  const operationIndex = getRandomNumber(0, 2);
  const operation = operations[operationIndex];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = `${getResultOfOperation(operation, firstNumber, secondNumber)}`;
  return [question, correctAnswer];
};

export default () => gameEngine(playCalc, task);
