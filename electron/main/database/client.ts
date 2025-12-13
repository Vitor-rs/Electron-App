import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { app } from 'electron'
import { join } from 'node:path'
import * as schema from './schema'

const DB_NAME = 'app-data.db'

function getDatabasePath(): string {
  const userDataPath = app.getPath('userData')
  return join(userDataPath, DB_NAME)
}

let sqlite: Database.Database | null = null
let db: ReturnType<typeof drizzle<typeof schema>> | null = null

export function getDatabase(): ReturnType<typeof drizzle<typeof schema>> {
  if (!db) {
    sqlite = new Database(getDatabasePath())
    sqlite.pragma('journal_mode = WAL')
    sqlite.pragma('foreign_keys = ON')
    db = drizzle(sqlite, { schema })
  }
  return db
}

export function closeDatabase(): void {
  if (sqlite) {
    sqlite.close()
    sqlite = null
    db = null
  }
}
