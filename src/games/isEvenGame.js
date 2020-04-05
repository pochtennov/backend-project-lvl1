import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const upperRangeBoundary = 100;
const bottomRangeBoundary = 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playIsEven = () => {
  const question = getRandomNumber(bottomRangeBoundary, upperRangeBoundary);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(playIsEven, task);
