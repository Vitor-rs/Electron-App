> [!IMPORTANT]
> **If you are on Windows and troubleshooting:**
> If `npm run dev` fails with "Cannot read properties of undefined (reading 'whenReady')" or similar errors, check if you have `ELECTRON_RUN_AS_NODE` environment variable set.
> The `npm run dev` script is configured to use `dev.bat` which automatically clears this variable.

## Project Structure

- `electron/`: Main process and Preload scripts
- `src/`: Renderer process (React)
- `src/features/`: Feature-based architecture
- `dev.bat`: Helper script for Windows development environment

## Getting Started

```bash
npm install
npm run dev
```

## Database

The project uses `better-sqlite3` with `drizzle-orm`. The database file is stored in `userData`.
