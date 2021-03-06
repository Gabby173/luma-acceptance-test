package com.lamtech.stepDefinition;

import com.lamtech.pageObject.SignInPagePO;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SignInSteps {
    WebDriver driver;


    @Given("^User On SignIn Page$")
    public void userOnSignInPage() {

        WebDriverManager.chromedriver().setup();

        //Define Web Driver
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");

        //Maximise Browser Window
        driver.manage().window().maximize();
        driver.findElement(By.linkText("SignIn")).click();
    }

    @And("^User Enter\"([^\"]*)\"in Sign In Page$")
    public void userEnterInSignInPage(String EmailAddress) throws Throwable {
        // driver.findElement(By.id("email")).sendKeys(EmailAddress);
        //SignInPagePO signInPagePO = new SignInPagePO(driver);


    }

    @And("^User Enter their \"([^\"]*)\"$")
    public void userEnterTheir(String Password) throws Throwable {
        //driver.findElement(By.name("login[password]")).sendKeys(Password);
    }

    @And("^User Click on Sign In$")
    public void userClickOnSignIn() {
        //driver.findElement(By.cssSelector("#send2 > span")).click();
    }

    @Then("^Customer Account Dashboard Should be Displayed$")
    public void customerAccountDashboardShouldBeDisplayed() {

    }
}