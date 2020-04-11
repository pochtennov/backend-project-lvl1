import getRandomNumber from '../utils/randomValueFromRange.js';
import runGameEngine from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return true;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

export default () => runGameEngine(genGameData, task);
