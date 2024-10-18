// Defining the tips with their respective images and instructions
const dicas = {
    1: { 
        img: 'dica1.jpg', // Image for tip 1
        instructions: 'Pesquise sobre plantas que se adaptam ao seu clima e solo. Plante na altura certa para melhores resultados.' // Instructions for tip 1
    },
    2: { 
        img: 'dica2.jpg', // Image for tip 2
        instructions: 'Certifique-se de que o solo é bem drenado e rico em nutrientes. Utilize compostagem para melhorar a qualidade do solo.' // Instructions for tip 2
    },
    3: { 
        img: 'dica3.jpg', // Image for tip 3
        instructions: 'Regue as suas plantas de manhã ou à tarde. Evite regar ao meio-dia, pois a evaporação pode ser elevada.' // Instructions for tip 3
    },
    4: { 
        img: 'dica4.jpg', // Image for tip 4
        instructions: 'Utilize fertilizantes orgânicos e siga as instruções de aplicação. O excesso de adubo pode ser prejudicial.' // Instructions for tip 4
    },
    5: { 
        img: 'dica5.jpg', // Image for tip 5
        instructions: 'Monitore as suas plantas e aplique métodos naturais de controlo de pragas, como insetos benéficos.' // Instructions for tip 5
    },
    6: { 
        img: 'dica6.jpg', // Image for tip 6
        instructions: 'Podar regularmente ajuda a promover o crescimento saudável e a evitar doenças. Remova folhas secas e ramos danificados.' // Instructions for tip 6
    },
    7: { 
        img: 'dica7.jpg', // Image for tip 7
        instructions: 'Plante espécies que beneficiem mutuamente. Por exemplo, o manjericão pode ajudar a repelir pragas do tomateiro.' // Instructions for tip 7
    },
    8: { 
        img: 'dica8.jpg', // Image for tip 8
        instructions: 'Utilize práticas sustentáveis, como a recolha de água da chuva e o uso de plantas nativas para poupar recursos.' // Instructions for tip 8
    }
};

// Selecting elements
const dicasList = document.querySelector('.dicas-list'); // Selects the list of tips
const dicaImg = document.getElementById('dicaImg'); // Selects the image element to display the tip image
const dicaInstructions = document.getElementById('dicaInstructions'); // Selects the paragraph element to display the tip instructions

// Click event to show tip details
dicasList.addEventListener('click', (event) => { // Adds an event listener for when an item in the tips list is clicked
    const dicaIndex = event.target.getAttribute('data-dica'); // Gets the 'data-dica' attribute from the clicked element
    if (dicaIndex && dicas[dicaIndex]) { // Checks if the clicked element has a valid 'data-dica' attribute and if a corresponding tip exists
        dicaImg.src = dicas[dicaIndex].img; // Sets the image source to the corresponding tip's image
        dicaInstructions.textContent = dicas[dicaIndex].instructions; // Sets the text content to the corresponding tip's instructions
        dicaImg.style.display = 'block'; // Displays the image element
        dicaInstructions.style.display = 'block'; // Displays the instructions element
    }
});

// Navigation menu behavior
const menuToggle = document.getElementById('menuToggle'); // Selects the menu toggle button
const navBar = document.getElementById('navBar'); // Selects the navigation bar

menuToggle.addEventListener('click', () => { // Adds a click event listener to the menu toggle button
    navBar.classList.toggle('show'); // Toggles the 'show' class on the navigation bar to open or close the menu
});

// Change header color on scroll
window.addEventListener('scroll', () => { // Adds a scroll event listener to the window
    const header = document.getElementById('mainHeader'); // Selects the main header
    if (window.scrollY > 50) { // Checks if the scroll position is greater than 50px
        header.classList.add('scrolled'); // Adds the 'scrolled' class to the header to change its color
    } else { 
        header.classList.remove('scrolled'); // Removes the 'scrolled' class if the scroll position is less than 50px
    }
});
