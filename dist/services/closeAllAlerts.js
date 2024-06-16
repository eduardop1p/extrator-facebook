"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
async function closeAllAlerts(driver) {
    let alertPresent = true;
    while (alertPresent) {
        try {
            // Wait for the alert to be present
            await driver.wait(selenium_webdriver_1.until.alertIsPresent(), 500);
            // Switch to the alert and accept it
            const alert = await driver.switchTo().alert();
            await alert.accept();
        }
        catch (error) {
            // If an error occurs (e.g., timeout), no more alerts are present
            alertPresent = false;
        }
    }
}
exports.default = closeAllAlerts;
