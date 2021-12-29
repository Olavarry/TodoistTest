class HomePage{

    clickLogin(){
        return cy.contains('Log in').click()
    }

}

export default HomePage;