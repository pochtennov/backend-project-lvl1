import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getResultOfOperation = (operator, number1, number2) => {
  switch (operator) {
    case '-': return number1 - number2;
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    default: throw new Error('Operator is not supported');
  }
};

const genGameData = () => {
  const firstNumber = getRandomNumber(0, 200);
  const secondNumber = getRandomNumber(0, 200);
  const operationIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operationIndex];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getResultOfOperation(operator, firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

export default () => gameEngine(genGameData, task);
