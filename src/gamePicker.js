import playCalc from './games/calcGame.js';
import playIsEven from './games/isEvenGame.js';

const gamePicker = {
  'brain-even': playIsEven,
  'brain-calc': playCalc,
};

export default (gameType) => gamePicker[gameType];
