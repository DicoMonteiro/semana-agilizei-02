// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0h9CvHWYdGE7QEQu30dhvdkFmUq7IYfk1qexa7Q%2BIKakCmVS59HzwdVaubv4m6Sq8n7MYZg3Pr6fmEudR677eH%2B1iwYZomASG3dIzTMYB%2BOGrYVvKjaxy4pabuGcoEp7ySjL6CK0svI6C2Q0vDwUa80csm7QckUZY5p4QT3ac%2FU4elkRXenXnKGbUtEcC7v4WiawkFsxvpMENtd%2BCRLVgeRj6i9fGmeQsg96xdxONObsJ3Rhrms8oBUb1ny6X3Lg%2BVYT%2FkbogHTV6fHgSEB8bsxRnsNWZOtJ0p%2Fi%2F2vg%2F5UnFWbDnN6fs3YL0ejRwhhNjkGKA5PrWm1IPomGKyiKQM%2FwzqjJ56T02VYWVHZ3h2KimnRxzkEiqUuO%2BtltVpDOEkmVBZZu1zCEht2UyN25h5g%3D000314' 
    )
})