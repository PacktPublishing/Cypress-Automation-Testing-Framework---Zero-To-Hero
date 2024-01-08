describe('Trigger Demo', () => {
    it('should understand various options of trigger methods', () => {

      // Practice Page Mouseover
      cy.visit('https://www.letskodeit.com/practice')
      // cy.get('#mousehover').invoke('show')
      cy.get('div[class="mouse-hover-content"]').invoke('show')
      cy.get("div.mouse-hover-content a[href='#top']").click()

      // eBay Mousover
      // cy.visit('https://www.ebay.com/')
      // cy.get('#gh-eb-My-o').invoke('show')
    })
  })