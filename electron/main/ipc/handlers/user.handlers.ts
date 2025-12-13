import type { IpcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { users, type NewUser } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function registerUserHandlers(ipcMain: IpcMain): void {
  ipcMain.handle('users:getAll', async () => {
    const db = getDatabase()
    return db.select().from(users)
  })

  ipcMain.handle('users:getById', async (_, id: string) => {
    const db = getDatabase()
    const [user] = await db.select().from(users).where(eq(users.id, id))
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    return user || null
  })

  ipcMain.handle('users:create', async (_, data: NewUser) => {
    const db = getDatabase()
    const [user] = await db.insert(users).values(data).returning()
    return user
  })

  ipcMain.handle('users:update', async (_, id: string, data: Partial<NewUser>) => {
    const db = getDatabase()
    const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning()
    return user
  })

  ipcMain.handle('users:delete', async (_, id: string) => {
    const db = getDatabase()
    await db.delete(users).where(eq(users.id, id))
    return true
  })
}
