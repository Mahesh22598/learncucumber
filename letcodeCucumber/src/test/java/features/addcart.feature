Feature: Book cart application

  Background: 
    Given user should navigate the applicatin
@cleanData
  Scenario Outline: add to cart
    Given user should navigate the applicatin
    And user should login as "<username>" and "<password>"
    And user search a "<book>"
    When user add the book to the cart
    Then the cart number is change

    Examples: 
      | username | password  | book          |
      | mahi22   | A12345b@  | Catching Fire |
      | king22   | A123456b@ | Red Rising    |
