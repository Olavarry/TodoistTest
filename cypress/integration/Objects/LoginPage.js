import user from '../../fixtures/example.json'

class Login{

    login(){
        
        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)
        return cy.get('.submit_btn.ist_button.ist_button_red.sel_login').click()
    }

}

export default Login;