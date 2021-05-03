export default function getAllElements(selector, element = document) {
  return element.querySelectorAll(selector)
}
