gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to(".ball-1", {
    x: 500,
    scrollTrigger: {
      trigger: ".ball-1",
      start: "top 50%",
    },
  });

  gsap.from(".ball-2", {
    x: 300,
    scale: 2,
    duration: 2,
    scrollTrigger: {
      trigger: ".ball-2",
      start: "top 50%",
      end: "bottom 100%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".ball-3", {
    x: 500,
    stagger: 0.5,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
      start: "top center",
      end: "+=700px",
      trigger: ".ball-3",
      scrub: true,
      pin: document.querySelector(".ball-3").parentElement,
    },
  });

  ScrollTrigger.create({
    trigger: ".ball-4",
    start: "top 50%",
    toggleClass: "active",
    once: true,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball-5",
      start: "top 50%",
      end: "+=600px",
      scrub: true,
      markers: true,
      pin: document.querySelector(".ball-5").parentElement,
    },
  });

  tl.to(".ball-5", {
    x: 500,
  })
    .to(".ball-5", {
      y: 100,
    })
    .to(".ball-5", {
      scale: 3,
    });
});
