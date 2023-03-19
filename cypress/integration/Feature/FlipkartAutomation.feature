# Feature: Add first 5 products from search page to cart in Flipkart

#   Scenario: Add first 5 products from search page to cart
#     When I add the first 5 products to the cart
#     Then the cart should have 5 items




Feature: Automation for Flipkart

Scenario:Searching mobile in search field
Given I navigate to Flipkart home page
# Then Verifying I am on the login page
When I search for "mobile"
# Then i should see list of search results
And I select the first search result
Then I should be on the product details page
# And I click on "Add to Cart”
# Then the product should be added to the cart
# Given I click on “Cart”
# When I click on “place order”