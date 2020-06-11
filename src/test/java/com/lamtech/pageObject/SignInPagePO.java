package com.lamtech.pageObject;

import cucumber.api.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPagePO {

    //object locators
    @FindBy(name = "email")
    public static WebElement EmailAddressField;

    @FindBy(id = "password")
    public static WebElement PasswordField;

    @FindBy(css = "#send2 > span")
    public static WebElement SignIn;






}
