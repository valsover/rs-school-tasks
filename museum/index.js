//Styling background images for footer socials list items
const social = document.querySelectorAll(".socials-list__item");

for (let i = 0; i <= social.length; i++) {
  social[i].style.background = `center no-repeat url("assets/svg/${social[i].classList[1]}.svg")`;
}
