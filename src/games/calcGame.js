import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const upperRangeBoundary = 200;
const bottomRangeBoundary = 0;
const upperOperationsRangeBoundary = 2;
const bottomOperationsRangeBoundary = 0;
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
  const firstNumber = getRandomNumber(bottomRangeBoundary,upperRangeBoundary);
  const secondNumber = getRandomNumber(bottomRangeBoundary, upperRangeBoundary);
  const operationIndex = getRandomNumber(bottomOperationsRangeBoundary ,upperOperationsRangeBoundary);
  const operation = operations[operationIndex];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = `${getResultOfOperation(operation, firstNumber, secondNumber)}`;
  return [question, correctAnswer];
};

export default () => gameEngine(playCalc, task);
