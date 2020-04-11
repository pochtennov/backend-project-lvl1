import getRandomNumber from '../utils/randomValueFromRange.js';
import runGameEngine from '../index.js';

const maxDifference = 10;
const progressionLength = 10;
const task = 'What number is missing in the progression?';

const generateProgression = (firstMember, progrLength, difference) => {
  const progression = [];
  for (let i = 0; i < progrLength; i += 1) {
    progression[i] = firstMember + difference * i;
  }
  return progression;
};

const genGameData = () => {
  const firstMember = getRandomNumber(0, 160);
  const difference = getRandomNumber(0, maxDifference);
  const progression = generateProgression(firstMember, progressionLength, difference);
  const hiddenElIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElIndex].toString();
  progression[hiddenElIndex] = '...';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runGameEngine(genGameData, task);
