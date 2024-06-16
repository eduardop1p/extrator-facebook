"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
async function saveCSV({ data, filePath }) {
    const csvData = convertToCSV(data); // Converter os dados para CSV
    try {
        await promises_1.default.writeFile(filePath, csvData, 'utf8'); // Escrever o CSV no arquivo
        console.log('Arquivo salvo com sucesso!');
    }
    catch (err) {
        console.error('Erro ao salvar o arquivo:', err);
    }
}
exports.default = saveCSV;
function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(','); // Obter cabeçalhos
    const rows = data.map(obj => Object.values(obj).join(',')); // Obter valores
    return [headers, ...rows].join('\n'); // Combinar cabeçalhos e valores
}
