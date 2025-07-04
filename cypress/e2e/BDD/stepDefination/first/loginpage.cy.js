///<reference types = "cypress" />

Given("I navigate to OHRM url", () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
When("I enter user name and password", () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
})
And("I click on Login button", () => {
    cy.get('button[type="submit"]').click()
})
Then("I check for login page and user", () => {
    cy.get('.oxd-text--h6').should('have.text', 'Dashboard')
})
