// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the main header element by its ID
    const mainHeader = document.getElementById('mainHeader');

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Check if the vertical scroll position is greater than 50 pixels
        if (window.scrollY > 50) {
            // If so, add the 'scrolled' class to the main header
            mainHeader.classList.add('scrolled');
        } else {
            // Otherwise, remove the 'scrolled' class from the main header
            mainHeader.classList.remove('scrolled');
        }
    });
});