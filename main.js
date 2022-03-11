const background = document.querySelector(".cmn-toggle");
const body = document.querySelector("body");
const facebook = document.querySelector(".list-link .link-real");

background.addEventListener("click", togglebg);
facebook.addEventListener("click", linkreal);

function togglebg() {
  body.classList.toggle("active");
}

function linkreal() {
  facebook.innerHTML = "Facebook clone";
}
