'use strict';

// Source https://codepen.io/alvarotrigo/pen/KKvOGNb
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // mark indicator to check when text reveal or not
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

console.log('js running');




const arrowBtn = document.getElementById('arwbtn');
const whoAmI = document.getElementById('btn');
const title = document.getElementById('title')

function moveToSecondBanner() {
  window.scrollTo(0, document.getElementById('dos').scrollHeight);
}

function moveToFirstBanner() {
  window.scrollTo(0, 0);
}

arrowBtn.onclick = function () {
  moveToSecondBanner();
}
whoAmI.onclick = function () {
  moveToSecondBanner();
}
title.onclick = function () {
  moveToFirstBanner();
}