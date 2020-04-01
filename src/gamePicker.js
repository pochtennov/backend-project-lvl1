import calcGame from './games/calcGame.js';
import isEvenGame from './games/isEvenGame.js';
import gcdGame from './games/gcdGame.js';
import progressionGame from './games/progressionGame.js';
import isPrimeGame from './games/isPrimeGame.js';

const gamePicker = {
  'brain-even': isEvenGame,
  'brain-calc': calcGame,
  'brain-gcd': gcdGame,
  'brain-progression': progressionGame,
  'brain-prime': isPrimeGame,
};

export default (gameType) => gamePicker[gameType];
