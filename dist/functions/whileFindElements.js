"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function whileFindElements({ driver, selector }) {
    let elements = [];
    while (!elements.length) {
        try {
            elements = await driver.findElements(selector);
        }
        catch (err) { } // eslint-disable-line
        await driver.sleep(500);
    }
    return elements;
}
exports.default = whileFindElements;
