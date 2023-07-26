$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\features\\addcart.feature");
formatter.feature({
  "name": "Book cart application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cleanData"
    }
  ]
});
formatter.step({
  "name": "user should navigate the applicatin",
  "keyword": "Given "
});
formatter.step({
  "name": "user should login as \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user search a \"\u003cbook\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user add the book to the cart",
  "keyword": "When "
});
formatter.step({
  "name": "the cart number is change",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "book"
      ]
    },
    {
      "cells": [
        "mahi22",
        "A12345b@",
        "Catching Fire"
      ]
    },
    {
      "cells": [
        "king22",
        "A123456b@",
        "Red Rising"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should navigate the applicatin",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.NavigateTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cleanData"
    }
  ]
});
formatter.step({
  "name": "user should navigate the applicatin",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.NavigateTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login as \"mahi22\" and \"A12345b@\"",
  "keyword": "And "
});
formatter.match({
  "location": "addcartSteps.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.support.ui.WebDriverWait.until(java.util.function.Function)\" because \"steps.addcartSteps.wait\" is null\r\n\tat steps.addcartSteps.userShouldLoginAsAnd(addcartSteps.java:27)\r\n\tat ✽.user should login as \"mahi22\" and \"A12345b@\"(src\\test\\java\\features\\addcart.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user search a \"Catching Fire\"",
  "keyword": "And "
});
formatter.match({
  "location": "addcartSteps.userSearchA(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user add the book to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "addcartSteps.userAddTheBookToTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the cart number is change",
  "keyword": "Then "
});
formatter.match({
  "location": "addcartSteps.theCartNumberIsChange()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: received Inspector.detached event\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d114.0.5735.199)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-834DAOM\u0027, ip: \u0027192.168.61.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\MAHIMUHI\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51155}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c073e8c910744420480949e2927fa34\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Clear cart\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Hooks.hooks.cleanupData(hooks.java:17)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:65)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d114.0.5735.199)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-834DAOM\u0027, ip: \u0027192.168.61.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\MAHIMUHI\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51155}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c073e8c910744420480949e2927fa34\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat Hooks.hooks.afterScenario(hooks.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:65)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should navigate the applicatin",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.NavigateTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@cleanData"
    }
  ]
});
formatter.step({
  "name": "user should navigate the applicatin",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.NavigateTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login as \"king22\" and \"A123456b@\"",
  "keyword": "And "
});
formatter.match({
  "location": "addcartSteps.userShouldLoginAsAnd(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.support.ui.WebDriverWait.until(java.util.function.Function)\" because \"steps.addcartSteps.wait\" is null\r\n\tat steps.addcartSteps.userShouldLoginAsAnd(addcartSteps.java:27)\r\n\tat ✽.user should login as \"king22\" and \"A123456b@\"(src\\test\\java\\features\\addcart.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user search a \"Red Rising\"",
  "keyword": "And "
});
formatter.match({
  "location": "addcartSteps.userSearchA(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user add the book to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "addcartSteps.userAddTheBookToTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the cart number is change",
  "keyword": "Then "
});
formatter.match({
  "location": "addcartSteps.theCartNumberIsChange()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: received Inspector.detached event\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d114.0.5735.199)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-834DAOM\u0027, ip: \u0027192.168.61.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\MAHIMUHI\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51224}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ebcdd4d75da1190cff2a1168076145a\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Clear cart\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Hooks.hooks.cleanupData(hooks.java:17)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:65)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d114.0.5735.199)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-834DAOM\u0027, ip: \u0027192.168.61.221\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\MAHIMUHI\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51224}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ebcdd4d75da1190cff2a1168076145a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat Hooks.hooks.afterScenario(hooks.java:33)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:65)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});