describe('Fixtures Multiple Data Demo', () => {

  let globalData;

  before('Before Hook', () => {
    cy.fixture("search_course").then((data) => {
      globalData = data 
  })
  })

  it('should run same test with multiple data', () => {
    globalData.testid1.forEach(testData => {
      cy.visit('https://www.letskodeit.com/courses')
      cy.get('input[placeholder="Search Course"]').type(testData.search_course)
      cy.get('button[class="find-course search-course"]').click()
      cy.xpath('//h4[normalize-space()="{course_name}"]'.replace("{course_name}", testData.click_course)).click()
    })
  })
})