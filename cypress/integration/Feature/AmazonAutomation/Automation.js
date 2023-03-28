/// <reference types="cypress"/>
import{Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'

    Given('I navigate to Amazon home page', ()=> {
    cy.visit('https://www.flipkart.com/');
    })

    Then('Verifying I am on the login page', ()=>{
        cy.url().should('include','flipkart');
    })

//login

    // Given('click on login button',()=>{
    //     cy.get('._1_3w1N').click()
    // })
    // when('I give {string} as a mobile number',(parameter)=>{
    //     cy.get('._2IX_2-').type(parameter)
    //     cy.get('._1k3JO2 > ._2KpZ6l').click()
    // })

//search

    When('I search for {string}',(parameter)=>{
    cy.get('._3704LK').type(parameter)
    // cy.get('input[type="text"]').type(parameter);
    cy.get('.L0Z3Pu').click()
    // cy.get('button[type="submit"]').click();
    })


    // Then('i should see list of search results', () => {
    //     cy.get('div._1YokD2._3Mn1Gg').should('be.visible').click();
    // });

//Adding brand filter

    // Given('I give {string} as a input in brand choice',(parameter)=>{
    //     cy.get('._34uFYj').type(parameter)
    // })
    


    // When('I select Redmi',()=>{
    //     // cy.get(':nth-child(4) > ._213eRC > .ttx38n').click()
    //     cy.get('.QvtND5 > span').click()
    //     cy.get('[title="REDMI"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
    // })

    //Adding price filter
    // Given('I select Price filter',()=>{
    //     cy.get('._3uDYxP > ._2YxCDZ').click()
    // })


    //Adding customer rating filter
    Given('I select customer rating above 4',()=>{
        cy.get('[title="4★ & above"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
    })

    //Adding RAM filter 
    Given('I select RAM 6 gb',()=>{
        cy.get('[title="6 GB"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
    })

    //Adding internal storage filter
    Given('I select internal storage between 128gb to 256 gb',()=>{
        cy.get(':nth-child(9) > ._213eRC > ._2gmUFU').click()
        cy.get('[title="128 - 255.9 GB"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click()
    })


    And('I select the first search result',()=>{
        //cy.xpath('//div[@class="_2kHMtA"]').click()
        // cy.get('div._1YokD2._3Mn1Gg').first().click();
          cy.get("._2kHMtA").first().click();
        //  cy.
        // cy.get("._2kHMtA").first().should("be.visible").click();
        // cy.get('._2kHMtA', { timeout: 10000 }).should('have.length', 24).click();
        // cy.get('._2kHMtA').eq(0).click();
        // cy.intercept('GET', '**/search').as('searchResults');
        // cy.wait('@searchResults');
        
          


        // cy.get('._2kHMtA').should('be.visible').eq(0).click();
        // cy.wait(10000);
        //cy.get('._2kHMtA').eq(0).click();

        // cy.get("_2kHMtA").click()
        //  cy.log('Button clicked!') 
        //     for (let i = 0; i < 5; i++) {
        //       cy.wrap(products[i]).click({ force: true });
        //     }
        //   });
    })
    Then('I should be on the product details page', () => {
        cy.get('div._2kHMtA').should('be.visible');
    })
    And('I click on "Add to Cart”',()=>{
        cy.get('button._2KpZ6l _2U9uOA _3v1-ww').click()
    })
    // Then('the product should be added to the cart', () => {
    //   cy.get('').should('contain.text', '1 item')
    // })
    
    
//     // Given('I click on “Cart”',()=>{
//     // Cy.get('').click()
//     // })
//     // When('I click on “place order”',()=>{
//     // Cy.get('').click()
//     // })



// Given("I am on the Flipkart homepage", () => {
//     cy.visit("https://www.flipkart.com/");
//   });
  
//   When("I search for {string} and press Enter", (searchTerm) => {
//     cy.get("input[type='text']").type(`${searchTerm}{enter}`);
//   });
  
//   Then("I should see the search results for {string}", (searchTerm) => {
//     cy.get("._10Ermr").should("contain", searchTerm);
//   });
  
//   When("I add the first 5 products to the cart", () => {
//     cy.get("._1fQZEK").then((products) => {
//       for (let i = 0; i < 5; i++) {
//         cy.wrap(products[i]).click({ force: true });
//       }
//     });
//   });
  
//   Then("the cart should have 5 items", () => {
//     cy.get(".shopping-cart-badge").should("have.text", "5");
//   });


