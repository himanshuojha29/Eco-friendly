function zigzagmotion() {
  var zigzag = document.querySelector(".zigzag");
  var zigzagtext = zigzag.textContent;
  var splittedtext = zigzagtext.split("");

  var clutter = "";

  splittedtext.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  zigzag.innerHTML = clutter;
}
zigzagmotion();

function zigzagmotion2() {
  var zigzag2 = document.querySelector(".zigzag2");
  var zigzagtext2 = zigzag2.textContent;
  var splittedtext2 = zigzagtext2.split("");

  var clutter = "";

  splittedtext2.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  zigzag2.innerHTML = clutter;
}
zigzagmotion2();

function zigzagmotion3() {
  var zigzag3 = document.querySelector(".zigzag3");
  var zigzagtext3 = zigzag3.textContent;
  var splittedtext3 = zigzagtext3.split("");

  var clutter = "";

  splittedtext3.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  zigzag3.innerHTML = clutter;
}
zigzagmotion3();

const tl = gsap.timeline();

tl.from(
  ".brand",
  {
    y: 45,
    opacity: 0,
    duration: 1,
    ease: "back.out(2.7)",
  },
  "0.5"
);

tl.from(
  ".nav-buttons button",
  {
    scale: 1.2,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.12,
    ease: "back.out(3.7)",
  },
  "0.4"
);

gsap.set(".team-card", { transformOrigin: "bottom right" });
tl.from(
  ".team-card",
  {
    rotation: -45,
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  },
  "0.4"
);

tl.from(
  ".header-text p",
  {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "back.out(2.7)",
  },
  "0"
);

// Set pivot points
gsap.set(".rectangel .rec1", { transformOrigin: "top left" });
gsap.set(".rectangel .rec2", { transformOrigin: "bottom right" });

tl.from(
  ".rectangel .rec1",
  {
    rotation: -45,
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  },
  "0"
);

tl.from(
  ".rectangel .rec2",
  {
    rotation: -45,
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  },
  "0.2"
);

tl.from(
  [".zigzag span", ".zigzag2 span", ".zigzag3 span"],
  {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.9)",
  },
  "-0.2"
);

tl.from(
  ".btn-group button",
  {
    scale: 1.2,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "back.out(3.7)",
  },
  "0.4"
);

tl.from(
  ".small-contaner .circle",
  {
    scale: 1.2,
    opacity: 0,
    duration: 1,
    // delay: 0.2,
    stagger: 0.22,
    ease: "back.out(3.7)",
  },
  "0.2"
);
gsap.from(".right-panel", {
  scale: 0.6, // start smaller
  opacity: 0, // start transparent
  duration: 1, // animation time
  ease: "back.out(1.5)", // pop effect
});

// second section

gsap.utils.toArray(".reveal-text").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".firstcard1, .firstcard2, .firstcard3").forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 75%",
      toggleActions: "play none none reverse",
      onEnter: () => {
        // Animate overlay content after card appears
        gsap.to(".firstcard1 .overlay-content", {
          opacity: 1,
          y: 0,
          delay: 0.3, // wait for the card to animate first
          duration: 0.8,
          ease: "power2.out",
        });
      },
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "back.out(1.7)",
  });
});

// third section
gsap.to(".scroll-text", {
  rotateX: 20,
  // backgroundColor:red,
  ease: "none",
  scrollTrigger: {
    trigger: ".scrolling-banner",
    start: "top bottom",
    end: "bottom top",
    // markers:true,
    scrub: true, // smoothly animate on scroll
  },
});

// last card
gsap.to(".eco-card", {
  scrollTrigger: {
    trigger: ".eco-card",
    start: "top 80%", // when eco-card is 80% from top of viewport
    toggleActions: "play none none none",
    // markers: true,
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "back.out(1.7)",
});
