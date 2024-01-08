import { util } from "../../support/utilities"

describe('API Testing Demo', () => {

    let apiURL = 'https://gorest.co.in/public/v2/users'
    let accessToken = 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969';
    let gd;
    before('This is before Hook', () => {
      cy.fixture('users_data').then((data) => {
        gd = data;
      })
    })

    it('should understand request chaining', () => {
        const reqBody = {
          name: gd.tid1.name,
          gender: gd.tid1.gender, 
          email: util.randomEmail(),
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
              const userId = res.body.id;
              return userId;
          })
            .then((userId) => {
                cy.request({
                    method: 'GET',
                    url: apiURL + '/' + userId,
                    headers: {
                      'authorization': accessToken
                    }
                })
                  .then((res) => {
                    expect(res.body.name).equal(reqBody.name);
                    expect(res.body.gender).equal(reqBody.gender);
                    expect(res.body.email).equal(reqBody.email);
                    expect(res.body.status).equal(reqBody.status);
                  })
            })
    })
  })