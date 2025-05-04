// JavaScript to toggle the active class for the menu button and navbar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
});






  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const targets = document.querySelectorAll(
      "h1, h2, h4, a, p, .home__container, .about__container, .gallery__grid, .gallery__card, .course__container, img, form, .footer__grid__card, .footer__bottom"
    );

    targets.forEach(el => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
  });