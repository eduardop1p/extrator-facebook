"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function whileFindElement({ driver, selector }) {
    let element = null;
    while (!element) {
        try {
            element = await driver.findElement(selector);
        }
        catch (err) { } // eslint-disable-line
        await driver.sleep(500);
    }
    return element;
}
exports.default = whileFindElement;
