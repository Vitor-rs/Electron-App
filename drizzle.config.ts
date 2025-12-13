import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './electron/main/database/schema.ts',
  out: './electron/main/database/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './dev.db', // Development database
  },
})
