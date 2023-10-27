const username = document.querySelector('#username');
const scoreBtn = document.querySelector('#scoreBtn');
const score = document.querySelector('#score');
const mostRecentScore = document.querySelector('#mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highscores')) || []

const MAX_HIGH_SCORES = 5

finally.score.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    scoreBtn.disabled = !username.value 
})

saveHighScore = e => {
    e.preventDefault()

    const score = e => {
        score: mostRecentScore
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}