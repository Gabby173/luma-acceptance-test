package com.lamtech.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPagePO {

    //object locators
    @FindBy(id ="firstname")
    public static WebElement FirstNameField;

    @FindBy(id ="lastname")
    public static WebElement LastNameField;

    @FindBy(name ="email")
    public static WebElement EmailAddressField;

    @FindBy(id ="password")
    public static WebElement PasswordField;

    @FindBy(id ="password-confirmation")
    public static WebElement ConfirmPasswordField;

    @FindBy(css ="#form-validate > div > div.primary > button")
    public static WebElement CreateAccountButton;

    //initialize elements
    public CreateAccountPagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //page specific methods
    public void enterFirstName(String FirstName) {

        FirstNameField.sendKeys(FirstName);
    }
    public void enterLastName(String LastName){

        LastNameField.sendKeys(LastName);
    }
    public void enterEmailAddress(String EmailAddress){
        EmailAddressField.sendKeys(EmailAddress);}

     public void enterPassword(String Password){
        PasswordField.sendKeys(Password);

     }public void confirmPassword(String ConfirmPassword){
        ConfirmPasswordField.sendKeys(ConfirmPassword);
    }
    public void createAccountButton(){
        CreateAccountButton.click();

    }






}