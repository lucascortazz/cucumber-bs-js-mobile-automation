
Feature: Example Test on BrowserStack

  Scenario: Open Google on Chrome in BrowserStack
    Given I open the Google homepage
    Then the title should contain "Google"
