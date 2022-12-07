import { WebDriver, Builder, By } from "selenium-webdriver";

async function Test1(): Promise<void> {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.training-support.net");
    await driver.findElement(By.css("#about-link")).click();
    await driver.findElement(By.css(".ui button"));
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

Test1();
