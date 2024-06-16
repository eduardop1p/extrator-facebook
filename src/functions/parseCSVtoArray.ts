/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';

import PeoplesProtocol from '../interfaces/peoplesProtocol';

export default async function parseCSVtoArray(filePath: string) {
  // const filePath = path.join(__dirname, '..', '..', 'facebook-users.txt');

  try {
    const csvData = await fs.readFile(filePath, 'utf8');
    const data = parseCSV(csvData) as PeoplesProtocol[];
    return data;
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return [];
  }
}

function parseCSV(csvData: string) {
  const [headerLine, ...lines] = csvData.split('\n');
  const headers = headerLine.split(',');

  return lines.map(line => {
    const values = line.split(',');
    return headers.reduce((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {} as any);
  });
}
