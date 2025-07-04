Feature: creating first bdd cucumber file

    Scenario: Login Page Testing of OHRM with valid data
        Given I navigate to OHRM url
        When I enter user name and password
        And I click on Login button
        Then I check for login page and user
