///// CAROUSEL

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("reviews__box");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

//////////// MOBILE NAVIGATION CLOSE + SCROLL

const checkbox = document.getElementById("navi-toggle");
const navLinks = Array.from(document.querySelectorAll("nav a"));
const header = document.querySelector("header");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    checkbox.checked = false;
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    const headerHeight = header.offsetHeight;
    const targetRect = targetSection.getBoundingClientRect();
    const targetPosition = targetRect.top + window.pageYOffset - headerHeight;
    window.scroll({
      top: targetPosition,
      left: 0,
      behavior: "smooth",
    });
  });
});

//////// STICKY NAVIGATION TOP

window.onscroll = function () {
  var navbar = document.querySelector(".header");
  var hero = document.querySelector(".hero");

  if (window.pageYOffset >= hero.offsetHeight) {
    navbar.classList.add("fixed");
    navbar.style.marginTop = 0;
  } else {
    navbar.classList.remove("fixed");
    navbar.style.marginTop = "2rem";
  }
};

//////// COPYRIGHT YEAR UPDATED

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
