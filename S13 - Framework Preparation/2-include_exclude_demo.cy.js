describe('Include/Exclude Demo', () => {

  it.only('Test 1', () => {
    cy.log('Test 1')
  })

  it.skip('Test 2', () => {
    cy.log('Test 2')
  })

  it('Test 3', () => {
    cy.log('Test 3')
  })

  it('Test 4', () => {
    cy.log('Test 4')
  })
})