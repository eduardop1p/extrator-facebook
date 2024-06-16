import fs from 'fs/promises';
// import os from 'os';

import PeoplesProtocol from '../interfaces/peoplesProtocol';

interface Props {
  data: PeoplesProtocol[];
  filePath: string;
}

export default async function saveCSV({ data, filePath }: Props) {
  const csvData = convertToCSV(data); // Converter os dados para CSV

  try {
    await fs.writeFile(filePath, csvData, 'utf8'); // Escrever o CSV no arquivo
    console.log('Arquivo salvo com sucesso!');
  } catch (err) {
    console.error('Erro ao salvar o arquivo:', err);
  }
}

function convertToCSV(data: PeoplesProtocol[]) {
  const headers = Object.keys(data[0]).join(','); // Obter cabeçalhos
  const rows = data.map(obj => Object.values(obj).join(',')); // Obter valores
  return [headers, ...rows].join('\n'); // Combinar cabeçalhos e valores
}
