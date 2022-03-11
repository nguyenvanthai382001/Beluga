const background = document.querySelector(".cmn-toggle");
const body = document.querySelector("body");

background.addEventListener("click", togglebg);

function togglebg() {
  body.classList.toggle("active");
}
