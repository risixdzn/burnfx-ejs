window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");      
      toTop.classList.add("is-active");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");      
      toTop.classList.remove("is-active");
    }
});

const toTop = document.querySelector(".to-top");

//hamburger-menu mobile

  const hamburger = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};



//scrollmagic

$(document).ready(function () {
  // wait for document ready

  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#home",
    duration: 700,
  })
    .setClassToggle("#nav01", "is-active")
    .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#quemsomos-maxwidth",
    duration: 700,
  })
    .setClassToggle("#nav02", "is-active")
    .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#slide-content",
    duration: 700,
  })
    .setClassToggle("#nav03", "is-active")
    .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#envieseusclips",
    duration: 700,
  })
    .setClassToggle("#nav04", "is-active")
    .addTo(controller);
});

