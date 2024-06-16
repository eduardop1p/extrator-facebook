import { Browser, Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export default async function driverInstance() {
  const options = new chrome.Options();
  options.addArguments('--headless'); // Configura o Chrome para executar em modo headless
  options.addArguments('--disable-gpu'); // Necessário para o modo headless no Windows
  options.addArguments('--no-sandbox'); // Necessário para o modo headless no Linux
  options.addArguments('--disable-dev-shm-usage'); // Necessário para o modo headless no Linux
  options.addArguments('--disable-notifications');

  const driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();
  return driver;
}
