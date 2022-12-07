import {
  Builder,
  By,
  Key,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";

async function Test(): Promise<void> {
  const driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.training-support.net/selenium/tables");

  await driver.manage().setTimeouts({ implicit: 10000 });
  try {
  } finally {
    // await driver.quit();
  }
}

Test();

async function findValueFromTable(
  driver: WebDriver,
  tableElement: WebElement,
  column: number,
  row: number
): Promise<string> {
  return (
    await (
      await tableElement.findElements(By.xpath("tbody/tr"))
    )[column + 1].findElements(By.xpath("td"))
  )[row + 1].getText();
}
