// Constant variables
const question = document.querySelector('#question');
const choice = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions to be asked
let questions = [{
    question: 'Where did Hagrid get the dragon egg?',
    choice1: 'Diagon Alley',
    choice2: 'Knockturn Alley',
    choice3: 'Hogs Head',
    choice4: 'Leaky Cauldron',
    answer: 3,
},
{
    question: 'How many knuts are there to a sickle?',
    choice1: '16',
    choice2: '29',
    choice3: '21',
    choice4: '13',
    answer: 2,
},
{
    question: 'What is rumoured to guard some of the high security Gringotts vaults?',
    choice1: 'Dragons',
    choice2: 'Trolls',
    choice3: 'Dementors',
    choice4: 'Giants',
    answer: 1,
},
{
    question: 'Who is the ghost of Hufflepuff?',
    choice1: 'Bloody Baron',
    choice2: 'Grey Lady',
    choice3: 'Fat Friar',
    choice4: 'Nearly Headless Nick',
    answer: 3,
},
{
    question: 'What animal do spiders most fear?',
    choice1: 'Hippogriff',
    choice2: 'Thestral',
    choice3: 'Chimera',
    choice4: 'Basilisk',
    answer: 4,
},
{
    question: 'What spell lights up the tip of your wand?',
    choice1: 'Alohamora',
    choice2: 'Lumos',
    choice3: 'Reducto',
    choice4: 'Expelliarmus',
    answer: 2,
},
{
    question: 'What animal represents Ravenclaw house?',
    choice1: 'Lion',
    choice2: 'Snake',
    choice3: 'Eagle',
    choice4: 'Badger',
    answer: 3,
},
{
    question: "What colour is the Weasley's flying car?",
    choice1: 'Blue',
    choice2: 'Green',
    choice3: 'Black',
    choice4: 'Grey',
    answer: 1,
},
{
    question: 'Who owns the ice-cream shop in Diagon Alley?',
    choice1: 'Ollivanders',
    choice2: 'Flourish and Blott',
    choice3: 'Madam Malkins',
    choice4: 'Florean Fortescue',
    answer: 4,
}
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

// Functions to begin quiz and generate questions.
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/highscores.html');
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};