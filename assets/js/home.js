// Actualización para la sección #home si es necesario
const homeAnimations = () => {
    gsap.from("#home .home-text h1", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        scroller: "#main",
      },
    });
  
    gsap.from("#home .home-image img", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        scroller: "#main",
      },
    });
  };
  
  // Ejecutar animaciones de la sección home
  homeAnimations();