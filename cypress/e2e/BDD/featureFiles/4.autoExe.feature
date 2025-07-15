Feature:  Verifu new user login in automation exercise

    Scenario: Verify creating valid user
    Given I navigate to url
    # And I click on signuplogin button
    Then I fill name and email for new user sign up
    And I fill all information and click on create account button
    Then I verify for account created successfully
    Then I verify login for new user

