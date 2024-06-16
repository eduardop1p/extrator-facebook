"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const elementFocus_1 = __importDefault(require("../functions/elementFocus"));
const elementInsertText_1 = __importDefault(require("../functions/elementInsertText"));
const elementClick_1 = __importDefault(require("../functions/elementClick"));
async function login({ driver, email, password }) {
    const inputEmail = await driver.findElement(selenium_webdriver_1.By.id('email'));
    await (0, elementFocus_1.default)({ driver, element: inputEmail });
    await (0, elementInsertText_1.default)({
        element: inputEmail,
        text: email,
    });
    const inputPassword = await driver.findElement(selenium_webdriver_1.By.id('pass'));
    await (0, elementFocus_1.default)({ driver, element: inputPassword });
    await (0, elementInsertText_1.default)({
        element: inputPassword,
        text: password,
    });
    const buttonLogin = await driver.findElement(selenium_webdriver_1.By.id('loginbutton'));
    await (0, elementClick_1.default)(buttonLogin);
}
exports.default = login;
