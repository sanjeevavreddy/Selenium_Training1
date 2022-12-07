import { Builder, By } from "selenium-webdriver";

async function Test(): Promise<void> {
  const driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.training-support.net/selenium/selects");

  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown.findElement(By.xpath("//option[. = 'Javascript']")).click();
  }
  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown
      .findElement(By.xpath("//option[. = 'Graphic Design']"))
      .click();
  }
  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown.findElement(By.xpath("//option[. = 'Ember']")).click();
  }
  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown.findElement(By.xpath("//option[. = 'HTML']")).click();
  }
  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown.findElement(By.xpath("//option[. = 'NodeJS']")).click();
  }
  {
    const dropdown = await driver.findElement(By.id("multi-select"));
    await dropdown.findElement(By.xpath("//option[. = 'HTML']")).click();
  }
}

Test();
