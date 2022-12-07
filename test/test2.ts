import assert from "assert";
import { Builder, By, WebDriver } from "selenium-webdriver";

describe("Selenium Tests", function () {
  this.timeout(0);

  let driver: WebDriver;
  before("Open the Browser", async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Should pass", async function () {
    try {
      await driver.get("https://www.training-support.net");
      await driver.findElement(By.css("#about-link")).click();
      await driver.findElement(By.xpath("//h1[@class='ui header']"));
      assert.equal(
        await driver
          .findElement(By.xpath("//h1[@class='ui header']"))
          .getText(),
        "About Us"
      );
    } catch (error) {
      assert.fail(`Test failed with reason :${error}`);
    }
  });

  after("Open the Browser", async function () {
    await driver.quit();
  });
});
