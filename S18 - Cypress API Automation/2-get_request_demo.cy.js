describe('API Testing Demo', () => {


    it('should validate get request', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
            'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(200)
            expect(res.body).has.length(10)
            expect(res.body[0]).has.property('name', 'Akshaj Pothuvaal')
            expect(res.body[0]).not.have.property('address')
        })
    })
  })