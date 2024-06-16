"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function elementFocus({ driver, element }) {
    await driver.executeScript('arguments[0].focus();', element);
}
exports.default = elementFocus;
