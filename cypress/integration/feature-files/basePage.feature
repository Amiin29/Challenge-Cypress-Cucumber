Feature: Checking base page elements and form validation

  Scenario: Verify visibility of elements
    Given I am on the base page
    Then I should see the Name field
    And I should see the Email field
    And I should see the Phone field
    And I should see the Subject field
    And I should see the Message field

  Scenario: Verify error message for empty Subject
    Given I am on the base page
    When I click the Submit button without filling anything
    Then I should see the "Subject may not be blank" error message
