document.addEventListener('DOMContentLoaded', function() {
    const mainHeader = document.getElementById('mainHeader');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });
});