M6 Project Structure and Cleanup

///Before///

The project includes four HTML pages, a shared CSS stylesheet, JavaScript functionality, and visual assets.

///After///

Files are organized by their role in the project

1. index.html, about.html, skills.html, and contact.html contain the website's page structure.

2. css/style.css contains shared styling, responsive layouts, and theme styles.

3. js/theme-init.js restores the saved theme before the page fully loads.

4. js/script.js manages navigation, theme switching, user persistence, dynamic portfolio content, contact form validation, and last-visit recording.

5. assets/ contains the portfolio images.

6. M6-structure.md documents the organization and cleanup.

///Cleanup and Naming////

1. Removed hardcoded portfolio articles from index.html because the items are generated from the portfolioItems array in js/script.js.

2. Separated early theme initialization from the main JavaScript file.

3. Used consistent names for settings and interface elements, including portfolioSettings, themeToggle, and visitorNameInput.

4. Corrected the email-validation regular expression.

5. Kept JavaScript in external files rather than using inline event handlers.