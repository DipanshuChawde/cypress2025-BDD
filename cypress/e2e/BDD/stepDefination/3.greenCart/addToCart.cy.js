///<reference types = 'cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("I navigate to url {string}", (url) => {
    cy.visit(url)
})

When("I type on search box {string}", (search) => {
    cy.get('input[type="search"]').type(search)
    cy.get('button[class="search-button"]').click()
    cy.wait(2000)
})

And("I add product {string} to cart", (products) => {
    //Carrot,Capsicum
    let listProducts = products.split(",")
    cy.log(listProducts)
    listProducts.forEach((el, inx) => {
        cy.get('.products >.product').contains(el).parent().contains("ADD TO CART").click()
        cy.wait(2000)
    })
})

Then("I verify products {string} and place order", (products) => {
    let listProducts = products.split(",")
    cy.log(listProducts)
    cy.get('table >tbody > tr >td >p.product-name').each((el, index) => {
        cy.log(el.text())
        let elText = el.text()
        // const hasSubtext = listProducts.some(fruit => fruit.includes(el.text));
        // cy.log(hasSubtext)
        let prod = elText.split("-")  //["Carrot ", "- 1 Kg"]
        let prodFinal = prod[0].trim()
        cy.log(listProducts.includes(prodFinal))
        expect(listProducts.includes(prodFinal)).to.eq(true)

    })


})

Then("I verify order placed", () => {

})

When("I proceed to check out", () => {
    cy.get('img[alt="Cart"]').click()
    cy.contains('PROCEED TO CHECKOUT').click()
})