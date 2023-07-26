Feature: Book Cart Application demo

  Background: 
    Given user should navigate the applicatin
    And user click on the login btn

  Scenario: login should be sucess
    And user enter the user name as "mahi22"
    And user enter the password ad "A12345b@"
    When user click on the login button
    Then login should be sucess
    
@failtest
  Scenario: login should be fail
    And user enter the user name as "maheesh"
    And user enter the password ad "mahi555"
    When user click on the login button
    But login should be fail
