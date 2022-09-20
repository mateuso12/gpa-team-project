/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
describe('testing freight creation flow', () => {
  it('should create successfully a new freight', () => {
    cy.visit('/frete')

    cy.get('#create-freight-button').click()

    cy.muiSelect('carrier-code-select', 2)

    cy.get('#carrier-name-field').type('Transportadora')

    cy.muiSelect('carrier-type-select', 'teste2')

    cy.get('#km-franchise-field').type(1)

    cy.get('#assistant-field').type(1)

    cy.get('#post-franchise-km-value-field').type(1)

    cy.get('#order-value-field').type(1)

    cy.get('#daily-value-field').type(1)

    cy.muiSelect('sunday-holiday-select', 20)

    cy.muiSelect('night-surcharge-select', 20)

    cy.get('#night-surcharge-from-field').type('18:00')

    cy.muiMultipleSelect('sites-multiple-select', [1, 2])

    cy.get('#submit-freight-button').click()

    cy.get('#post-freight-success').should('be.visible')
  })
})
