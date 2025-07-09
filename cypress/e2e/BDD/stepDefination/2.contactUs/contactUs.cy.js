///<reference types = 'cypress' />
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given("I navigate to contact us page", () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

})
When("I enter data for all input fields", () => {
    cy.get('[name="first_name"]').type('dipanshu')
    cy.get('[name="last_name"]').type('chawde')
    cy.get('[name="email"]').type('dipanshu@gmail.com')
    cy.get('[name="message"]').type('hi , how are you')
})
Then("I click on submit button", () => {
    cy.get('[type="submit"]').click()
})
And("I verify for validation message", () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})

//scenario 2

When('I enter data for all input fields from data table',(userData)=>{
userData.hashes().forEach(data =>{
    cy.get('[name="first_name"]').type(data.fn)
    cy.get('[name="last_name"]').type(data.ln)
    cy.get('[name="email"]').type(data.email)
    cy.get('[name="message"]').type(data.msg)
})
})

//scenario 3
When("I enter data for all input-fields for {string} ,{string},{string},{string}",(fn,ln,em,mg)=>{
    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(em)
    cy.get('[name="message"]').type(mg)
})

When("I enter data for all input-fields for --{word} ,{word},{string},{string}",(fn,ln,em,mg)=>{
    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(em)
    cy.get('[name="message"]').type(mg)
})