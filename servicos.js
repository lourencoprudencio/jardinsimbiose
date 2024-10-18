// Wait for the entire DOM content to be loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Select the main header element using its class
    const header = document.querySelector('header.main-header');
    
    // Get the menu toggle button using its ID
    const menuToggle = document.getElementById('menuToggle');
    
    // Get the navigation bar element using its ID
    const navBar = document.getElementById('navBar');
    
    // Select all navigation links within the navigation bar
    const navLinks = document.querySelectorAll('.nav-bar ul li a'); // Selects all menu links

    // Log to the console to verify that the DOM is fully loaded
    console.log("DOM fully loaded and parsed.");

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'show' class on the navigation bar to show/hide it
        navBar.classList.toggle('show');
        
        // Log the current state of the menu (open or closed)
        console.log("Menu toggled: ", navBar.classList.contains('show') ? "Open" : "Closed");
    });

    // For each navigation link, add a click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'show' class from the navigation bar to close the menu
            navBar.classList.remove('show'); // Removes the 'show' class to close the menu
            
            // Log the link text of the clicked link for debugging
            console.log("Menu closed by clicking the link: ", link.textContent);
        });
    });

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Check if the page has been scrolled more than 50 pixels
        if (window.scrollY > 50) {
            // Add the 'scrolled' class to the header for styling purposes
            header.classList.add('scrolled');
            
            // Log that the header has been adjusted with the 'scrolled' class added
            console.log("Header adjusted: 'scrolled' class added.");
        } else {
            // Remove the 'scrolled' class from the header when scrolled back to the top
            header.classList.remove('scrolled');
            
            // Log that the header has been adjusted with the 'scrolled' class removed
            console.log("Header adjusted: 'scrolled' class removed.");
        }
    });
});