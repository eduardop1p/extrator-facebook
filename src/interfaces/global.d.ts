import { type IpcRenderer } from 'electron';

// global.d.ts
export interface ElectronAPI {
  selectDirs: () => Promise<string[]>;
  ipcRenderer: IpcRenderer;
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
