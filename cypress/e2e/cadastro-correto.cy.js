describe('Página de Cadastro', () => {
  it('Preenchendo os dados corretamente para cadastro de novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('teste@email.com');
    cy.get('[data-test="fullName"]').type('Teste Testando Testado');
    cy.get('[data-test="registerUserName"]').type('test');
    cy.get('[data-test="registerPassword"]').type('123456789');
    cy.contains('button', 'Register').click();
  })
})