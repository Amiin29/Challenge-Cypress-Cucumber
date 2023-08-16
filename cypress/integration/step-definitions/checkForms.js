import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import * as locatorsFrom from './locators/locatorsForm';
import config from '../../config/config.js'

const conf = new config()
Given('the user is on the contact page', () => {
  cy.visit(conf.GetURL());

});

When('they fill in the form with valid details', () => {
    cy.get(locatorsFrom.Name).type('John Doe');
    cy.get(locatorsFrom.ContactEmail).type('john@example.com');
    cy.get(locatorsFrom.ContactPhone).type('12345678901');
    cy.get(locatorsFrom.ContactSubject).type('Testing');
    cy.get(locatorsFrom.ContactDescription).type('This is a test message');

});

When('they fill in the form with missing email', () => {
  // Fill in the form fields except for email
  cy.get(locatorsFrom.Name).type('John Doe');
  cy.get(locatorsFrom.ContactPhone).type('1234567890');
  cy.get(locatorsFrom.ContactSubject).type('Testing');
  cy.get(locatorsFrom.ContactDescription).type('This is a test message');
});

When('they click the submit button', () => {
    cy.get(locatorsFrom.submitContact).click();
});

Then('they should see a success message', () => {
  // Verify that a success message is displayed
  //cy.contains('Form submitted successfully');
});

Then('they should see an error about the missing email', () => {
  // Verify that an error message about missing email is displayed
  //cy.contains('Phone must be between 11 and 21 characters.Email may not be blank');
});