/* 
 * Controls the mobile navigation menu so users can
* open and close the links with the menu button.
*/

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
       if (navLinks.classList.contains("nav-open")) {
            navLinks.classList.remove('nav-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            navLinks.classList.add('nav-open');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    });
}

/*
 * Allows users to switch between the regular theme
 * and dark theme for a more comfortable viewing experience.
 */

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    // Set the button label based on the current theme.
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }

    // Switch themes when the button is clicked.
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    });
}