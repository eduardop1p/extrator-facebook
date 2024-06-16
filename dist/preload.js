"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electron', {
    selectDirs: () => electron_1.ipcRenderer.invoke('select-dirs'),
    ipcRenderer: {
        send: (channel, data) => electron_1.ipcRenderer.send(channel, data),
        on: (channel, listener) => electron_1.ipcRenderer.on(channel, listener),
    },
});
