// get navigation element
const navbar = document.getElementById("navbar");

// listen the scroll event
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled"); // add "scrolled" 
    } else {
        navbar.classList.remove("scrolled"); // remove "scrolled" 
    }
});

// got element for "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// put dropdown for hover listen
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.add('show'); //show
    });

    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.classList.remove('show'); //hide
    });
});

//fade in section
    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".fade-in-section");
  
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("is-visible");
                      observer.unobserve(entry.target); 
                  }
              });
          },
          {
              threshold: 0.1 // when enter 10% show
          }
      );
  
      sections.forEach(section => observer.observe(section));
  });
  
  