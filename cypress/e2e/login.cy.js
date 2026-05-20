// Funcionalidade
describe('Login', () => {

    // Cenario 1  
    // open cypress | Set ".only"
    it('login com sucesso', () => {
      // abre o app
        cy.visit('automationpratice.com.br/login')

        // preencher email   
        cy.get('#user').type('teste@teste.com')

        // preencher senha  
        cy.get('#password').type('123456')

        // clica em login 
        cy.get('#btnLogin').click()


        // valida 
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    })

    // Cenario 2 
    // open cypress | Set ".only" 
    it('login com senha inválida', () => {
       
    })
    
    // Cenario 3
    // open cypress | Set ".only"
    it('login com email inválido', () => {

    })

})