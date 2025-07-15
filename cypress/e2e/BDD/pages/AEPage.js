export default class myPage {
    selectors = {
        url: "https://automationexercise.com/login",
        signup_loginbtn: 'a[href="/login"]',
        //New User Signup!
        newUserName: '[data-qa="signup-name"]',
        newUserEmail: '[data-qa="signup-email"]',
        signupBtn: '[data-qa="signup-button"]',

    }

    visitUrl() {
        cy.visit(this.selectors.url)
    }

    signUp(name, email) {
        this.buttonClick(this.selectors.signup_loginbtn)
        cy.get(this.selectors.newUserName).type(name)
        cy.get(this.selectors.newUserEmail).type(email)
        cy.get(this.selectors.signupBtn).click()
    }

    buttonClick(css){
        cy.get(css).click()
    }
}