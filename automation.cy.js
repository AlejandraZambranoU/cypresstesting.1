open page to test
describe ('show page with all the elements', ()=>{
it ('open the page showing everything inside it', ()=>{
  cy.visit('https://buggy.justtestit.org/')
  })
})

explore the initial page 
describe('exploring the page', ()=>{
it('scroll until the footage', ()=>{
  cy.visit('https://buggy.justtestit.org/');
  cy.wait(2250);
  cy.get('footer').scrollIntoView();
  })
})

try go to the options---can be more options?
describe('exploring elements', ()=>{
    it('click on the differents elements and go back', ()=>{
    cy.visit('https://buggy.justtestit.org/')
    cy.get('a[href="/make/ckl2phsabijs71623vk0"] img[title ="Lamborghini"]').click();
    cy.wait(2000)
    cy.get('a[href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg" ] ["Diablo"]').click();
    cy.contains('a','Diablo').click();
    cy.wait(4000)
    cy.get('body').should('be.visible')
    cy.contains('td','beuti').should.exist;
   })
})

//try to go to the differents options
describe('explore diferent elements', ()=>{
  it('exploring all the options in the web', ()=>{
  cy.visit('https://buggy.justtestit.org/')
  cy.get('a[href="/make/ckl2phsabijs71623vk0"] img[title ="Lamborghini"]').click()
  cy.wait(4000)
  cy.get('Footer').scrollIntoView
  cy.wait(2000)
  //there's a bug when try to return to homepage
  cy.visit('https://buggy.justtestit.org/')
  cy.wait(5000)
  cy.get('a[href="/model/ckl2phsabijs71623vk0|ckl2phsabijs71623vqg"]').click()
  cy.wait(4000)
  cy.get('Footer').scrollIntoView
  cy.get('a[href="/"]').contains('Buggy Rating').click()
  cy.wait(2000)
  cy.get('a[href="/overall"]').click()
  cy.wait(2000)
  cy.contains('»').click() //in this case I'm looking for a specific text in the element
  cy.wait(2000)
  cy.contains('Register').click()
  cy.get('#username').type('Alejandra11123456').should('have.value','Alejandra11123456')
  cy.get('#firstName').type('Alejandra').should('have.value','Alejandra')
  cy.get('#lastName').type('Zambrano').should('have.value','Zambrano')
  cy.get('#password').type('Wasabi.5').should('have.value','Wasabi.5')
  cy.get('#confirmPassword').type('Wasabi.5').should('have.value','Wasabi.5')
  cy.wait(2000)
  cy.get ('button.btn.btn-default').click ()//({force: true}) if is disable to test his function you add this condition
  cy.get('input[name="login"]').type('Alejandra111')
  cy.get('input.form-control-sm.ng-dirty.ng-touched.ng-valid').type('Wasabi.5')
  cy.get('button.btm.btn-success')
  })
})
//try to go to facebook
describe('go to facebook', ()=>{
it('use the button to go to facebook', ()=>{
  cy.visit('https://buggy.justtestit.org/')
  cy.get('a[href="https://www.facebook.com"]').click()
  cy.wait(2000)
})
})