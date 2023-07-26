package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import driver.DriverInstance;


public class addcartSteps extends DriverInstance {
	//WebDriver driver;
	//WebDriverWait wait;
	
	@Given("user should login as {string} and {string}")
	public void userShouldLoginAsAnd(String username, String password) {
		driver.findElement(By.xpath("(//span[@class='mat-button-wrapper'])[3]")).click();
		driver.findElement(By.cssSelector("input[formcontrolname='username']")).sendKeys(username);
		driver.findElement(By.cssSelector("input[formcontrolname='password']")).sendKeys(password);
		WebElement userele=driver.findElement(By.xpath("(//button[contains(@class,'mat-focus-indicator mat-button')])[2]"));
		wait.until(ExpectedConditions.visibilityOf(userele));
		driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-raised-button')]")).click();
		
	}
	
	@Given("user search a {string}")
	public void userSearchA(String book) {
		driver.findElement(By.cssSelector("input[type='search']")).sendKeys(book);
		driver.findElement(By.xpath("(//span[@class='mat-option-text'])[1]")).click();
	   
	   
	}

	@When("user add the book to the cart")
	public void userAddTheBookToTheCart() {
		driver.findElement(By.xpath("(//button[contains(@class,'mat-focus-indicator mat-raised-button')]//span)[1]")).click();
	    
	   
	}

	@Then("the cart number is change")
	public void theCartNumberIsChange() {
		String text=driver.findElement(By.id("mat-badge-content-0")).getText();
		Assert.assertEquals(Integer.parseInt(text)>0, false);
   
	}
	
	
	
}
