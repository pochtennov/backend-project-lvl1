const upperRangeBoundary = 200;
const questionPhrase = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (range) => Math.floor(Math.random() * range);

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, (number1 % number2));
};

const playGcd = () => {
  const firstNumber = getRandomNumber(upperRangeBoundary);
  const secondNumber = getRandomNumber(upperRangeBoundary);
  const questionValue = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${findGcd(firstNumber, secondNumber)}`;
  return [questionValue, correctAnswer, questionPhrase];
};

export default playGcd;
