describe('API Testing Demo', () => {

    let apiURL = 'http://coop.apps.symfonycasts.com/api';
    let accessToken = '';
    let userId = '';

    before('Get access token', ()=> {
      cy.request({
        method: 'POST',
        url: 'http://coop.apps.symfonycasts.com/token',
        form: true,
        body: {
          'client_id': 'LetsKodeItAutomation',
          'client_secret': 'eb6bd5ef07bebfb4941c90cac220a3ab',
          'grant_type': 'client_credentials'
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        accessToken = res.body.access_token;
        cy.log(accessToken);
        cy.request({
          method: 'GET',
          url: apiURL + '/me',
          headers: {
            'Authorization': 'Bearer ' + accessToken
          }
        }).then((res) => {
          userId = res.body.id;
          cy.log('User Id:' + userId);
        })
      })
    })

    it('should unlock the barn - POST', ()=> {
      cy.request({
        method: 'POST',
        url: apiURL + '/' + userId + '/barn-unlock',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }).then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.be.eq(200);
      })
    })
  })