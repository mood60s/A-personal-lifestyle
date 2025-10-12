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
        ProgressNumber(span);
      });
    }
    started = true;
  }
});
function handleEvent() {
  let days = document.getElementById("count-Day");
  let hours = document.getElementById("count-Hours");
  let minute = document.getElementById("count-Minute");
  let sec = document.getElementById("count-Sec");
  console.log(days, hours, minute, sec);
  let myTarget = new Date("31 Dec, 2025 23:59:59").getTime();
  
  let Counter = setInterval(_ => {
    // Found Different Between Now and your Target
    let now = new Date();
    let Different = myTarget - now;
    days.innerHTML = Math.floor(Different / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(Different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minute.innerHTML = Math.floor(Different % (1000 * 60 * 60) / (1000 * 60));
    sec.innerHTML = Math.floor(Different % (1000 * 60) / (1000));
    console.log(Different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    if (Different < 0) { 
      clearInterval(Counter)
    }
  },1000)
}
handleEvent();
