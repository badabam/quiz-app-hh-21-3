import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')
  const header = getElement('[data-header]')

  buttons.forEach(setupButton)

  function setupButton(button) {
    const buttonName = button.dataset.nav
    const headerText = button.dataset.headerText

    button.addEventListener('click', () => {
      updateHeader(headerText)
      changePage(buttonName)
      updateNavigation(buttonName)
    })
  }

  function updateHeader(text) {
    header.innerText = text
  }

  function updateNavigation(buttonName) {
    buttons.forEach(button => {
      button.classList.toggle(
        'navigation__link--active',
        button.dataset.nav === buttonName
      )
    })
  }

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }
}
