import getAllElements from './utils/getAllElements'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')

  buttons.forEach(button => {
    const buttonName = button.dataset.nav
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.page

        page.classList.toggle('hidden', pageName !== buttonName)

        // same result as the line above:
        // if (pageName === buttonName) {
        //   page.classList.remove('hidden')
        // } else {
        //   page.classList.add('hidden')
        // }
      })
    })
  })
}
