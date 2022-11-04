CreditCard is an application that simulates a credit card checkout form. 

The user is prompted to fill in the credit card number, their name, expiration date, and CVV. At the top of the form, the user sees a preview of their card showing the visa emblem, the chip, card number, cardholder name, and expiration date. The preview doesn't show the middle 8 digits and instead obscures them. The credit card also shows placeholder values if the user hasn't provided input yet.

Classes:
    CreditForm: This class contains the component that holds and handles the form's functionality and fields. The form is made using material ui components

    CreditCard: This class handles the functionality of the sample credit card including the placeholder and the adding of the actual values of the form. This class is a child of the CreditForm

    style.css: Contains all of the additional styling for the application

Packages Used:
    Material UI used most of the components

Future Additions:
    - More Validation:
        - requiring fields
        - requiring 3 numbers for CVV and 16 numbers for the credit card
    - handling of other credit cards, not just visa
    - Posting to a server
