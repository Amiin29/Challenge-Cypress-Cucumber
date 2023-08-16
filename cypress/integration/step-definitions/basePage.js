
const { Given, Then } = require('cypress-cucumber-preprocessor/steps');
import * as locatorsFrom from './locators/locatorsForm';

  Given('I am on the base page', () => {
    cy.fixture('Config').then((Config)=>{
      cy.visit(Config.MainURL)
    })
  });

  Then('I should see the Name field', () => {
    cy.get(locatorsFrom.Name).should('be.visible');
  });

  Then('I should see the Email field', () => {
    cy.get(locatorsFrom.ContactEmail).should('be.visible');    
  });

  Then('I should see the Phone field', () => {
    cy.get(locatorsFrom.ContactPhone).should('be.visible');
  });

  Then('I should see the Subject field', () => {
    cy.get(locatorsFrom.ContactSubject).should('be.visible');
  });

  Then('I should see the Message field', () => {
    cy.get(locatorsFrom.ContactDescription).should('be.visible');
  });

  When('I click the Submit button without filling anything', () => {
    cy.get(locatorsFrom.submitContact).click();
  });
    
  Then('I should see the {string} error message', (errorMessage) => {
    cy.get('p').should('contain', 'Subject may not be blank').invoke('text').then((text) => {
      //------------------------------------------------------------------
      // Now you can work with the extracted text content
      // For example, you can perform assertions on the text
      expect(text).to.include(errorMessage);
      // You can also log the extracted text to the Cypress command log
    });
  });
