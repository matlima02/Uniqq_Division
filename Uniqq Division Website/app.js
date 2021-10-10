let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "60%",
    scrub: 1,
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1,
  },
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1,
  },
});

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "285%",
    end: "300%",
    scrub: 1,
  },
});

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "285%",
    end: "300%",
    scrub: 1,
  },
});

tl.fromTo(".sliding-text", { y: 0 }, { y: -400 });
tl2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50%" }
);

tl6.fromTo(
  ".intro1",
  { top: "330%", opacity: 0 },
  { bottom: "220%", opacity: 1 }
);

tl6.fromTo(
  ".initials",
  { bottom: "300%", opacity: 0.5 },
  { bottom: "280%", opacity: 1 }
);

tl5.fromTo(".container", { top: "7%" }, { bottom: "80%", opacity: 0 });

tl4.fromTo(
  ".square",
  { left: "70%" },
  { left: "90%", opacity: 0, rotation: 90 }
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});
