
describe('Login to the shop', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Get in with a user and see the products',() => {
        cy.get('[data-test="username"]')
        .type('standard_user')

        cy.get('[data-test="password"]')
        .type('secret_sauce')

        cy.get('#login-button')
        .click()

        cy.contains('span','Products')
        .should('be.visible')

        cy.get('#react-burger-menu-btn')
        .click()

        cy.get('[data-test="logout-sidebar-link"]')
        .click()
    })

    //there's many ways to get the same information, here is two ways to get in or see the response in a login.

    it('Try using js a successful access', ()=>{
        cy.typeLogin('standard_user','secret_sauce')
        cy.get('#react-burger-menu-btn', {timeout: 10000}).should('be.visible')
        cy.logout()
    })

    it('Try a fail access with a locked user', ()=>{
        cy.typeLogin('locked_out_user','secret_sauce')
        cy.get('[data-test = "error"]', {timeout: 10000})
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

    it('Try a fail access with a problem user', ()=>{
        cy.typeLogin('problem_user','secret_sauce')
        cy.get('#react-burger-menu-btn', {timeout: 10000}).should('be.visible')
        cy.logout()
    })

    it ('Try delay to get in like user', ()=> {
        cy.typeLogin('performance_glitch_user','secret_sauce')
        cy.logout()
    })

    it('Try with wrong password', ()=>{
        cy.typeLogin('standard_user','wrong_sauce')
        cy.get('[data-test = "error"]', {timeout: 10000})
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})