package com.lamtech.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    //object locators
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAnAccountLink;

    @FindBy(linkText = "SignIn")
    public static WebElement SigninLink;


    //initialize elements
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    //page specific methods
    public void clickOnCreateAccountLink(){
        CreateAnAccountLink.click();

    }

    public void clickOnSignInLink(){
        SigninLink.click();
    }











}
