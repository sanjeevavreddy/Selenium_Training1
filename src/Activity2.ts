import { WebDriver, Builder, By } from "selenium-webdriver";

async function Test1(): Promise<void> {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.training-support.net/selenium/login-form");

        console.log(await driver.getTitle())

        await driver.findElement(By.css("#username")).sendKeys("admin");
        await driver.findElement(By.css("#password")).sendKeys("password");

        await driver.findElement(By.xpath("(//button)[position()>1]")).click();

        await driver.manage().setTimeouts({ 'implicit': 10000 });

        await driver.findElement(By.css("#action-confirmation"));

       
    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }

}

Test1();
