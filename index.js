document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.icon-frame');
    const menuLinks = document.querySelector('.menu-links');
    
    // Toggle the visibility of the menu when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });
});
