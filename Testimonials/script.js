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

