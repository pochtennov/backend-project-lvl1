import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const upperRangeBoundary = 160;
const bottomRangeBoundary = 0;
const minProgrStep = 0;
const maxProgrStep = 10;
const progrLength = 10;
const task = 'What number is missing in the progression?';

const generateProgression = (initialNumber, progressionLength, minProgrStep, maxProgrStep) => {
  const progressionStep = getRandomNumber(minProgrStep, maxProgrStep);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = initialNumber + progressionStep * i;
  }
  return progression;
};

const playProgression = () => {
  const initialProgressionNumber = getRandomNumber(bottomRangeBoundary, upperRangeBoundary);
  const progression = generateProgression(initialProgressionNumber, progrLength, minProgrStep, maxProgrStep);
  const emptyIndex = getRandomNumber(0, progrLength - 1);
  const question = progression
    .reduce((acc, el, index) => (index !== emptyIndex ? `${acc} ${el}` : `${acc} ...`), '');
  const correctAnswer = `${progression[emptyIndex]}`;
  return [question, correctAnswer];
};

export default () => gameEngine(playProgression, task);
