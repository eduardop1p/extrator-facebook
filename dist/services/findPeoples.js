"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-const */
const selenium_webdriver_1 = require("selenium-webdriver");
const whileFindElement_1 = __importDefault(require("../functions/whileFindElement"));
async function findPeoples(driver) {
    let links = await (0, whileFindElement_1.default)({
        driver,
        selector: selenium_webdriver_1.By.xpath('/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div[3]/a'),
    });
    await links.click();
}
exports.default = findPeoples;
