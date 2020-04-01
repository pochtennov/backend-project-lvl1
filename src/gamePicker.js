import playCalc from './games/calcGame.js';
import playIsEven from './games/isEvenGame.js';
import playGcd from './games/gcdGame.js';

const gamePicker = {
  'brain-even': playIsEven,
  'brain-calc': playCalc,
  'brain-gcd': playGcd,
};

export default (gameType) => gamePicker[gameType];
