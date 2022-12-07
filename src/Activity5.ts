import { Builder, By, until } from "selenium-webdriver";


async function Test(): Promise<void> {

    const driver = await new Builder().forBrowser("chrome").build();
    const actions = driver.actions({ async: true });

    await driver.get("https://www.training-support.net/selenium/input-events");

    try {
       
        
        console.log(`The Number on the Face is : ${await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1"))).getText()}`)

        await actions.click(await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1")),3000)).perform();
        console.log(`The Number on the Face is : ${await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1"))).getText()}`)

        await actions.doubleClick(await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1")),3000)).perform();
        console.log(`The Number on the Face is : ${await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1"))).getText()}`)

        await actions.contextClick(await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1")),3000)).perform();
        console.log(`The Number on the Face is : ${await driver.wait(until.elementLocated(By.xpath("//div[contains(@id,'side') and @class='active']/h1"))).getText()}`)

    } finally {
        await driver.quit();
    }
}

Test();