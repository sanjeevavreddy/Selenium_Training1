import { Builder, By } from "selenium-webdriver";
(async function () {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get(
            "https://www.training-support.net/selenium/target-practice"
        );
        console.log(`The title of the page is: ${await driver.getTitle()}`);
        console.log(
            `The 3rd header's text is: ${await driver
                .findElement(By.xpath("//h3"))
                .getText()}`
        );
        console.log(
            `The 5th header's color is: ${await driver
                .findElement(By.xpath("//h5"))
                .getCssValue("color")}`
        );
        console.log(
            `The violet button's classes is: ${await driver
                .findElement(By.css(".violet"))
                .getAttribute("class")}`
        );
        console.log(
            `The grey button's text is: ${await driver
                .findElement(By.css(".grey"))
                .getText()}`
        );
    } finally {
        await driver.quit();
    }
})();