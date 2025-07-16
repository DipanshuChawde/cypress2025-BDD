Feature: Verify green cart web page to add multilple product

@reg @smoke
    Scenario Outline: I verify for adding multiple products
        Given I navigate to url "https://rahulshettyacademy.com/seleniumPractise/#/"
        When I type on search box "<searchBox>"
        And I add product "<ProductsToAdd>" to cart
        When I proceed to check out
        Then I verify products "<ProductsToAdd>" and place order
        Then I verify order placed

        Examples:
            | searchBox | ProductsToAdd   |
            | ca        | Carrot,Capsicum |
            # | al        | Brinjal,Almonds |
            # | ap        | Apple           |