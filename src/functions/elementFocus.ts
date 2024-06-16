import { WebDriver, WebElement } from 'selenium-webdriver';

interface Props {
  driver: WebDriver;
  element: WebElement;
}

export default async function elementFocus({ driver, element }: Props) {
  await driver.executeScript('arguments[0].focus();', element);
}
