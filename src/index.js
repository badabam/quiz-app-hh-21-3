// Navigation
const pageHome = document.querySelector('[data-page="home"]')
const pageCreate = document.querySelector('[data-page="create"]')
const pageBookmarks = document.querySelector('[data-page="bookmarks"]')

const headerHome = document.querySelector('[data-header="home"]')
const headerCreate = document.querySelector('[data-header="create"]')
const headerBookmarks = document.querySelector('[data-header="bookmarks"]')

const buttonHome = document.querySelector('[data-button="home"]')
const buttonCreate = document.querySelector('[data-button="create"]')
const buttonBookmarks = document.querySelector('[data-button="bookmarks"]')

buttonHome.addEventListener('click', () => {
  headerHome.classList.remove('hidden')
  headerCreate.classList.add('hidden')
  headerBookmarks.classList.add('hidden')

  pageHome.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageBookmarks.classList.add('hidden')

  buttonHome.classList.add('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
  buttonBookmarks.classList.remove('navigation__link--active')
})

buttonBookmarks.addEventListener('click', () => {
  headerHome.classList.add('hidden')
  headerCreate.classList.add('hidden')
  headerBookmarks.classList.remove('hidden')

  pageHome.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageBookmarks.classList.remove('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
  buttonBookmarks.classList.add('navigation__link--active')
})

buttonCreate.addEventListener('click', () => {
  headerHome.classList.add('hidden')
  headerCreate.classList.remove('hidden')
  headerBookmarks.classList.add('hidden')

  pageHome.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageBookmarks.classList.add('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonCreate.classList.add('navigation__link--active')
  buttonBookmarks.classList.remove('navigation__link--active')
})
