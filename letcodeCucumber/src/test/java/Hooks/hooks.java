package Hooks;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import driver.DriverInstance;

public class hooks extends DriverInstance {
	
	@After("@cleanData")
	public void cleanupData() {
		driver.findElement(By.xpath("//mat-icon[text()='shopping_cart']")).click();
		driver.findElement(By.xpath("//span[text()='Clear cart']")).click();
		String clntext=driver.findElement(By.tagName("mat-card-title")).getText();
		Assert.assertEquals(clntext, "Shopping cart is empty");
		
		
	}
	
	@After 
    public void afterScenario(Scenario Scenario ) {
		boolean failed=Scenario.isFailed();
		System.out.println(failed);
		//only failed scenario take screen shot
//		if(true) {
//			byte[] ScreenshotAs= driver.getScreenshotAs(OutputType.BYTES);
//		Scenario.embed(ScreenshotAs, "image/png");
//		}
		byte[] screenShotAs = driver.getScreenshotAs(OutputType.BYTES);
		Scenario.embed(screenShotAs, "image/png");
	}
}
