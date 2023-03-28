# Feature: Add first 5 products from search page to cart in Flipkart

#   Scenario: Add first 5 products from search page to cart
#     When I add the first 5 products to the cart
#     Then the cart should have 5 items




Feature: Automation for Flipkart

Scenario:Searching mobile in search field
    Given I navigate to Amazon home page
    Then Verifying I am on the login page
    When I search for "mobile"
    # Then I should see list of search results

# Scenario: Adding brand filters
#     //Given I give "Redmi" as a input in brand choice
#     When I select Redmi

# Scenario: Adding price filter
#     Given I select Price filter

Scenario: Adding customer rating filter
    Given I select customer rating above 4

Scenario: Adding RAM filter 
    Given I select RAM 6 gb

Scenario: Adding internal storage filter
    Given I select internal storage between 128gb to 256 gb

Scenario: Selecting product to buy
    And I select the first search result
#     Then I should be on the product details page

And I click on "Add to Cart”
# Then the product should be added to the cart
# Given I click on “Cart”
# When I click on “place order”