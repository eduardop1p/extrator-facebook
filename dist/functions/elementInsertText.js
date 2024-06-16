"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function elementInsertText({ element, text }) {
    await element.sendKeys(text);
}
exports.default = elementInsertText;
