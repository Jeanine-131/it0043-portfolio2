/* 
 * Controls the mobile navigation menu so users can
* open and close the links with the menu button.
*/

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    //  Provides quick access to mobile navigation
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

    // Allows users to customize the page theme for maximum viewing comfort.
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    });
}

/*
 * Displays portfolio content from an array so items can
 * be added or changed without hardcoding each item in HTML.
 */

const portfolioItems = [
    {
        title: 'Creating Visuals',
        description: 'I love to turn ideas into visual concepts! (@ericathw_)',
        image: 'assets/visuals.jpg'
    },
    {
        title: 'Learning and Improving',
        description: 'I am always eager to learn new techniques and improve my skills! (@ericathw_)',
        image: 'assets/visuals2.jpg'
    }
];

const contentContainer = document.querySelector('#dynamic-content');

if (contentContainer) {
    if (portfolioItems.length === 0) {
        contentContainer.textContent = 'No portfolio items available.';
    } else {
        // Renders complete portfolio items and skips unresolved entries.
        portfolioItems.forEach(function (item) {
            if (item.title && item.description && item.image) {
                const article = document.createElement('article');
                const heading = document.createElement('h3');
                const paragraph = document.createElement('p');
                const image = document.createElement('img');

                heading.textContent = item.title;
                paragraph.textContent = item.description;
                image.src = item.image;
                image.alt = item.title;

                article.appendChild(heading);
                article.appendChild(paragraph);
                article.appendChild(image);

                contentContainer.appendChild(article);
            }
        });
    }
}
/*
 * Validates the contact form and displays an error
 * beside each field that needs to be corrected.
 */

const contactForm = document.querySelector('#contact-form');

// Displays a field-specific error and marks the field invalid.
function showFieldError(field, message) {
    const errorElement = document.querySelector(`#${field.id}-error`);

    errorElement.textContent = message;
    field.setAttribute('aria-invalid', 'true');
}

// Validates the form whenever the user submits it.
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const successMessage = document.querySelector('#form-success');

    const fields = [name, email, phone, subject, message];
    let isValid = true;

    // Clear previous errors and success messages.
    // Each field's error element uses the field ID followed by "-error".
    fields.forEach(function (field) {
        document.querySelector(`#${field.id}-error`).textContent = '';
        field.setAttribute('aria-invalid', 'false');
    });

    successMessage.hidden = true;

    // Read the values and remove surrounding whitespace.
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    // Validate the name.
    if (nameValue === '') {
        showFieldError(name, 'Please enter your name.');
        isValid = false;
    }

    // Validate the email.
    if (emailValue === '') {
        showFieldError(email, 'Please enter your email address.');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        showFieldError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate the phone number.
    if (phoneValue === '') {
        showFieldError(phone, 'Please enter your phone number.');
        isValid = false;
    }

    // Validate the subject.
    if (subjectValue === '') {
        showFieldError(subject, 'Please enter a subject.');
        isValid = false;
    }

    // Validate the message.
    if (messageValue === '') {
        showFieldError(message, 'Please enter your message.');
        isValid = false;
    }

    // Show success only when every field is valid.
    if (isValid) {
        successMessage.hidden = false;

        // Reset the form inputs after once validation passes. 
        contactForm.reset();
    }
}

// Add the submit listener only if the form exists on this page.
if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}
