"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-constant-condition */
const selenium_webdriver_1 = require("selenium-webdriver");
const whileFindElement_1 = __importDefault(require("../functions/whileFindElement"));
const saveCSV_1 = __importDefault(require("../functions/saveCSV"));
const parseCSVtoArray_1 = __importDefault(require("../functions/parseCSVtoArray"));
async function getPeoples({ driver, filePath }) {
    while (true) {
        const peoples = await (0, parseCSVtoArray_1.default)(filePath);
        const container = await (0, whileFindElement_1.default)({
            driver,
            selector: selenium_webdriver_1.By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div'),
        });
        const elements = await driver.wait(container.findElements(selenium_webdriver_1.By.css('span > div > a')), 20000);
        for (const element of elements) {
            await driver.sleep(1000);
            await driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 20000);
            await driver.executeScript('arguments[0].scrollIntoView(true);', element);
            await driver.executeScript('window.scrollBy(0, -100);');
            const currentUrl = await element.getAttribute('href');
            let id = new URLSearchParams(currentUrl.split('?').slice(-1).join('')).get('id'); // eslint-disable-line
            if (!id)
                id = currentUrl.split('/').slice(-1).join('');
            if (peoples.map(val => val.id).includes(id))
                continue;
            const safePoint = { x: 0, y: 0 }; // Ponto seguro pode ser (0, 0) ou outro ponto onde o modal não seja acionado
            const actions = driver.actions({ async: true, bridge: true });
            await actions.move({ x: safePoint.x, y: safePoint.y }).perform();
            await actions.move({ origin: element }).click().perform();
            const elementName = await (0, whileFindElement_1.default)({
                driver,
                selector: selenium_webdriver_1.By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div/div/div[3]/div/div/div[1]/div/div/span/h1'),
            });
            const userName = await elementName.getText();
            peoples.push({
                id,
                link: currentUrl,
                name: userName,
            });
            await (0, saveCSV_1.default)({ data: peoples, filePath });
            await driver.navigate().back();
        }
    }
}
exports.default = getPeoples;
