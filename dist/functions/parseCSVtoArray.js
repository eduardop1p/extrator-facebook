"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const promises_1 = __importDefault(require("fs/promises"));
async function parseCSVtoArray(filePath) {
    // const filePath = path.join(__dirname, '..', '..', 'facebook-users.txt');
    try {
        const csvData = await promises_1.default.readFile(filePath, 'utf8');
        const data = parseCSV(csvData);
        return data;
    }
    catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}
exports.default = parseCSVtoArray;
function parseCSV(csvData) {
    const [headerLine, ...lines] = csvData.split('\n');
    const headers = headerLine.split(',');
    return lines.map(line => {
        const values = line.split(',');
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });
}
