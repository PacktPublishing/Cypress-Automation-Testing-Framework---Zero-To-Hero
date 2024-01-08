describe('Custom Command Practical Demo', () => {

    it('should use custom command to login', () => {
      cy.visit('https://www.letskodeit.com/login')
      cy.login('test@email.com', 'abcabc')
    })

    it('should use custom command to search', () => {
      cy.visit('https://www.letskodeit.com/courses')
      cy.searchCourse("All", "java")
    })
  })