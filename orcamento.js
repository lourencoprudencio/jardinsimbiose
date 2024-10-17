// Wait for the DOM content to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() { // Adds an event listener that waits for the DOM to be fully loaded
    const form = document.getElementById('orcamentoForm'); // Selects the form element by its ID (corrected)
    const menuToggle = document.getElementById('menuToggle'); // Selects the menu toggle button by its ID
    const navBar = document.getElementById('navBar'); // Selects the navigation bar by its ID

    // Initialize EmailJS after the EmailJS SDK is loaded
    emailjs.init('4B0AHRf-GpRm-Pl8m'); // Initializes EmailJS with the specified User ID (replace with your own User ID)
    console.log('EmailJS initialized'); // Logs a message indicating that EmailJS has been initialized

    // Check if the form is found
    console.log('Form Element:', form); // Logs the form element to verify if it has been found

    // Toggle menu visibility
    menuToggle.addEventListener('click', function() { // Adds a click event listener to the menu toggle button
        navBar.classList.toggle('show'); // Adds or removes the 'show' class to display or hide the menu
        console.log('Menu toggled:', navBar.classList.contains('show')); // Logs the state of the menu (open/closed)
    });

    // Close the menu when a link is clicked
    navBar.querySelectorAll('a').forEach(link => { // Selects all anchor tags within the navigation bar
        link.addEventListener('click', function() { // Adds a click event listener to each link
            navBar.classList.remove('show'); // Removes the 'show' class to hide the menu
            console.log('Menu closed on link click'); // Logs a message indicating the menu has been closed
        });
    });

    // Handle form submission
    form.addEventListener('submit', function(event) { // Adds a submit event listener to the form
        event.preventDefault(); // Prevents the normal submission of the form
        console.log('Form submitted'); // Logs a message indicating that the form has been submitted

        // Get the form data
        const formData = new FormData(form); // Collects the form data into a FormData object
        console.log('Form Data:', Array.from(formData.entries())); // Logs the form data entries for verification

        // Send the form through EmailJS
        emailjs.sendForm('service_3bxg4bc', 'template_2tgd85r', form) // Sends the form using EmailJS
            .then(function(response) { // Handles the response from EmailJS if the request is successful
                console.log('SUCCESS!', response.status, response.text); // Logs success status and response text
                alert('Orçamento enviado com sucesso!'); // Displays a success message
                form.reset(); // Resets the form after submission
                console.log('Form reset'); // Logs a message indicating the form has been reset
            }, function(error) { // Handles errors if the request fails
                console.error('FAILED...', error); // Logs an error message
                alert('Erro ao enviar o orçamento: ' + JSON.stringify(error)); // Displays an error message with the error details
            });
    });
});