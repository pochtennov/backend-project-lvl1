import getRandomNumber from '../utils/randomValueFromRange.js';

const upperRangeBoundary = 160;
const maxProgrStep = 10;
const progrLength = 10;
const questionPhrase = 'What number is missing in the progression?';

const generateProgression = (initialNumber, progressionLength, maxProgressionStep) => {
  const progressionStep = getRandomNumber(maxProgressionStep);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = initialNumber + progressionStep * i;
  }
  return progression;
};

const playProgression = () => {
  const initialProgressionNumber = getRandomNumber(upperRangeBoundary);
  const progression = generateProgression(initialProgressionNumber, progrLength, maxProgrStep);
  const emptyIndex = getRandomNumber(progrLength - 1);
  const questionValue = progression
    .reduce((acc, el, index) => (index !== emptyIndex ? `${acc} ${el}` : `${acc} ...`), '');
  const correctAnswer = `${progression[emptyIndex]}`;
  return [questionValue, correctAnswer];
};

export default () => [playProgression, questionPhrase];
