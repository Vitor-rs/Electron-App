import { ipcMain } from 'electron'
import { registerUserHandlers } from './handlers/user.handlers'

export function registerIpcHandlers(): void {
  // Register all IPC handlers
  registerUserHandlers(ipcMain)
}
