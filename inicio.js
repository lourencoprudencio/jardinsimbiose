// Wait for the DOM content to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header.main-header'); // Selects the header
    const logo = document.querySelector('.logo'); // Selects the logo
    const menuToggle = document.querySelector('.menu-toggle'); // Selects the menu toggle button
    const navBar = document.querySelector('.nav-bar'); // Selects the navigation bar

    // Toggle the navigation menu on click
    menuToggle.addEventListener('click', function() {
        navBar.classList.toggle('show'); // Toggles the 'show' class to open/close the navigation
    });

    // Change header background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Checks if scrolled more than 50 pixels
            header.classList.add('scrolled'); // Adds the 'scrolled' class to change header style
        } else {
            header.classList.remove('scrolled'); // Removes the 'scrolled' class when at the top
        }
    });
    
    // Logo hover effects
    logo.addEventListener('mouseover', function() {
        logo.classList.add('hover'); // Adds hover class to logo on mouse over
    });

    logo.addEventListener('mouseout', function() {
        logo.classList.remove('hover'); // Removes hover class from logo when mouse leaves
    });
});