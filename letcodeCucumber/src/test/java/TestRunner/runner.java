package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		//features = {"src/test/java/features/login.feature"},
		features = {"src/test/java/features/addcart.feature"},
		dryRun = !true,
		//glue="steps",
		glue= {"steps","Hooks"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		plugin = "com.aventstack.extent reports.cucumber.adapter.ExtentCucumber Adapter; "
		//report
		//plugin = {"pretty","html:report","junit:report/result.xml"}
		//tags   = {"@failtest"}
		
				
		)
public class runner extends AbstractTestNGCucumberTests {

}
