import login from './services/login';
import search from './services/search';
import getPeoples from './services/getPeoples';
import { WebDriver } from 'selenium-webdriver';
import path from 'path';
// import driverInstance from './config/driverInstance';

interface Props {
  driver: WebDriver;
  filePath: string;
  email: string;
  password: string;
  searchQuery: string;
}

export default async function init({
  driver,
  email,
  filePath,
  password,
  searchQuery,
}: Props) {
  filePath = path.join(filePath, 'extrator-facebook-users.txt');

  await driver.get('https://facebook.com/login/');
  await login({ driver, email, password });
  await search({ driver, searchQuery });
  await getPeoples({ driver, filePath });
}

// export default async function init() {
//   const driver = await driverInstance();
//   const email = 'elavouradeoliveira@gmail.com';
//   const password = 'senhapass@#%&p1pkkk';
//   const coutn = 'portugal';
//   const filePath = path.join(__dirname, 'extrator-facebook-users.txt');

//   try {
//     await driver.get('https://facebook.com/login/');
//     await login({ driver, email, password });
//     await search({ driver, searchQuery });
//     await getPeoples({ driver, filePath });
//   } catch (err) {
//     console.log(err);
//   } finally {
//     // await driver.quit();
//   }
// }

// init();
