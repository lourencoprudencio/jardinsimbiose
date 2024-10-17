// Wait for the DOM content to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() { // Adds an event listener that waits for the DOM to be fully loaded
    const header = document.querySelector('header.main-header'); // Selects the header element with the class 'main-header'
    const menuToggle = document.getElementById('menuToggle'); // Selects the menu toggle button by its ID
    const navBar = document.getElementById('navBar'); // Selects the navigation bar by its ID

    // Toggle the navigation menu on click
    menuToggle.addEventListener('click', function() { // Adds a click event listener to the menu toggle button
        navBar.classList.toggle('show'); // Toggles the 'show' class on the navigation bar, showing or hiding it
    });

    // Change header background color on scroll
    window.addEventListener('scroll', function() { // Adds a scroll event listener to the window
        if (window.scrollY > 50) { // Checks if the vertical scroll position is greater than 50 pixels
            header.classList.add('scrolled'); // Adds the 'scrolled' class to the header if scrolled down
        } else {
            header.classList.remove('scrolled'); // Removes the 'scrolled' class from the header if scrolled back up
        }
    });
});