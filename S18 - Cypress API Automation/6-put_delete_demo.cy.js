import { util } from "../../support/utilities"

describe('API Testing Demo', () => {

    let apiURL = 'https://gorest.co.in/public/v2/users'
    let accessToken = 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969';
    let userId;
    let gd;
    before('This is before Hook', () => {
      cy.fixture('users_data').then((data) => {
        gd = data;
      })
    })

    it('should understand put request', () => {
        const reqBody = {
          name: gd.tid1.name,
          gender: gd.tid1.gender, 
          email: util.randomEmail(),
          status: gd.tid1.status
        }

        const putReqBody = {
          name: gd.tid2.name,
          gender: gd.tid2.gender, 
          email: util.randomEmail(),
          status: gd.tid2.status
        }

        cy.request({
          method: 'POST',
          url: apiURL,
          headers: {
            'authorization': accessToken
          },
          body: reqBody
        })
          .then((res) => {
              expect(res.status).to.eq(201);
              const userId = res.body.id;
              cy.request({
                method: 'PUT',
                url: apiURL + '/' + userId,
                headers: {
                  'authorization': accessToken
                },
                body: putReqBody
            })
              .then((res) => {
                  expect(res.body.name).equal(putReqBody.name);
                  expect(res.body.gender).equal(putReqBody.gender);
                  expect(res.body.email).equal(putReqBody.email);
                  expect(res.body.status).equal(putReqBody.status);
              })
          })
    })


    it('should validate post request', () => {
      const userEmail = util.randomEmail()
      const reqBody = {
        name: gd.tid1.name,
        gender: gd.tid1.gender, 
        email: userEmail,
        status: gd.tid1.status
      }

      cy.request({
        method: 'POST',
        url: apiURL,
        headers: {
          'authorization': accessToken
        },
        body: reqBody
      })
        .then((res) => {
            expect(res.status).to.eq(201);
            userId = res.body.id;
        })
    })

    it('should validate put request', () => {
      const userEmail = util.randomEmail()
      const putReqBody = {
        name: gd.tid2.name,
        gender: gd.tid2.gender, 
        email: userEmail,
        status: gd.tid2.status
      }

      cy.request({
        method: 'PUT',
        url: apiURL + '/' + userId,
        headers: {
          'authorization': accessToken
        },
        body: putReqBody
      })
      .then((res) => {
          expect(res.body.name).equal(putReqBody.name);
          expect(res.body.gender).equal(putReqBody.gender);
          expect(res.body.email).equal(putReqBody.email);
          expect(res.body.status).equal(putReqBody.status);
      })
    })

    it('should validate delete request', () => {
      cy.request({
        method: 'DELETE',
        url: apiURL + '/' + userId,
        headers: {
          'authorization': accessToken
        }
      })
      .then((res) => {
          expect(res.status).equal(204);
      })
    })
  })