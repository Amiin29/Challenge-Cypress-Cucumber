Feature: Validating Input Fields and Submit Button

  Scenario: Submitting a valid contact form
    Given the user is on the contact page
    When they fill in the form with valid details
    And they click the submit button
    Then they should see a success message

  Scenario: Submitting a form with missing email
    Given the user is on the contact page
    When they fill in the form with missing email
    And they click the submit button
    Then they should see an error about the missing email

  # Add more scenarios as needed
