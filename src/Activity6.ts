import { Builder, By, Key, until } from "selenium-webdriver";


async function Test(): Promise<void> {

    const driver = await new Builder().forBrowser("chrome").build();
    const actions = driver.actions({ async: true });

    await driver.get("https://www.facebook.com/");

    try {
       
       await driver.findElement(By.css("#email")).sendKeys("SANJEEVA");

        await actions.click(await driver.findElement(By.css("#email"))).perform();

        await actions.keyDown(Key.CONTROL).sendKeys("ac").keyDown(Key.DOWN).perform();

        await actions.click(await driver.findElement(By.css("#pass"))).perform();

        await actions.keyDown(Key.CONTROL).sendKeys("v").keyUp(Key.CONTROL).perform();

    } finally {
        // await driver.quit();

    }
}

Test();