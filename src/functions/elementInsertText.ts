import { WebElement } from 'selenium-webdriver';

interface Props {
  element: WebElement;
  text: string;
}

export default async function elementInsertText({ element, text }: Props) {
  await element.sendKeys(text);
}
