describe('Página de Login', () => {
    it('Fazendo o login corretamente', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('test');
      cy.get('[data-test="loginPassword"]').type('123456789');
      cy.contains('button', 'login').click();
    })
  })