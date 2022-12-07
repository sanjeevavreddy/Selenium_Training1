import { Builder, By, Key, until, WebDriver, WebElement } from "selenium-webdriver";


async function Test(): Promise<void> {

    const driver = await new Builder().forBrowser("chrome").build();
    const actions = driver.actions({ async: true });

    await driver.get("https://www.training-support.net/selenium/drag-drop");

    try {

        const ball = await driver.findElement(By.id("draggable"));
        const drop1 = await driver.findElement(By.id("droppable"));
        const drop2 = await driver.findElement(By.id("dropzone2"));

    
        await actions.move({ origin: ball }).press().move({ origin: drop1 }).release().perform();
        console.log(await findelement(driver,By.xpath("//div[@id='droppable']/p")));

        await actions.move({ origin: ball }).press().move({ origin: drop2 }).release().perform();
        console.log(await findelement(driver,By.xpath("//div[@id='dropzone2']/p")));


    } finally {
        // await driver.quit();

    }
}

async function findelement(driver:WebDriver,locator:By):Promise<boolean>{
    try{
        await driver.findElement(locator);
        return true;
    }catch(err)
    {
        return false;
    }
}

Test();