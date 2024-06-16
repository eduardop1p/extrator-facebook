import { By, WebDriver } from 'selenium-webdriver';
import elementFocus from '../functions/elementFocus';
import elementInsertText from '../functions/elementInsertText';
import elementClick from '../functions/elementClick';

interface Props {
  driver: WebDriver;
  email: string;
  password: string;
}

export default async function login({ driver, email, password }: Props) {
  const inputEmail = await driver.findElement(By.id('email'));
  await elementFocus({ driver, element: inputEmail });
  await elementInsertText({
    element: inputEmail,
    text: email,
  });

  const inputPassword = await driver.findElement(By.id('pass'));
  await elementFocus({ driver, element: inputPassword });
  await elementInsertText({
    element: inputPassword,
    text: password,
  });

  const buttonLogin = await driver.findElement(By.id('loginbutton'));
  await elementClick(buttonLogin);
}
