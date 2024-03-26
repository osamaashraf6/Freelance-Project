const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressBar = document.querySelector(".progress-bar");
const bullet = document.querySelectorAll(".step .bullet");
const businessHeading = document.querySelector(".business-heading");
const formOuter = document.querySelector(".form-outer");
const popup = document.querySelector(".popup");
const biTitle = document.querySelector(".bi-title");
const form = document.querySelector("form");

let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[0].style.width = "16px"; //
  bullet[0].style.height = "17px"; //
  bullet[current - 1].classList.add("active");
  progressBar.style.borderBottomLeftRadius = "0";
  progressBar.style.borderTopLeftRadius = "0";
  progressBar.style.borderLeftWidth = "0";
  progressBar.style.left = "8%";
  biTitle.style.display = "flex";

  current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[1].style.width = "16px"; //
  bullet[1].style.height = "17px"; //
  bullet[0].style.width = "12px"; //
  bullet[0].style.height = "12px"; //
  bullet[current - 1].classList.add("active");
  progressBar.style.left = "8%";
  biTitle.style.display = "flex";
  form.style.height = "181vh";

  current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[2].style.width = "16px"; //
  bullet[2].style.height = "17px"; //
  bullet[1].style.width = "12px"; //
  bullet[1].style.height = "12px"; //
  bullet[current - 1].classList.add("active");
  progressBar.style.left = "8%";
  biTitle.style.display = "flex";

  current += 1;
});
submitBtn.addEventListener("click", function () {
  bullet[3].style.width = "16px"; //
  bullet[3].style.height = "17px"; //
  bullet[2].style.width = "12px"; //
  bullet[2].style.height = "12px"; //
  bullet[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    businessHeading.style.display = "none";
    formOuter.style.display = "none";
    popup.style.display = "flex";
  }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[0].style.width = "12px"; //
  bullet[0].style.height = "12px"; //
  bullet[current - 2].classList.remove("active");
  progressBar.style.borderLeftWidth = "2px";
  progressBar.style.borderRadius = "30px";
  progressBar.style.left = "-1%";
  biTitle.style.display = "none";

  current -= 1;
});

document.addEventListener("DOMContentLoaded", function (arg) {
  // do something cool
  progressBar.style.left = "-1%";
  biTitle.style.display = "none";
  form.style.height = "114vh";
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[0].style.width = "16px"; //
  bullet[0].style.height = "17px"; //
  bullet[1].style.width = "12px"; //
  bullet[1].style.height = "12px"; //
  bullet[current - 2].classList.remove("active");
  biTitle.style.display = "flex";

  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[1].style.width = "16px"; //
  bullet[1].style.height = "17px"; //
  bullet[2].style.width = "12px"; //
  bullet[2].style.height = "12px"; //
  bullet[current - 2].classList.remove("active");
  biTitle.style.display = "flex";

  current -= 1;
});
