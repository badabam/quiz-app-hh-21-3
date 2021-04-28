// Navigation
const pageHome = document.querySelector('[data-page="home"]')
const pageCreate = document.querySelector('[data-page="create"]')
const pageBookmarks = document.querySelector('[data-page="bookmarks"]')

const header = document.querySelector('[data-header]')

const buttonHome = document.querySelector('[data-button="home"]')
const buttonCreate = document.querySelector('[data-button="create"]')
const buttonBookmarks = document.querySelector('[data-button="bookmarks"]')

buttonHome.addEventListener('click', () => {
  header.innerText = 'Quiz App'

  pageHome.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageBookmarks.classList.add('hidden')

  buttonHome.classList.add('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
  buttonBookmarks.classList.remove('navigation__link--active')
})

buttonBookmarks.addEventListener('click', () => {
  header.innerText = 'Bookmarks'

  pageHome.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageBookmarks.classList.remove('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
  buttonBookmarks.classList.add('navigation__link--active')
})

buttonCreate.addEventListener('click', () => {
  header.innerText = 'Create'

  pageHome.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageBookmarks.classList.add('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonCreate.classList.add('navigation__link--active')
  buttonBookmarks.classList.remove('navigation__link--active')
})
