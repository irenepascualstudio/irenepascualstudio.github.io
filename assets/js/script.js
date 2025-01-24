//! LocomotiveScroll and ScrollTrigger
const locomotiveScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-locomotive-scroll]"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "[data-locomotive-scroll]" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("[data-locomotive-scroll]", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("[data-locomotive-scroll]").style.transform
      ? "transform"
      : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
locomotiveScrollTrigger();

//! Cursor
const customCursor = () => {
  var cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;
    cursor.style.opacity = 1; // Set opacity to 0 when the mouse leaves the main element
  });
  window.addEventListener("mouseout", () => {
    cursor.style.opacity = 0; // Set opacity to 0 when the mouse leaves the main element
  });
};
customCursor();

//! GSAP
const tl = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: ".section_1 h1",
    scroller: "#main",
    start: "top 15%",
    end: "top 0%",
    scrub: 3
  }
});

tl.to(".section_1 h1:nth-child(1)", { x: -100 }, "anim");
tl.to(".section_1 h1:nth-child(2)", { x: 100 }, "anim");
tl.to(".section_1 video", { width: "100%" }, "anim");
tl.to("#main", {
  backgroundColor: "#fdfaff",
  scrollTrigger: {
    // markers: true,
    trigger: ".section_2",
    scroller: "#main",
    start: "top 550px",
    end: "top 650px"
  }
});
tl.to(".section_2 h1, .section_2 h3", { color: "#0e0c0c" });