import getRandomNumber from '../utils/randomValueFromRange.js';

const upperRangeBoundary = 100;
const questionPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

const playIsPrime = () => {
  const questionValue = getRandomNumber(upperRangeBoundary);
  const correctAnswer = isPrime(questionValue) ? 'yes' : 'no';
  return [questionValue, correctAnswer];
};

export default () => [playIsPrime, questionPhrase];
