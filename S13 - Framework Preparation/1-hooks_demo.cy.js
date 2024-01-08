describe('Hooks Demo', () => {

  // before() Hook
  // It runs before starting the first test, only once before any test starts
  before('This is the before Hook', () => {
    cy.log("Before All Tests")
  })

  // after() Hook
  // It runs after completing all tests, only once after completing all tests
  after('This is the after Hook', () => {
    cy.log("After All Tests")
  })

  // beforeEach() Hook
  // It runs before every test
  beforeEach('This is beforeEach Hook', () => {
    cy.log('Before Every Test')
  })

  // afterEach() Hook
  // It runs after every test
  afterEach('This is afterEach Hook', () => {
    cy.log('After Every Test')
  })

  it('Test 1', () => {
    cy.log('Test 1')
  })

  it('Test 2', () => {
    cy.log('Test 2')
  })
})