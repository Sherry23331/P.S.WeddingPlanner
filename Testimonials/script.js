// Get the back button element
const backButton = document.querySelector('.back-button');

// Add click event listener
backButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior
    
    // Using relative path instead of file:/// URL
    window.location.href = './Testimonials.html';
    
    // Alternatively, if the Testimonials.html is in the parent directory:
    // window.location.href = '../Testimonials.html';
});


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
