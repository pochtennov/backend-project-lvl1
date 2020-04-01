const upperRangeBoundary = 100;
const questionPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playIsEven = () => {
    const questionValue = Math.floor(Math.random() * upperRangeBoundary);
    const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
    return [questionValue, correctAnswer, questionPhrase];
};

export default playIsEven;