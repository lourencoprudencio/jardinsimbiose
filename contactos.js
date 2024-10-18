// Wait for the DOM content to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() { 
    console.log('DOM fully loaded and parsed'); // Log when the DOM is fully loaded

    const header = document.querySelector('header.main-header'); // Select the header element with the class 'main-header'
    console.log('Header element selected:', header); // Log the selected header element

    const menuToggle = document.getElementById('menuToggle'); // Select the menu toggle button by its ID 'menuToggle'
    console.log('Menu toggle element selected:', menuToggle); // Log the selected menu toggle button

    const navBar = document.getElementById('navBar'); // Select the navigation bar by its ID 'navBar'
    console.log('Navigation bar element selected:', navBar); // Log the selected navigation bar

    // Toggle the navigation menu on click
    menuToggle.addEventListener('click', function() { 
        navBar.classList.toggle('show'); // Toggle the 'show' class on the navigation bar (open/close menu)
        console.log('Menu toggle clicked. Navigation bar class "show" is now:', navBar.classList.contains('show')); // Log if 'show' class is present
    });

    // Change header background color on scroll
    window.addEventListener('scroll', function() {
        console.log('Scroll event detected. Current scroll position:', window.scrollY); // Log the current scroll position

        if (window.scrollY > 50) { // If the page is scrolled more than 50 pixels
            header.classList.add('scrolled'); // Add the 'scrolled' class to the header to change its style
            console.log('Scrolled more than 50px. "scrolled" class added to header.'); // Log that the 'scrolled' class was added
        } else { // If the scroll is less than or equal to 50 pixels
            header.classList.remove('scrolled'); // Remove the 'scrolled' class from the header
            console.log('Scrolled less than 50px. "scrolled" class removed from header.'); // Log that the 'scrolled' class was removed
        }
    });
});