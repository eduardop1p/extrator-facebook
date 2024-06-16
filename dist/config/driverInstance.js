"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
async function driverInstance() {
    const options = new chrome_1.default.Options();
    options.addArguments('--headless'); // Configura o Chrome para executar em modo headless
    options.addArguments('--disable-gpu'); // Necessário para o modo headless no Windows
    options.addArguments('--no-sandbox'); // Necessário para o modo headless no Linux
    options.addArguments('--disable-dev-shm-usage'); // Necessário para o modo headless no Linux
    options.addArguments('--disable-notifications');
    const driver = await new selenium_webdriver_1.Builder()
        .forBrowser(selenium_webdriver_1.Browser.CHROME)
        .setChromeOptions(options)
        .build();
    return driver;
}
exports.default = driverInstance;
