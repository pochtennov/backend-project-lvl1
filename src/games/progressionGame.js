import getRandomNumber from '../utils/randomValueFromRange.js';
import gameEngine from '../index.js';

const maxDifference = 10;
const progressionTermsCount = 10;
const task = 'What number is missing in the progression?';

const generateProgression = (firstTerm, termsCount, maxDiff) => {
  const difference = getRandomNumber(0, maxDiff);
  const progression = [];
  for (let i = 0; i < termsCount; i += 1) {
    progression[i] = firstTerm + difference * i;
  }
  return progression;
};

const genGameData = () => {
  const firstProgrTerm = getRandomNumber(0, 160);
  const progression = generateProgression(firstProgrTerm, progressionTermsCount, maxDifference);
  const emptyIndex = getRandomNumber(0, progressionTermsCount - 1);
  const question = progression
    .reduce((acc, el, index) => (index !== emptyIndex ? `${acc} ${el}` : `${acc} ...`), '');
  const correctAnswer = progression[emptyIndex].toString();
  return [question, correctAnswer];
};

export default () => gameEngine(genGameData, task);
