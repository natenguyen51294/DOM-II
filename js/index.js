// Your code goes here

window.onload = function () {
  const navBar = document.querySelector(`.nav`);
  navBar.addEventListener(`click`, () => {
    navBar.style.backgroundColor = `cyan`
  });

  // links animations
  const links = document.querySelectorAll(`.nav-link`);
  links.forEach(link => {
    link.addEventListener(`click`, (event) => {
      link.style.backgroundColor = `yellow`;
      event.stopPropagation();
      event.preventDefault();
    })
  });
  links.forEach(link => {
    link.addEventListener(`mouseover`, () => {
      link.style.color = `green`;
    })
  });
  links.forEach(link => {
    link.addEventListener(`mouseleave`, () => {
      link.style.color = ``;
    })
  });
  links.forEach(link => {
    link.addEventListener(`focus`, () => {
      link.style.border = `1px red solid`;
    })
  });

  // body border
  const body = document.querySelector(`body`);
  body.addEventListener(`keydown`, () => {
    body.style.border = `2px dotted blue`
  });

  // bg color change
  const container = document.querySelector(`.home`)
  window.addEventListener(`scroll`, () => {
    container.style.background = `pink`;
  });

  // img resize / disappear
  const img = document.querySelector(`.intro img`);
  window.addEventListener(`resize`, () => {
    img.style.transform = `scale(.9)`;
  });
  img.addEventListener(`dblclick`, () => {
    img.style.display = `none`;
  });

  // border bottom gone
  const border = document.querySelector(`.main-navigation`);
  border.addEventListener(`wheel`, () => {
    border.style.borderBottom = `none`
  });

  // alert message
  window.addEventListener(`load`, () => {
    alert(`Click ok to load`)
  });

  gsap.to(`.rounded`, { duration: 3, y: -350 });
}
