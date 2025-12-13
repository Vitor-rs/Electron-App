import { contextBridge, ipcRenderer } from 'electron'
import type { IpcEvents } from '@shared/types/ipc'

// Security: Allowed IPC channels whitelist
// This prevents renderer from invoking arbitrary IPC channels
const ALLOWED_CHANNELS = new Set<keyof IpcEvents>([
  'users:getAll',
  'users:getById',
  'users:create',
  'users:update',
  'users:delete',
])

// Security: Validate channel before invoking
function validateChannel(channel: string): channel is keyof IpcEvents {
  return ALLOWED_CHANNELS.has(channel as keyof IpcEvents)
}

// Typed API exposed to renderer
export const electronAPI = {
  invoke: <K extends keyof IpcEvents>(
    channel: K,
    ...args: IpcEvents[K]['request']
  ): Promise<IpcEvents[K]['response']> => {
    // Security: Only allow whitelisted channels
    if (!validateChannel(channel)) {
      return Promise.reject(new Error(`[Security] IPC channel "${String(channel)}" is not allowed`))
    }
    return ipcRenderer.invoke(channel, ...args) as Promise<IpcEvents[K]['response']>
  },
  on: (channel: string, callback: (...args: unknown[]) => void) => {
    // Security: Validate channel for listeners too
    if (!validateChannel(channel)) {
      console.warn(`[Security] IPC channel "${channel}" is not allowed for listeners`)
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
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
