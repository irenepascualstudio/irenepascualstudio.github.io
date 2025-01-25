let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      nav.style.transform = currentScroll > lastScrollTop ? 'translateY(-100%)' : 'translateY(0)';
      lastScrollTop = Math.max(0, currentScroll); // Evita valores negativos.

      ticking = false;
    });
    ticking = true;
  }
});
