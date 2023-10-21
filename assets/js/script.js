// questions that will be asked

let questions = [{
    question: "Where did Hagrid get the dragon egg?",
    choice1: 'Diagon Alley',
    choice2: 'Knockturn Alley',
    choice3: 'Hogs Head',
    choice4: 'Leaky Cauldron',
    answer: 3,
},
{
    question: "How many knuts are there to a sickle?",
    choice1: '16',
    choice2: '29',
    choice3: '21',
    choice4: '13',
    answer: 2,
},
{
    question: "What is rumoured to guard some of the high security Gringotts vaults?",
    choice1: 'Dragons',
    choice2: 'Trolls',
    choice3: 'Dementors',
    choice4: 'Giants',
    answer: 1,
},
{
    question: "Who is the ghost of Hufflepuff?",
    choice1: 'Bloody Baron',
    choice2: 'Grey Lady',
    choice3: 'Fat Friar',
    choice4: 'Nearly Headless Nick',
    answer: 3,
},
{
    question: "What animal do spiders most fear?",
    choice1: 'Hippogriff',
    choice2: 'Thestral',
    choice3: 'Chimera',
    choice4: 'Basilisk',
    answer: 4,
},
{
    question: "What spell lights up the tip of your wand?",
    choice1: 'Alohamora',
    choice2: 'Lumos',
    choice3: 'Reducto',
    choice4: 'Expelliarmus',
    answer: 2,
},
{
    question: "What animal represents Ravenclaw house?",
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
    question: "Who owns the ice-cream shop in Diagon Alley?",
    choice1: 'Ollivanders',
    choice2: 'Flourish and Blott',
    choice3: 'Madam Malkins',
    choice4: 'Florean Fortescue',
    answer: 4,
},
{
    question: "Where do the Weasleys go on holiday in the Prisoner of Azkaban?",
    choice1: 'France',
    choice2: 'Greece',
    choice3: 'Egypt',
    choice4: 'Romania',
    answer: 3,
},
{
    question: "What is the name of Hermione's cat?",
    choice1: 'Errol',
    choice2: 'Crookshanks',
    choice3: 'Hedwig',
    choice4: 'Scabbers',
    answer: 2,
},
{
    question: "What do the dementors take when they kiss you?",
    choice1: 'Magic ability',
    choice2: 'Happiness',
    choice3: 'Soul',
    choice4: 'Life',
    answer: 3,
},
{
    question: "What was the nickname of James Potter?",
    choice1: 'Prongs',
    choice2: 'Moony',
    choice3: 'Wormtail',
    choice4: 'Padfoot',
    answer: 1,
},
{
    question: "What spell allows things to be concealed?",
    choice1: 'Patronus Charm',
    choice2: 'Fidelius Charm',
    choice3: 'Caterwauling Charm',
    choice4: 'Imperterbable Charm',
    answer: 2,
},
{
    question: "Which teams played in the Quidditch World Cup?",
    choice1: 'USA and Hungary',
    choice2: 'France and Norway',
    choice3: 'England and Romania',
    choice4: 'Ireland and Bulgaria',
    answer: 4,
},
{
    question: "What is the name of the magical school in FranceM?",
    choice1: 'Beauxbatons',
    choice2: 'Durmstrang',
    choice3: 'Ilvermorny',
    choice4: 'Mahoutokoro',
    answer: 1,
},
{
    question: "What does Harry Potter use in the second task in The Goblet of Fire?",
    choice1: 'Confundus Charm',
    choice2: 'Gillyweed',
    choice3: 'Bubble-head Charm',
    choice4: 'Transfiguration',
    answer: 2,
},
{
    question: "What does Professor Binns teach?",
    choice1: 'Charms',
    choice2: 'Defense Against the Dark Arts',
    choice3: 'A History of Magic',
    choice4: 'Astronomy',
    answer: 3,
},
{
    question: "Who is the cousin of Sirius Black?",
    choice1: 'Voldemort',
    choice2: 'Bellatrix Lestrange',
    choice3: 'Lucius Malfoy',
    choice4: 'Filius Flitwick',
    answer: 2,
},
{
    question: "Who teaches Defence Against the Dark Arts in Order of the Phoenix?",
    choice1: 'Remus Lupin',
    choice2: 'Mad Eye Moody',
    choice3: 'Severus Snape',
    choice4: 'Dolores Umbridge',
    answer: 4,
},
{
    question: "How many Horcruxes does Voldemort create?",
    choice1: '5',
    choice2: '6',
    choice3: '7',
    choice4: '8',
    answer: 3,
},
{
    question: "Who owned Hepzibah Smiths cup with the badger on it?",
    choice1: 'Helga Hufflepuff',
    choice2: 'Borgin and Burke',
    choice3: 'Grindewald',
    choice4: 'Cornelius Fudge',
    answer: 1,
},
{
    question: "Who discovers the original locket Horcrux?",
    choice1: 'Albus Dumbledore',
    choice2: 'Andromeda Tonks',
    choice3: 'Regulus Black',
    choice4: 'Tom Riddle',
    answer: 3,
},
{
    question: "Who killed Nagini?",
    choice1: 'Harry Potter',
    choice2: 'Neville Longbottom',
    choice3: 'Ginny Weasley',
    choice4: 'Hermione Granger',
    answer: 2,
},
{
    question: "What is the name of Remus Lupin's son?",
    choice1: 'Albus',
    choice2: 'Scorpius',
    choice3: 'Hugo',
    choice4: 'Teddy',
    answer: 4,
},
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementsByClassName("choice");
const nextButton = document.getElementsByClassName("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Functions to begin quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}