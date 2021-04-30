import getElement from './utils/getElement'

export default function setupQuizCards() {
  const buttonQuizCard = getElement('.js-quiz-card-button')
  const quizCardAnswer = getElement('.js-quiz-card-answer')

  buttonQuizCard.addEventListener('click', () => {
    quizCardAnswer.classList.toggle('hidden')
  })
}
