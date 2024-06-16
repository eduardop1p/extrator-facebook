/* eslint-disable no-constant-condition */
import { By, WebDriver, until } from 'selenium-webdriver';

import whileFindElement from '../functions/whileFindElement';
import saveCSV from '../functions/saveCSV';
import parseCSVtoArray from '../functions/parseCSVtoArray';

interface Props {
  driver: WebDriver;
  filePath: string;
}

export default async function getPeoples({ driver, filePath }: Props) {
  while (true) {
    const peoples = await parseCSVtoArray(filePath);
    const container = await whileFindElement({
      driver,
      selector: By.xpath(
        '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div'
      ),
    });
    const elements = await driver.wait(
      container.findElements(By.css('span > div > a')),
      20000
    );
    for (const element of elements) {
      await driver.sleep(1000);
      await driver.wait(until.elementIsVisible(element), 20000);
      await driver.executeScript('arguments[0].scrollIntoView(true);', element);
      await driver.executeScript('window.scrollBy(0, -100);');

      const currentUrl = await element.getAttribute('href');
      let id: string | null = new URLSearchParams(currentUrl.split('?').slice(-1).join('')).get('id'); // eslint-disable-line
      if (!id) id = currentUrl.split('/').slice(-1).join('');
      if (peoples.map(val => val.id).includes(id)) continue;

      const safePoint = { x: 0, y: 0 }; // Ponto seguro pode ser (0, 0) ou outro ponto onde o modal não seja acionado
      const actions = driver.actions({ async: true, bridge: true });
      await actions.move({ x: safePoint.x, y: safePoint.y }).perform();
      await actions.move({ origin: element }).click().perform();

      const elementName = await whileFindElement({
        driver,
        selector: By.xpath(
          '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/div[3]/div/div/div[1]/div/div/span/h1'
        ),
      });
      const userName = await elementName.getText();

      peoples.push({
        id,
        link: currentUrl,
        name: userName,
      });
      await saveCSV({ data: peoples, filePath });
      await driver.navigate().back();
    }
  }
}
