import { By, WebDriver, WebElement } from 'selenium-webdriver';

interface Props {
  driver: WebDriver;
  selector: By;
}

export default async function whileFindElements({ driver, selector }: Props) {
  let elements: WebElement[] = [];
  while (!elements.length) {
    try {
      elements = await driver.findElements(selector);
    } catch (err) {} // eslint-disable-line
    await driver.sleep(500);
  }
  return elements;
}
