Feature: Sign In

  @SignIn
  Scenario Outline:SignIn
   Given User On SignIn Page
   And User "<Enters EmailAddress>"
   And User Enters Their "<Password>"
   And Users Click On SignIn
   Then Customer Account Dashboard Is Displayed





    Examples:
      | EmailAddress      | Password   |
      | Johnperry@aol.com | qwerty@123 |