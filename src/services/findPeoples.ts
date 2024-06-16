/* eslint-disable prefer-const */
import { By, WebDriver } from 'selenium-webdriver';
import whileFindElement from '../functions/whileFindElement';

export default async function findPeoples(driver: WebDriver) {
  let links = await whileFindElement({
    driver,
    selector: By.xpath(
      '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div[3]/a'
    ),
  });
  await links.click();
}
