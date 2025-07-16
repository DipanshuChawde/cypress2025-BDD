Feature: Verify conact us page

    Background: visit url
        Given I navigate to contact us page

@reg @sanity
    Scenario: SC1- verify contact us page with valid data
        # Given I navigate to contact us page
        When I enter data for all input fields
        Then I click on submit button
        And I verify for validation message

@smoke
    Scenario: SC2-verify contact us page with valid data
        # Given I navigate to contact us page
        When I enter data for all input fields from data table
            | fn       | ln     | email              | msg             |
            | dipanshu | chawde | dipanshu@gmail.com | hi, how are you |

        Then I click on submit button
        And I verify for validation message

@reg
    Scenario Outline: SC3-verify contact us page with valid data
        # Given I navigate to contact us page
        When I enter data for all input-fields for "<fn>" ,"<ln>","<email>","<msg>"
        Then I click on submit button
        And I verify for validation message
        Examples:
            | fn       | ln     | email              | msg             |
            | dipanshu | chawde | dipanshu@gmail.com | hi, how are you |
            | rucha    | gaware | rucha@gmail.com    | hello           |

@sanity
    Scenario Outline: SC4-verify contact us page with valid data
        # Given I navigate to contact us page
        When I enter data for all input-fields for --<fn> ,<ln>,"<email>","<msg>"
        Then I click on submit button
        And I verify for validation message
        Examples:
            | fn       | ln     | email              | msg            |
            | dipanshu | chawde | dipanshu@gmail.com | hi,how are you |
            | rucha    | gaware | rucha@gmail.com    | hello          |