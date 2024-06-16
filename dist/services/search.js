"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const elementFocus_1 = __importDefault(require("../functions/elementFocus"));
const elementInsertText_1 = __importDefault(require("../functions/elementInsertText"));
const whileFindElement_1 = __importDefault(require("../functions/whileFindElement"));
async function search({ driver, searchQuery }) {
    const inputSearch = driver.findElement(selenium_webdriver_1.By.css('input[type="search"]'));
    await (0, elementFocus_1.default)({ driver, element: inputSearch });
    await (0, elementInsertText_1.default)({ element: inputSearch, text: searchQuery });
    await inputSearch.sendKeys(selenium_webdriver_1.Key.RETURN);
    const elementPeoples = await (0, whileFindElement_1.default)({
        driver,
        selector: selenium_webdriver_1.By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div/div[2]/div/div[3]/div[1]/a'),
    });
    await elementPeoples.click();
    await driver.sleep(1000);
}
exports.default = search;
