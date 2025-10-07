let parentToKnowHeight = document.querySelector(".our-skills");
let FillSpans = document.querySelectorAll(".prog span");
let stat = document.getElementById("stat");
let SpansMoney = document.querySelectorAll(".stats .box .number");
let started = false;
let scrollerBar = document.querySelector(".progressBar");
function Loading() {
  let loader = document.querySelector(".Loader");
  let body = document.querySelector("body");
  body.classList.remove("load");
  loader.classList.add("load");
  setTimeout(function () {
    loader.remove();
  }, 500);
}
window.onload = function () {
  Loading();
};
function ProgressNumber(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
window.onscroll = function () {};
window.addEventListener("scroll", function () {
  if (window.scrollY >= parentToKnowHeight.offsetTop - 100) {
    FillSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= stat.offsetTop - 100) {
    nestedIfLogic: if (!started) {
      SpansMoney.forEach((span) => {
        ProgressNumber(span);});}
    started = true;
  } 
});
