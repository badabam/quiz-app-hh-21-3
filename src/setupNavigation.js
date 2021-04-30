import getElement from './utils/getElement'

export default function setupNavigation() {
  const buttonHome = getElement('.js-home-button')
  const buttonBookmark = getElement('.js-bookmark-button')
  const buttonCreate = getElement('.js-create-button')

  const homePage = getElement('.js-page-home')
  const bookmarkPage = getElement('.js-page-bookmark')
  const createPage = getElement('.js-page-create')

  const homePageHeader = getElement('.js-page-home-header')
  const bookmarkPageHeader = getElement('.js-page-bookmark-header')
  const createPageHeader = getElement('.js-page-create-header')

  buttonHome.addEventListener('click', () => {
    homePage.classList.remove('hidden')
    bookmarkPage.classList.add('hidden')
    createPage.classList.add('hidden')

    homePageHeader.classList.remove('hidden')
    bookmarkPageHeader.classList.add('hidden')
    createPageHeader.classList.add('hidden')

    buttonHome.classList.add('navigation__link--active')
    buttonBookmark.classList.remove('navigation__link--active')
    buttonCreate.classList.remove('navigation__link--active')
  })

  buttonBookmark.addEventListener('click', () => {
    homePage.classList.add('hidden')
    bookmarkPage.classList.remove('hidden')
    createPage.classList.add('hidden')

    homePageHeader.classList.add('hidden')
    bookmarkPageHeader.classList.remove('hidden')
    createPageHeader.classList.add('hidden')

    buttonHome.classList.remove('navigation__link--active')
    buttonBookmark.classList.add('navigation__link--active')
    buttonCreate.classList.remove('navigation__link--active')
  })

  buttonCreate.addEventListener('click', () => {
    homePage.classList.add('hidden')
    bookmarkPage.classList.add('hidden')
    createPage.classList.remove('hidden')

    homePageHeader.classList.add('hidden')
    bookmarkPageHeader.classList.add('hidden')
    createPageHeader.classList.remove('hidden')

    buttonHome.classList.remove('navigation__link--active')
    buttonBookmark.classList.remove('navigation__link--active')
    buttonCreate.classList.add('navigation__link--active')
  })
}
