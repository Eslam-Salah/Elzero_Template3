// For Header
let header = document.querySelector("header");
let scroll1 = window.scrollY;

window.addEventListener("scroll", () => {
  let scroll2 = window.scrollY;
  if (scroll1 > scroll2) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }
  scroll1 = scroll2;
});

let otherLinks = document.querySelector(".otherLinks");
let iconLinks = document.querySelector(".otherLinks i");

otherLinks.addEventListener("click", () => {
  otherLinks.classList.toggle("open");
  iconLinks.classList.toggle("rotate");
});

document.addEventListener("click", (e) => {
  if (e.target !== otherLinks) {
    otherLinks.classList.remove("open");
    iconLinks.classList.remove("rotate");
  }
});

// For Skills Section
let skillSection = document.querySelector(".our-skills");
let theProgress = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillSection.offsetTop - 150) {
    theProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    theProgress.forEach((span) => {
      span.style.width = "0%";
    });
  }
});

// For Events Section
let countDate = new Date("Dec 31, 2021 23:59:59").getTime();

let newYear = setInterval(() => {
  // Get date now
  let now = new Date().getTime();
  // Get Difference between date now and countDate
  let gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.querySelector(".unit .day").innerHTML = d < 10 ? `0${d}` : d;
  document.querySelector(".unit .hour").innerHTML = h < 10 ? `0${h}` : h;
  document.querySelector(".unit .minute").innerHTML = m < 10 ? `0${m}` : m;
  document.querySelector(".unit .second").innerHTML = s < 10 ? `0${s}` : s;

  if (gap < 0) {
    clearInterval(newYear);
  }
}, 1000);

// For States Section
let stateSection = document.querySelector(".stats");
let stateNumber = document.querySelectorAll(".box .number");
let started = false; // Function Started ? No

window.addEventListener("scroll", () => {
  if (window.scrollY >= stateSection.offsetTop - 200) {
    if (!started) {
      stateNumber.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
