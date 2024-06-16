import { By, WebDriver, WebElement } from 'selenium-webdriver';

interface Props {
  driver: WebDriver;
  selector: By;
}

export default async function whileFindElement({ driver, selector }: Props) {
  let element: WebElement | null = null;
  while (!element) {
    try {
      element = await driver.findElement(selector);
    } catch (err) {} // eslint-disable-line
    await driver.sleep(500);
  }
  return element;
}
