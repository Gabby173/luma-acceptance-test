package com.lamtech.stepDefinition;

import com.lamtech.pageObject.CreateAccountPagePO;
import com.lamtech.pageObject.HomePagePO;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import javax.swing.*;

public class CreateAccountSteps {
    WebDriver driver;
    @Given("^User on Create An Account Page$")
    public void userIsOnCreateAnAccountPage() {

        WebDriverManager.chromedriver().setup();

        //Define Web Driver
        driver = new ChromeDriver();
        driver.get("http://demo-magento2.vuestorefront.io/");

        //Maximise Browser Window
        driver.manage().window().maximize();
        //driver.findElement(By.linkText("Create an Account")).click();
        HomePagePO homePagePO = new HomePagePO(driver);
        homePagePO.clickOnCreateAccountLink();

    }


    @When("^User Enter \"([^\"]*)\" on Create an Account Page$")
    public void userEnterOnCreateAnAccountPage(String FirstName)  {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterFirstName(FirstName);

    }

    @And("^User Enters their \"([^\"]*)\"$")
    public void userEntersTheir(String LastName)  {
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterLastName(LastName);


    }

    @And("^User Enter an \"([^\"]*)\"$")
    public void userEnterAn(String EmailAddress) {
        //driver.findElement(By.name("email")).sendKeys(EmailAddress);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterEmailAddress(EmailAddress);

    }

    @And("^User Enter a \"([^\"]*)\"$")
    public void userEnterA(String Password){
        //driver.findElement(By.id("password")).sendKeys(Password);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.enterPassword(Password);

    }

    @And("^User Enter \"([^\"]*)\"$")
    public void userEnter(String ConfirmPassword) {
        //driver.findElement(By.id("password-confirmation")).sendKeys(ConfirmPassword);
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.confirmPassword(ConfirmPassword);

    }

    @And("^User Click on CreateAccount$")
    public void userClickOnCreateAccount() {
        //driver.findElement(By.cssSelector("#form-validate > div > div.primary > button")).click();
        CreateAccountPagePO createAccountPagePO = new CreateAccountPagePO(driver);
        createAccountPagePO.createAccountButton();



    }

    @Then("^Customer Account Dashboard is Displayed$")
    public void customerAccountDashboardIsDisplayed() {

    }
}
