import { contextBridge, ipcRenderer } from 'electron'
import type { IpcEvents } from '@shared/types/ipc'

// Typed API exposed to renderer
export const electronAPI = {
  invoke: <K extends keyof IpcEvents>(
    channel: K,
    ...args: IpcEvents[K]['request']
  ): Promise<IpcEvents[K]['response']> => {
    return ipcRenderer.invoke(channel, ...args) as Promise<IpcEvents[K]['response']>
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
