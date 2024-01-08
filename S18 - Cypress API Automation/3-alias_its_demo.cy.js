describe('Alias and Get Command - API Testing Demo', () => {

    beforeEach('Initiate the main URL', ()=> {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
        'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
        }
      }).as('users')
    })

    it('should use alias and get command to verify api testing', () => {
      cy.get('@users').its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })


    it('should use alias to verify the status', () => {
      cy.get('@users').its('status')
        .should('equal', 200)
    })

    it('should use alias to verify the data', () => {
      cy.get('@users').its('body').then((res) => {
        expect(res[0]).has.property('name', 'Akshaj Pothuvaal')
      })
    })
  })