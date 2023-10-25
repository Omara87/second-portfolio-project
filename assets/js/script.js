const question = document.querySelector('#question');
const choice = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
    answer: 3,;
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

