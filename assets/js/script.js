//! LocomotiveScroll and ScrollTrigger
const locomotiveScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-locomotive-scroll]"),
    smooth: true
  });

  // Sync Locomotive Scroll with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("[data-locomotive-scroll]", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("[data-locomotive-scroll]").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
locomotiveScrollTrigger();

//! Cursor customization
const customCursor = () => {
  const cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.opacity = 1;
  });

  window.addEventListener("mouseout", () => {
    cursor.style.opacity = 0;
  });
};
customCursor();

//! GSAP Animations
const animateSections = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_1 h1",
      scroller: "#main",
      start: "top 15%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl.to(".section_1 h1:nth-child(1)", { x: -100 }, "anim")
    .to(".section_1 h1:nth-child(2)", { x: 100 }, "anim")
    .to(".section_1 video", { width: "100%" }, "anim")
    .to("#main", {
      backgroundColor: "#fdfaff",
      scrollTrigger: {
        trigger: ".section_2",
        scroller: "#main",
        start: "top 550px",
        end: "top 650px",
      },
    })
    .to(".section_2 h1, .section_2 h3", { color: "#0e0c0c" });
};
animateSections();

//! Hide/Show menu based on scroll
const handleMenuVisibility = () => {
  const nav = document.querySelector("header nav");
  let lastScrollTop = 0;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        nav.style.transform = currentScroll > lastScrollTop ? "translateY(-100%)" : "translateY(0)";
        lastScrollTop = Math.max(0, currentScroll);
        ticking = false;
      });
      ticking = true;
    }
  });
};
handleMenuVisibility();
