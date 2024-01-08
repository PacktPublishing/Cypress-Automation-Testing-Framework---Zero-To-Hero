import {util} from "../../support/utilities"

describe('API Testing Demo', () => {

    let gd;

    before('This is before Hook', () => {
        cy.fixture('users_data').then((data) => {
            gd = data;
        })
    })


    it.skip('should validate post request', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
            },
            body: {
                name: "Name 1",
                gender: "male", 
                email: "testname01@gmail.com",
                status: "active" 
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq('Name 1')
            expect(res.body.name).to.equal('Name 1')
            expect(res.body).has.property('name', 'Name 1')
            expect(res.body.email).to.equal('testname01@gmail.com')
        })
    })


    it.skip('should validate post request - request variable', () => {
        const reqBody = {
            name: "Name 1",
            gender: "male", 
            email: "testname03@gmail.com",
            status: "active" 
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq('Name 1')
            expect(res.body.name).to.equal('Name 1')
            expect(res.body).has.property('name', 'Name 1')
            expect(res.body.email).to.equal('testname03@gmail.com')
        })
    })

    it.skip('should validate post request - fixture data', () => {
        const reqBody = {
            name: gd.tid1.name,
            gender: gd.tid1.gender, 
            email: gd.tid1.email,
            status: gd.tid1.status
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq('Name 1')
            expect(res.body.name).to.equal('Name 1')
            expect(res.body).has.property('name', 'Name 1')
            expect(res.body.email).to.equal('testname05@gmail.com')
        })
    })

    it('should validate post request - randomize request', () => {
        const reqBody = {
            name: gd.tid1.name,
            gender: gd.tid1.gender, 
            email: util.random_email(),
            status: gd.tid1.status
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            'authorization': 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969'
            },
            body: reqBody
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.be.eq(201)
            expect(res.body.name).to.be.eq(reqBody.name)
            expect(res.body.name).to.equal(reqBody.name)
            expect(res.body).has.property('name', reqBody.name)
            expect(res.body.email).to.equal(reqBody.email)
        })
    })
  })