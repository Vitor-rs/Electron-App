import { contextBridge, ipcRenderer } from 'electron'

// Typed API exposed to renderer
export const electronAPI = {
  invoke: <T>(channel: string, ...args: unknown[]): Promise<T> => {
    return ipcRenderer.invoke(channel, ...args) as Promise<T>
  },
  on: (channel: string, callback: (...args: unknown[]) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, ...args: unknown[]) => {
      callback(...args)
    }
    ipcRenderer.on(channel, subscription)
    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
} as const

contextBridge.exposeInMainWorld('electronAPI', electronAPI)

// Type augmentation for renderer
declare global {
  interface Window {
    electronAPI: typeof electronAPI
  }
}
