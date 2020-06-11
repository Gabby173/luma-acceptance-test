Feature: account creation

  @createAccount
  Scenario Outline:
    Given User on Create An Account Page
    When User Enter "<FirstName>" on Create an Account Page
    And User Enters their "<LastName>"
    And User Enter an "<EmailAddress>"
    And User Enter a "<Password>"
    And User Enter "<ConfirmPassword>"
    And User Click on CreateAccount
    Then Customer Account Dashboard is Displayed





    Examples:
      | FirstName | LastName | EmailAddress      | Password   | ConfirmPassword |
      | John      | Smith    | Johnperry@aol.com | qwerty@123 | qwerty@123      |