import playCalc from './games/calcGame.js';
import playIsEven from './games/isEvenGame.js';
import playGcd from './games/gcdGame.js';
import playProgression from './games/progressionGame.js';

const gamePicker = {
  'brain-even': playIsEven,
  'brain-calc': playCalc,
  'brain-gcd': playGcd,
  'brain-progression': playProgression,
};

export default (gameType) => gamePicker[gameType];
