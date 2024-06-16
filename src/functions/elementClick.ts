import { WebElement } from 'selenium-webdriver';

export default async function elementClick(element: WebElement) {
  await element.click();
}
