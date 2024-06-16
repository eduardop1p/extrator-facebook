import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';
import { WebDriver } from 'selenium-webdriver';

import StartSeleniumProtocol from './interfaces/startSeleniumProtocol';
import driverInstance from './config/driverInstance';
import init from './driver';

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('../public/index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('select-dirs', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });
  return result.filePaths;
});

let driver: WebDriver | null = null;

ipcMain.on('start-selenium', async (event, args: StartSeleniumProtocol) => {
  try {
    if (driver) {
      await driver.quit();
    }
    driver = await driverInstance();
    await init({ driver, ...args });
  } catch {
    if (driver) {
      await driver.quit();
      driver = null;
    }
    event.reply('error-selenium');
  }
});

ipcMain.on('quit-selenium', async () => {
  if (driver) {
    await driver.quit();
    driver = null;
  }
});
