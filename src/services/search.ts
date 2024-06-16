import { By, Key, WebDriver } from 'selenium-webdriver';
import elementFocus from '../functions/elementFocus';
import elementInsertText from '../functions/elementInsertText';
import whileFindElement from '../functions/whileFindElement';

interface Props {
  driver: WebDriver;
  searchQuery: string;
}

export default async function search({ driver, searchQuery }: Props) {
  const inputSearch = driver.findElement(By.css('input[type="search"]'));
  await elementFocus({ driver, element: inputSearch });
  await elementInsertText({ element: inputSearch, text: searchQuery });
  await inputSearch.sendKeys(Key.RETURN);
  const elementPeoples = await whileFindElement({
    driver,
    selector: By.xpath(
      '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div/div[2]/div/div[3]/div[1]/a'
    ),
  });
  await elementPeoples.click();
  await driver.sleep(1000);
}
