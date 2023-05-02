describe('Intro spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  // Checks page contents
  it('should have a welcome', () => {
    cy.contains('h1', "Welcome to Trivia!")
  });

  it('should have a difficulty select', () => {
    cy.contains('Select a Difficulty').should('be.visible')
  });

  it('should have a category select', () => {
    cy.contains('Select a Category').should('be.visible')
  });

  it('should have a submit', () => {
    cy.contains('h1', "Welcome to Trivia!")
  });

  // Check API call
  it('should call the backend properly', () => {
    cy.request({
      method: 'POST',
      url: 'https://trivia-api-edqv.onrender.com/api/v1/questions',
    }).then(response => {
      expect(response.status).to.eq(200)
    });
  });

  // Check
  it('should be able select different categories and submit', () => {
    cy.get('#difficulty-select').select('Medium')
    .should('have.value', 'medium');
    cy.get("#category-select").select("General Knowledge").should('have.value', '9');;
    cy.get('.intro-button').click()

    cy.get(".intro-button").should("be.disabled");
    cy.url().should('include', '/question1')
  });

  it('should be able to submit without changing category or difficulty', () => {
    cy.get('.intro-button').click()

    cy.get(".intro-button").should("be.disabled");
    cy.url().should('include', '/question1')
  });
});
