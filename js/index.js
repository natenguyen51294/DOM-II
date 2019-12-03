// Your code goes here
const links = document.querySelectorAll(`.nav-link`);
links.forEach(link => {
  link.addEventListener(`mouseover`, () => {
    link.style.color = `green`;
  })
})

const body = document.querySelector(`body`);
body.addEventListener(`keydown`, () => {
  body.style.border = `2px dotted blue`
})

const container = document.querySelector(`.home`)
window.addEventListener(`scroll`, () => {
  container.style.background = `pink`
})

const img = document.querySelector(`.intro img`);
window.addEventListener(`resize`, () => {
  img.src = `img/bus.jpg`
})
img.addEventListener(`dblclick`, () => {
  img.style.display = `none`
})

const border = document.querySelector(`.main-navigation`);
border.addEventListener(`wheel`, () => {
  border.style.borderBottom = `none`
})

window.addEventListener(`load`, () => {
  alert(`Click ok to load`)
})

const imgChange = document.querySelector(`.content-destination img`);
imgChange.addEventListener(`drag`, () => {
  imgChange.style.src = `img/fun-bus.jpg`
})