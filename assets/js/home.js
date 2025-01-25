const scrollOptions = {
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    scroller: "#main",
  };
  
  gsap.from("#home .home-text h1", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      ...scrollOptions,
      trigger: "#home",
    },
  });
  
  gsap.from("#home .home-image img", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      ...scrollOptions,
      trigger: "#home",
    },
  });
  