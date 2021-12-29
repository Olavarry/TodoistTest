
/// <reference types="Cypress" />

import LoginPage from '../integration/Objects/LoginPage'
import HomePage from '../integration/Objects/HomePage'
import Today from '../integration/Objects/Today'


describe('login', () => {
    let loginPage = new LoginPage
    let homePage = new HomePage
    let today = new Today
    it('user performs login', () =>{
        cy.visit('https://todoist.com/')
        homePage.clickLogin()
        loginPage.login()
        today.getTitle().should('exist')
    })
    
   
})