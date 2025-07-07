Feature: Verify conact us page

    Scenario: SC1- verify contact us page with valid data
        Given I navigate to contact us page
        When I enter data for all input fields
        Then I click on submit button
        And I verify for validation message

    Scenario: SC2-verify contact us page with valid data
        Given I navigate to contact us page
        When I enter data for all input fields from data table
            | fn       | ln     | email              | msg             |
            | dipanshu | chawde | dipanshu@gmail.com | hi, how are you |

        Then I click on submit button
        And I verify for validation message