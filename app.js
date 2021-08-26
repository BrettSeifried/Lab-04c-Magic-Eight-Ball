// import functions
import { answers } from './answers.js';
import { getRandomInt } from './randomNumber.js';
import { reps } from './answers.js';
// reference needed DOM elements
const pushButton = document.getElementById('button'); 
const warmUp = document.getElementById('warmup');
const repsGo = document.getElementById('reps');

// set event listeners 
pushButton.addEventListener('click', () => {
    const answer = answers[getRandomInt(5)];
    warmUp.textContent = answer;
});

pushButton.addEventListener('click', () => {
    const number = reps[getRandomInt(5)];
    repsGo.textContent = number;
});


    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

    //const answer= answer[2]
    //const randomIndex = getRandmNumber(0, answers, length) - 1
    //cosnt randomAnswer = answers[randomIndex];
    //answerDisplay.textConten = randsomAnswer;