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