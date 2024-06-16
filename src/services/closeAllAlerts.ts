import { WebDriver, until } from 'selenium-webdriver';

export default async function closeAllAlerts(driver: WebDriver) {
  let alertPresent = true;

  while (alertPresent) {
    try {
      // Wait for the alert to be present
      await driver.wait(until.alertIsPresent(), 500);

      // Switch to the alert and accept it
      const alert = await driver.switchTo().alert();
      await alert.accept();
    } catch (error) {
      // If an error occurs (e.g., timeout), no more alerts are present
      alertPresent = false;
    }
  }
}
