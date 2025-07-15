///<reference types = 'cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pages/AEPage"
import data from "../../../../fixtures/AEPayload.json"

let hp = new homePage()
Given("I navigate to url", () => {
    hp.visitUrl()
})
// And("I click on signuplogin button", () => {

// })
Then("I fill name and email for new user sign up", () => {
hp.signUp(data["newUser-Name"],data["newUser-Email"])
})
And("I fill all information and click on create account button", () => {

})
Then("I verify for account created successfully", () => {

})
Then("I verify login for new user", () => {

})
