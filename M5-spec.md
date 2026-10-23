PART 1: Original Specification


FEATURE 1: Navigation Toggle


Trigger
- User clicks the menu mode button.


Expected DOM Change
- The navigation menu shows up or closes.


Edge Cases
1. The user clicks the button twice.
2. The user resizes the screen.
3. The button is missing.


PSEUDOCODE


1. WHEN the menu button is clicked:
1.1. IF the menu has the "nav-open" class THEN
  1.1.1. REMOVE the "nav-open" class from the menu
  1.1.2. SET the button's "aria-expanded" attribute to "false".
1.2 ELSE
1.2.1. ADD the "nav-open" class to the navigation menu.
  1.2.2. SET the button's "aria-expanded" attribute to "true".
1.3. END IF


FEATURE 2: Dark Mode


Trigger
1. The user clicks the dark mode button.


Expected DOM Change
1. The <body> element toggles the "dark-theme" class.
2. The button's text changes to reflect the current mode.


Edge Cases
1. The user repeatedly clicks the button.
2. The dark mode button is nowhere in sight.
3. The page is already in dark mode.


PSEUDOCODE


1. WHEN the dark mode button is clicked:
  1.1. IF the <body> has the "dark-theme" class THEN
   1.1.1. REMOVE the "dark-theme" class from the <body>.
   1.1.2. SET the button to "Dark Mode".
  1.2. ELSE
   1.2.1. ADD the "dark-theme" class to the <body>.
   1.2.2. SET the button text to "Light Mode".
  1.3. END IF


FEATURE 3: Dynamic Content From an Array


Trigger
1. The page finishes loading.


Expected DOM Change
1. The items are displayed using information from an array of objects.


Edge Cases
1. The content container is missing.
2. The array is empty.
3. An item is missing information.


PSEUDOCODE


1. CREATE an array that contains items with a title and description
2. FIND the container where the items will display.
3. IF the container exists THEN
  3.1. IF  the array is empty THEN
   3.1.1. DISPLAY a message that says there are no items.
  3.2. ELSE
   3.2.1. USE an array method to go through each item.
   3.2.2. FOR EACH item in the array:
    3.2.2.1. CREATE an element for the item.
    3.2.2.2. ADD the item's title, description, and image to the element.
    3.2.2.3. APPEND the element to the container.
  3.2.3. END FOR
 3.3. END IF
 4. END IF


 FEATURE 4: Contact Form Validation


 Trigger
 1. The user submits the contact form.


 Expected DOM Change
 1. Error messages appear directly beside invalid fields.
 2. If the entire form is valid, a success message displays.
 3. The form does not submit normally while the validation is being checked.


 Edge cases
 1. A field is empty.
 2. The email address has an invalid format.
 3. The user submits the form many times.
 4. A field is filled with spaces only.


 PSEUDOCODE


 1. WHEN the contact form is submitted:
   1.1. PREVENT the form's normal submission.
   1.2. CLEAR previous error messages.
   1.3. READ the name, email, and message values.
   1.4. REMOVE extra spaces from the beginning and end of each value.
   1.5. SET 'isvalid' to 'true'.
   1.6. IF the name is blank THEN
    1.6.1. DISPLAY an error beside the name field.
    1.6.2. SET 'isvalid' to 'false'.
   1.7. END IF
   1.8. IF the email is blank or invalid THEN
    1.8.1. DISPLAY an error beside the email field.
    1.8.2. SET 'isvalid' to 'false'.
   1.9. END IF
   1.10. IF the message is blank THEN
    1.10.1. DISPLAY an error beside the message field.
    1.10.2. SET 'isValid' to 'false'.
   1.11. END IF
   1.12. IF 'isvalid' is 'true' THEN
    1.12.1. DISPLAY a message saying the form is valid.
   1.13. END IF    

//////////////////////////////////////////////////////////////////////////////////////

PART 2: Revised Specification

FEATURE 1: Navigation Toggle 

Trigger
- User clicks the menu toggle button.

Expected DOM Change
- The navigation menu shows up or closes.

Edge Cases
1. The user clicks the button twice.
2. The user resizes the screen, and the responsive CSS adjusts the navigation menu's layout.
3. The button is missing.

PSEUDOCODE

1. FIND the menu button and navigation menu.
2. IF the menu button and navigation menu exist THEN
  2.1. WHEN the menu button is clicked:
  2.1.1. IF the menu has the "nav-open" class THEN 
   - REMOVE the "nav-open" class.
   - SET "aria-expanded" to "false".
  2.1.2. ELSE
   - ADD the "nav-open" class.
   - SET "aria-expanded" to "true".
   2.1.3. END IF
3. END IF


FEATURE 2: Dark Mode

Trigger
1. The user clicks the dark mode button. 

Expected DOM Change 
1. The <body> element toggles the "dark-theme" class.
2. The button's text changes to reflect the current mode.

Edge Cases
1. The user repeatedly clicks the button.
2. The dark mode button is nowhere in sight. 
3. The page is already in dark mode. 

PSEUDOCODE

1. FIND the dark mode button.
2. IF the dark mode button exists THEN
  2.1. IF the <body> has the "dark-theme" class THEN
  2.1.1. SET the button text to "Light Mode".
  2.2. ELSE 
  2.2.1. SET the button text to "Dark Mode". 
  2.3. END IF
  2.4. WHEN the dark mode button is clicked:
  2.4.1. IF the <body> has the "dark-theme" class THEN
  - REMOVE the "dark-theme" class from the <body>.
  - SET the button text to "Dark Mode".
  2.4.2. ELSE
  - ADD the "dark-theme" class to the <body>.
  - SET the button text to "Light Mode".
  2.4.3. END IF
  2.5. END IF

FEATURE 3: Dynamic Content From an Array

Trigger
1. The page finishes loading.

Expected DOM Change
1. The items are displayed using information from an array of objects. 

Edge Cases
1. The content container is missing.
2. The array is empty.
3. An item is missing information. 

PSEUDOCODE

1. CREATE an array of objects, each containing a title, description, and image.
2. FIND the container where the items will display.
3. IF the container exists THEN:
3.1. IF the array is empty THEN:
3.1.1. DISPLAY a message saying there are no items.
3.2. ELSE:
3.2.1. FOR EACH item in the array using forEach():
3.2.1.1. IF the item has a title, description, and image THEN:
- CREATE an element for the item.
- ADD the item's title, description, and image to the element.
- APPEND the element to the container.
3.2.1.2. ELSE:
- SKIP the incomplete item.
3.2.1.3. END IF
3.2.2. END FOR
3.3. END IF
4. END IF

 FEATURE 4: Contact Form Validation

 Trigger
 1. The user submits the contact form. 

 Expected DOM Change 
 1. Error messages appear directly beside invalid fields.
 2. If the entire form is valid, a success message displays.
 3. The form does not submit normally while the validation is being checked.

 Edge cases
 1. A field is empty.
 2. The email address has an invalid format.
 3. The user submits the form many times.
 4. A field is filled with spaces only. 

 PSEUDOCODE

 1. WHEN the contact form is submitted:
   1.1. PREVENT the form's normal submission.
   1.2. CLEAR previous error messages.
   1.3. CLEAR the previous success message.
   1.4. CONTINUE validating every new submission independently; do not leave an old success message visible during a new validation attempt.
   1.5. READ the name, email, phone, subject, and message values.
   1.6. TRIM whitespace from the beginning and end of each value
   1.7. SET 'isValid' to 'true'. 
   1.8. IF the name is blank THEN
    1.8.1. DISPLAY an error beside the name field.
    1.8.2. SET 'isValid' to 'false'.
   1.8.3. END IF 
   1.9. IF the email field is blank or has an invalid format THEN
    1.9.1. DISPLAY an error beside the email field. 
    1.9.2. SET 'isValid' to 'false'.
   1.9.3. END IF
   1.10. IF the phone field is blank THEN
    1.10.1. DISPLAY an error beside the phone field.
    1.10.2. SET 'isValid' to 'false'. 
   1.10.3. END IF 

   1.11. IF the subject field is blank THEN
    1.11.1. DISPLAY an error beside the subject field.
    1.11.2. SET 'isValid' to 'false'.
    1.11.3. END IF
   1.12. IF the message field is blank THEN
    1.12.1. DISPLAY an error beside the message field.
    1.12.2. SET 'isValid' to 'false'. 
   1.12.3. END IF 
   1.13. IF 'isValid' is 'true' THEN
    1.13.1. DISPLAY a message saying the form is valid.
    1.13.2. CLEAR the form fields.
   1.14. END IF    



  




