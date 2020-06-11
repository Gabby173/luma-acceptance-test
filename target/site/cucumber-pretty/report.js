$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Sign In",
  "description": "",
  "id": "sign-in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "SignIn",
  "description": "",
  "id": "sign-in;signin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User On SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User \"\u003cEnters EmailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Enters Their \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Users Click On SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer Account Dashboard Is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "sign-in;signin;",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ],
      "line": 16,
      "id": "sign-in;signin;;1"
    },
    {
      "cells": [
        "Johnperry@aol.com",
        "qwerty@123"
      ],
      "line": 17,
      "id": "sign-in;signin;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "SignIn",
  "description": "",
  "id": "sign-in;signin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User On SignIn Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User \"\u003cEnters EmailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Enters Their \"qwerty@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Users Click On SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer Account Dashboard Is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userOnSignInPage()"
});
formatter.result({
  "duration": 10669446500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"SignIn\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GABBY\u0027, ip: \u0027192.168.1.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\TEAMKN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57200}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 56c30d7a9788ee897bf6f6c29a83466a\n*** Element info: {Using\u003dlink text, value\u003dSignIn}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.lamtech.stepDefinition.SignInSteps.userOnSignInPage(SignInSteps.java:27)\r\n\tat ✽.Given User On SignIn Page(SignIn.feature:5)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("createAccount.feature");
formatter.feature({
  "line": 1,
  "name": "account creation",
  "description": "",
  "id": "account-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": "account-creation;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on Create An Account Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter \"\u003cFirstName\u003e\" on Create an Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters their \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Enter an \"\u003cEmailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter a \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on CreateAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Customer Account Dashboard is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "account-creation;;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "EmailAddress",
        "Password",
        "ConfirmPassword"
      ],
      "line": 19,
      "id": "account-creation;;;1"
    },
    {
      "cells": [
        "John",
        "Smith",
        "Johnperry@aol.com",
        "qwerty@123",
        "qwerty@123"
      ],
      "line": 20,
      "id": "account-creation;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "account-creation;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on Create An Account Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter \"John\" on Create an Account Page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters their \"Smith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Enter an \"Johnperry@aol.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter a \"qwerty@123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter \"qwerty@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Click on CreateAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Customer Account Dashboard is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 8483064300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 12
    }
  ],
  "location": "CreateAccountSteps.userEnterOnCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 564010000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.userEntersTheir(String)"
});
formatter.result({
  "duration": 188704900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Johnperry@aol.com",
      "offset": 15
    }
  ],
  "location": "CreateAccountSteps.userEnterAn(String)"
});
formatter.result({
  "duration": 451464700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@123",
      "offset": 14
    }
  ],
  "location": "CreateAccountSteps.userEnterA(String)"
});
formatter.result({
  "duration": 337304900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@123",
      "offset": 12
    }
  ],
  "location": "CreateAccountSteps.userEnter(String)"
});
formatter.result({
  "duration": 175814500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClickOnCreateAccount()"
});
formatter.result({
  "duration": 1871378600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.customerAccountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 90200,
  "status": "passed"
});
});