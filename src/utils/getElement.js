export default function getElement(selector, element = document) {
  return element.querySelector(selector)
}
