package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driver.DriverInstance;


public class loginSteps extends DriverInstance {
	

	@Given("user should navigate the applicatin")
	public void NavigateTheApplication() {
		System.setProperty("webdriver.chrome.driver","D:\\softy\\selenium\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://bookcart.azurewebsites.net/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			
		
	}
	
	@Given("user click on the login btn")
	public void userClickOnTheLoginBtn() {
		driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[3]")).click();
	    
	}
	
//	@Given("user enter the user name as mahesh")
//	public void userEnterTheUserNameAsMahesh() {
//		driver.findElement(By.cssSelector("input[formcontrolname='username']")).sendKeys("mahi22");
//	   
//	}
//
//	@Given("user enter the password ad 12345")
//	public void userEnterThePasswordAd() {
//		driver.findElement(By.cssSelector("input[formcontrolname='password']")).sendKeys("A12345b@");
//	    
//	}

	@When("user click on the login button")
	public void userClickOnTheLoginButton() {
		driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-raised-button')]")).click();
	    
	}

	@Then("login should be sucess")
	public void loginShouldBeSucess() {
		
		
		String text=driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]")).getText();
	    System.out.println(text);
	    //driver.quit();
	}
	/*
	 * @Given("user enter the user name as maheesh") public void
	 * userEnterTheUserNameAsMaheesh() {
	 * driver.findElement(By.cssSelector("input[formcontrolname='username']")).
	 * sendKeys("maheesh");
	 * 
	 * }
	 * 
	 * @Given("user enter the password ad mahi555") public void
	 * userEnterThePasswordAdMahi() {
	 * driver.findElement(By.cssSelector("input[formcontrolname='password']")).
	 * sendKeys("mahi555");
	 * 
	 * 
	 * }
	 */

	@When("login should be fail")
	public void loginShouldBeFail() {
		String esms=driver.findElement(By.cssSelector("mat-error[role='alert']")).getText();
		Assert.assertEquals(esms, "Username or Password is incorrect.");
		//driver.quit();
	}
	@Given("user enter the user name as {string}")
	public void userEnterTheUserNameAs(String username) {
		driver.findElement(By.cssSelector("input[formcontrolname='username']")).sendKeys(username);
		
	    
	}

	@Given("user enter the password ad {string}")
	public void userEnterThePasswordAd(String pass) {
		driver.findElement(By.cssSelector("input[formcontrolname='password']")).sendKeys(pass);
	  // driver.quit();
	}

	
	
	
}
