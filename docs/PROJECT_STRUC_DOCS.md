# Documentação do Projeto

> Gerado automaticamente em 18/12/2025 21:48:13
> Caminho documentado: `C:\Users\Vitor\Documents\projetos\Templates\Electron-App`

## Estrutura de Arquivos

```text
Electron-App
+--- .github
|    +--- agents
|    |    \--- electron-architect.agent.md
|    +--- copilot-instructions.md
|    +--- prompts
|    |    +--- scaffold-feature.prompt.md
|    |    +--- verify-project.prompt.md
|    |    \--- view-project-tree.prompt.md
|    \--- workflows
|         \--- security-audit.yml
+--- .gitignore
+--- .husky
|    +--- commit-msg
|    \--- pre-commit
+--- .lintstagedrc.mjs
+--- .template
|    +--- ARCHITECTURE.md
|    \--- SECURITY.md
+--- Electron-App.code-workspace
+--- README.md
+--- commitlint.config.mjs
+--- components.json
+--- dev.bat
+--- doc.bat
+--- docs
|    \--- README.md
+--- drizzle.config.ts
+--- electron
|    +--- main
|    |    +--- database
|    |    |    +--- client.ts
|    |    |    \--- schema.ts
|    |    +--- index.ts
|    |    \--- ipc
|    |         +--- handlers
|    |         |    \--- user.handlers.ts
|    |         \--- index.ts
|    \--- preload
|         \--- index.ts
+--- electron-builder.yml
+--- electron.vite.config.ts
+--- eslint.config.mjs
+--- index.html
+--- package.json
+--- plop-templates
|    +--- component
|    |    +--- component.tsx.hbs
|    |    \--- index.ts.hbs
|    +--- feature
|    |    +--- handler.ts.hbs
|    |    +--- index.ts.hbs
|    |    +--- schema.ts.hbs
|    |    +--- service.ts.hbs
|    |    +--- store.ts.hbs
|    |    \--- types.ts.hbs
|    \--- store
|         \--- store.ts.hbs
+--- plopfile.mjs
+--- postcss.config.mjs
+--- prettier.config.mjs
+--- scripts
|    +--- doc_project.py
|    +--- log_lint.ps1
|    \--- tree_shadcn.py
+--- src
|    +--- App.tsx
|    +--- app
|    |    +--- components
|    |    |    \--- AppSidebar.tsx
|    |    +--- layouts
|    |    |    \--- RootLayout.tsx
|    |    +--- providers
|    |    |    \--- ThemeProvider.tsx
|    |    \--- router
|    |         \--- index.tsx
|    +--- features
|    |    +--- home
|    |    |    +--- components
|    |    |    |    \--- HomePage.tsx
|    |    |    \--- index.ts
|    |    \--- users
|    |         +--- index.ts
|    |         +--- schemas
|    |         |    \--- user.schema.ts
|    |         +--- services
|    |         |    \--- user.service.ts
|    |         \--- stores
|    |              \--- user.store.ts
|    +--- index.css
|    +--- main.tsx
|    \--- shared
|         +--- components
|         |    \--- ui
|         |         +--- .gitkeep
|         |         +--- badge.tsx
|         |         +--- button.tsx
|         |         +--- card.tsx
|         |         +--- input.tsx
|         |         +--- scroll-area.tsx
|         |         +--- separator.tsx
|         |         +--- sheet.tsx
|         |         +--- sidebar.tsx
|         |         +--- skeleton.tsx
|         |         \--- tooltip.tsx
|         +--- hooks
|         |    +--- .gitkeep
|         |    \--- use-mobile.ts
|         +--- lib
|         |    \--- utils.ts
|         +--- schemas
|         |    \--- .gitkeep
|         +--- stores
|         |    \--- .gitkeep
|         \--- types
|              +--- .gitkeep
|              \--- ipc.ts
+--- tailwind.config.js
+--- tsconfig.json
+--- tsconfig.node.json
+--- tsconfig.preload.json
\--- tsconfig.web.json
```

## Conteúdo dos Arquivos

## .gitignore

```
node_modules
dist
out
*.log
*.db
.env
.env.local
.DS_Store
Thumbs.db

```

## .lintstagedrc.mjs

```mjs
export default {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,css}': ['prettier --write'],
}

```

## Electron-App.code-workspace

```code-workspace
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.organizeImports": "never"
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "typescript.tsdk": "node_modules/typescript/lib",
    "files.associations": {
      "*.css": "tailwindcss"
    },
    "tailwindCSS.experimental.classRegex": [
      ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
      ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
      ["clsx\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ],
    "editor.quickSuggestions": {
      "strings": true
    },
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "search.exclude": {
      "**/node_modules": true,
      "**/dist": true,
      "**/out": true
    },
    "files.exclude": {
      "**/.git": true,
      "**/node_modules": true,
      "**/dist": true,
      "**/out": true
    }
  },
  "extensions": {
    "recommendations": [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode",
      "bradlc.vscode-tailwindcss",
      "ms-vscode.vscode-typescript-next",
      "formulahendry.auto-rename-tag",
      "christian-kohler.path-intellisense",
      "usernamehw.errorlens",
      "miguelsolorio.fluent-icons"
    ]
  },
  "launch": {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Main Process",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceFolder}",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron-vite",
        "windows": {
          "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron-vite.cmd"
        },
        "runtimeArgs": ["--sourcemap"],
        "env": {
          "REMOTE_DEBUGGING_PORT": "9222"
        }
      },
      {
        "name": "Debug Renderer Process",
        "type": "chrome",
        "request": "attach",
        "port": 9222,
        "webRoot": "${workspaceFolder}/src",
        "timeout": 60000
      }
    ],
    "compounds": [
      {
        "name": "Debug All",
        "configurations": ["Debug Main Process", "Debug Renderer Process"]
      }
    ]
  }
}

```

## README.md

```markdown
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

```

## commitlint.config.mjs

```mjs
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova feature
        'fix',      // correção de bug
        'docs',     // documentação
        'style',    // formatação (não afeta lógica)
        'refactor', // refatoração
        'perf',     // performance
        'test',     // testes
        'build',    // build system
        'ci',       // CI/CD
        'chore',    // manutenção
        'revert',   // reverter commit
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
  },
}

```

## components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/shared/components",
    "utils": "@/shared/lib/utils",
    "ui": "@/shared/components/ui",
    "lib": "@/shared/lib",
    "hooks": "@/shared/hooks"
  },
  "iconLibrary": "lucide"
}

```

## dev.bat

```batch
@echo off
set "ELECTRON_RUN_AS_NODE="
call ./node_modules/.bin/electron-vite.cmd dev

```

## doc.bat

```batch
@echo off
python "%~dp0scripts\doc_project.py" %*
```

## drizzle.config.ts

```typescript
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './electron/main/database/schema.ts',
  out: './electron/main/database/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: './dev.db', // Development database
  },
})

```

## electron-builder.yml

```yaml
appId: com.electron.app
productName: Electron-app
directories:
  buildResources: resources
  output: dist

# Security: Enable ASAR archive
asar: true

# Auto-update: GitHub Releases configuration
# Uncomment and configure when ready to publish
# publish:
#   provider: github
#   owner: YOUR_GITHUB_USERNAME
#   repo: YOUR_REPO_NAME
#   releaseType: release
files:
  - '!**/.vscode/*'
  - '!src/*'
  - '!electron.vite.config.*'
  - '!{.eslintignore,.eslintrc.cjs,.prettierignore,.prettierrc.yaml,dev-app-update.yml,CHANGELOG.md,README.md}'
  - '!{.env,.env.*,.npmrc,pnpm-lock.yaml}'
  - '!{tsconfig.json,tsconfig.node.json,tsconfig.web.json}'
asarUnpack:
  - resources/**
  - '**/*.node'
win:
  executableName: electron-app
  target:
    - target: nsis
      arch:
        - x64
nsis:
  artifactName: ${name}-${version}-setup.${ext}
  shortcutName: ${productName}
  uninstallDisplayName: ${productName}
  createDesktopShortcut: always
mac:
  target:
    - target: dmg
      arch:
        - x64
        - arm64
linux:
  target:
    - target: AppImage
      arch:
        - x64
extraResources:
  - from: './resources/'
    to: 'resources'
    filter:
      - '**/*'

```

## electron.vite.config.ts

```typescript
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'electron/main/index.ts'),
      },
      rollupOptions: {
        external: ['better-sqlite3'],
      },
    },
    resolve: {
      alias: {
        '@main': resolve(__dirname, 'electron/main'),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: resolve(__dirname, 'electron/preload/index.ts'),
      },
    },
    resolve: {
      alias: {
        '@preload': resolve(__dirname, 'electron/preload'),
      },
    },
  },
  renderer: {
    root: '.',
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'index.html'),
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@features': resolve(__dirname, 'src/features'),
      },
    },
    plugins: [react()],
  },
})

```

## eslint.config.mjs

```mjs
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import unicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'out/**',
      'node_modules/**',
      '.git/**',
      'drizzle/**/*.sql',
      '*.config.mjs',
      'plopfile.mjs',
    ],
  },

  // Base configuration
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // TypeScript parser options for all TS files
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // JS/Config files overrides
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },

  // React configuration
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/shared/components/ui/**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
    },
  },

  // shadcn/ui components - allow exporting variants alongside components
  {
    files: ['src/shared/components/ui/**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
    },
  },

  // Node.js / Electron main process
  // Node.js / Electron main process
  {
    files: ['electron/**/*.ts', '**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Unicorn rules
  {
    plugins: { unicorn },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
    },
  },

  // Custom rules
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },

  // Disable rules that conflict with Prettier
  prettier,
]

```

## index.html

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"
    />
    <title>Electron Template</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## package.json

```json
{
  "name": "electron-app",
  "version": "1.0.0",
  "description": "Electron + React + TypeScript template",
  "main": "./out/main/index.js",
  "author": "Vitor",
  "license": "MIT",
  "scripts": {
    "dev": "dev.bat",
    "build": "electron-vite build",
    "preview": "electron-vite preview",
    "postinstall": "electron-builder install-app-deps",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit -p tsconfig.json --composite false",
    "doc": "python ./scripts/doc_project.py",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "prepare": "husky",
    "generate": "plop",
    "security:audit": "npm audit --audit-level=high",
    "security:check": "npm run lint && npm run typecheck && npm audit --audit-level=moderate"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tooltip": "^1.2.8",
    "better-sqlite3": "^11.3.0",
    "clsx": "^2.1.1",
    "drizzle-orm": "^0.33.0",
    "lucide-react": "^0.441.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.26.1",
    "tailwind-merge": "^2.5.2",
    "zod": "^3.23.8",
    "zustand": "^4.5.5"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.4.1",
    "@commitlint/config-conventional": "^19.4.1",
    "@electron-toolkit/preload": "^3.0.1",
    "@electron-toolkit/tsconfig": "^1.0.1",
    "@electron-toolkit/utils": "^3.0.0",
    "@types/better-sqlite3": "^7.6.11",
    "@types/eslint-config-prettier": "^6.11.3",
    "@types/node": "^20.14.8",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.22",
    "class-variance-authority": "^0.7.1",
    "cross-env": "^10.1.0",
    "drizzle-kit": "^0.24.0",
    "electron": "^31.0.2",
    "electron-builder": "^24.13.3",
    "electron-vite": "^2.3.0",
    "eslint": "^9.9.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "eslint-plugin-unicorn": "^62.0.0",
    "globals": "^16.5.0",
    "husky": "^9.1.5",
    "lint-staged": "^15.2.10",
    "plop": "^4.0.1",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.6",
    "tailwindcss": "^3.4.16",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.4.0",
    "vite": "^5.4.2"
  }
}

```

## plopfile.mjs

```mjs
export default function (plop) {
  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name (kebab-case):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/feature/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/components/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/hooks/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/stores/{{kebabCase name}}.store.ts',
        templateFile: 'plop-templates/feature/store.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/schemas/{{kebabCase name}}.schema.ts',
        templateFile: 'plop-templates/feature/schema.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/services/{{kebabCase name}}.service.ts',
        templateFile: 'plop-templates/feature/service.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/types/index.ts',
        templateFile: 'plop-templates/feature/types.ts.hbs',
      },
      {
        type: 'add',
        path: 'electron/main/ipc/handlers/{{kebabCase name}}.handlers.ts',
        templateFile: 'plop-templates/feature/handler.ts.hbs',
      },
      function (answers) {
        return `
╔══════════════════════════════════════════════════════════════════╗
║  ✅ Feature "${answers.name}" created successfully!              ║
╠══════════════════════════════════════════════════════════════════╣
║  IMPORTANT: Complete the following steps manually:               ║
║                                                                  ║
║  1. Add IPC types in src/shared/types/ipc.ts                    ║
║  2. Register handler in electron/main/ipc/index.ts              ║
║  3. Update ALLOWED_CHANNELS in electron/preload/index.ts        ║
║  4. Register routes in src/app/router/index.tsx (if needed)     ║
║                                                                  ║
║  See docs/SECURITY.md for security guidelines.                  ║
╚══════════════════════════════════════════════════════════════════╝
`
      },
    ],
  })

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature
        ? `src/features/${data.feature}/components`
        : 'src/shared/components'

      return [
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/component/index.ts.hbs',
        },
      ]
    },
  })

  // Store generator
  plop.setGenerator('store', {
    description: 'Create a new Zustand store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Store name (kebab-case):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature ? `src/features/${data.feature}/stores` : 'src/shared/stores'

      return [
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.store.ts`,
          templateFile: 'plop-templates/store/store.ts.hbs',
        },
      ]
    },
  })
}

```

## postcss.config.mjs

```mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

## prettier.config.mjs

```mjs
/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'clsx', 'cva'],
}

```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@features/*": ["src/features/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "files": [],
  "references": [
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.web.json" },
    { "path": "./tsconfig.preload.json" }
  ]
}

```

## tsconfig.node.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.node.json",
  "compilerOptions": {
    "composite": true,
    "allowSyntheticDefaultImports": true,
    "allowJs": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@main/*": ["electron/main/*"]
    }
  },
  "include": [
    "electron.vite.config.ts",
    "electron/main/**/*",
    "drizzle.config.ts",
    "tailwind.config.js",
    "eslint.config.mjs",
    "commitlint.config.mjs",
    "prettier.config.mjs",
    ".lintstagedrc.mjs",
    "scripts/**/*"
  ]
}

```

## tsconfig.preload.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.node.json",
  "compilerOptions": {
    "composite": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@preload/*": ["electron/preload/*"],
      "@shared/*": ["src/shared/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "include": ["electron/preload/**/*", "src/shared/types/**/*"]
}

```

## tsconfig.web.json

```json
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.web.json",
  "compilerOptions": {
    "composite": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@features/*": ["src/features/*"],
      "@main/*": ["electron/main/*"]
    }
  },
  "include": [
    "src/**/*",
    "src/**/*.tsx",
    "electron/preload/**/*",
    "electron/main/database/schema.ts"
  ]
}

```

## .github\copilot-instructions.md

```markdown
# Instruções do Copilot (Electron-App)

## Visão geral (arquitetura)

- **Electron Main (Node)** fica em `electron/main` (entrada: `electron/main/index.ts`).
- **Preload (bridge)** fica em `electron/preload/index.ts` e expõe `window.electronAPI` via `contextBridge`.
- **Renderer (React)** fica em `src` e **não deve importar `electron`** diretamente; todo acesso ao main é via `window.electronAPI.invoke()`.
- **Segurança**: `sandbox: true` ativado no Main Process.
- **IPC**: handlers são registrados em `electron/main/ipc/handlers/*.handlers.ts` e agrupados em `electron/main/ipc/index.ts`.
- **DB local**: `better-sqlite3` + `drizzle-orm`.
  - Conexão singleton em `electron/main/database/client.ts` (arquivo em `app.getPath('userData')`, pragmas WAL/foreign_keys).
  - Schema/tipos em `electron/main/database/schema.ts` (ex.: `users`, `User`, `NewUser`).

## Comandos (workflows reais)

- Dev (Windows): `npm run dev` (usa `dev.bat` para limpar `ELECTRON_RUN_AS_NODE`).
- Build/preview: `npm run build`, `npm run preview`.
- Qualidade: `npm run lint`, `npm run lint:fix`, `npm run typecheck`, `npm run format`.
- Drizzle/SQLite: `npm run db:generate`, `npm run db:migrate`, `npm run db:push`, `npm run db:studio`.
- Scaffolding (Plop): `npm run generate` (geradores: `feature`, `component`, `store`; templates em `plop-templates/`).

## Convenções do projeto (padrões existentes)

- Estrutura por feature em `src/features/<feature>/` com `components/`, `services/`, `stores/`, `schemas/`, `types/` (ver feature `src/features/users`).
- **Aliases** (ver `electron.vite.config.ts` / `tsconfig.web.json`):
  - Renderer: `@` → `src`, `@features` → `src/features`, `@shared` → `src/shared`.
  - Main: `@main` → `electron/main` (no renderer é usado principalmente para tipos, ex.: `import type { User } from '@main/database/schema'`).

## Padrão de IPC (Type-Safe)

- **Definição de Tipos**: Adicione novos canais em `src/shared/types/ipc.ts` na interface `IpcEvents`.
- **Main**: `electron/main/ipc/handlers/user.handlers.ts` usa `ipcMain.handle('users:getAll', ...)` e chama `getDatabase()`.
- **Renderer**:
  - service: `src/features/users/services/user.service.ts` → `window.electronAPI.invoke('users:getAll')` (Tipos inferidos automaticamente).
  - store (Zustand): `src/features/users/stores/user.store.ts` usa `persist` + `devtools` e chama IPC em actions async.

## Ao implementar novas features

- Prefira adicionar/consumir IPC através de um `*.service.ts` na feature e manter componentes focados em UI.
- Ao criar novos canais IPC:
  1. Adicionar tipagem em `src/shared/types/ipc.ts`
  2. Criar `electron/main/ipc/handlers/<x>.handlers.ts`
  3. Registrar em `electron/main/ipc/index.ts`
  4. **Atualizar `ALLOWED_CHANNELS`** em `electron/preload/index.ts`
  5. Criar service em `src/features/<x>/services/<x>.service.ts`

> ⚠️ Esquecer o passo 4 causará erro: `IPC channel "x" is not allowed`

## Segurança

Este projeto implementa múltiplas camadas de segurança:

- **Main Process**: `sandbox`, `contextIsolation`, permission handlers
- **Preload**: Whitelist de canais IPC (`ALLOWED_CHANNELS`)
- **CSP**: Content Security Policy restritivo

Documentação completa: `.template/SECURITY.md`

Use `npm run security:check` para verificar vulnerabilidades.

## Estrutura de Documentação

- **`.template/`**: Documentação do template (ARCHITECTURE.md, SECURITY.md)
- **`docs/`**: Reservada para documentação de negócio do projeto que usar este template

```

## .github\agents\electron-architect.agent.md

```markdown
---
name: Electron Architect
description: Agente especializado na arquitetura e padrões do projeto Electron-App
tools: ['read', 'execute', 'search', 'todo', 'edit', 'vscode']
---

# Electron Architect Agent

Você é o **Electron Architect**, o guardião da arquitetura e dos padrões deste projeto Electron + React. Sua missão é garantir que todo código siga estritamente as diretrizes definidas.

## Regras Globais (Rules)

Você deve aderir aos princípios definidos nos arquivos de regras (baseados no Google Antigravity):

### 00-general.md

- **Robustez sobre Velocidade**: Não implemente correções rápidas ("gambiarras"). Resolva a causa raiz.
- **Rigor**: Tipos devem ser explícitos. `any` é proibido a menos que estritamente necessário e documentado.
- **Agent-First**: Ferramentas automatizadas (Plop, Scripts) têm precedência sobre criação manual.
- **Documentação**: Todas as decisões arquiteturais devem ser refletidas nestas regras.

### 01-architecture.md

- **Feature-Based**: Código organizado por Feature (Domínio), não apenas tipo técnico.
- **Diretórios**:
  - `electron/main`: Lógica Backend (Node.js). SEM código React.
  - `electron/preload`: Bridge (Context Isolation).
  - `src/features/[feature-name]`: Domínios auto-contidos.
  - `src/shared`: Componentes reutilizáveis.
- **IPC Bridge**:
  - **Type-Safe**: Defina eventos em `src/shared/types/ipc.ts`.
  - Renderer usa `window.electronAPI.invoke('channel', data)` com inferência automática de tipos.
  - **Sandbox**: Ativado (`sandbox: true`) para segurança.

### Outras Regras Importantes

- **Segurança**: Siga `03-security.md` para adicionar novos canais IPC.
- **Shadcn**: Siga as diretrizes em `04-shadcn.md` e consulte `shadcn_guide` para componentes.
- **Git**: Siga `06-git-efficiency.md` para commits e branches.
- **Design**: Siga `07-design-principles.md`.

## Fluxo Completo: Nova Feature com IPC

Ao criar uma feature que comunica com o main process:

1. `npm run generate feature` (Plop)
2. Adicionar tipos em `src/shared/types/ipc.ts`
3. Criar handler em `electron/main/ipc/handlers/<name>.handlers.ts`
4. Registrar handler em `electron/main/ipc/index.ts`
5. **Atualizar ALLOWED_CHANNELS** em `electron/preload/index.ts`
6. Implementar service em `src/features/<name>/services/<name>.service.ts`

> ⚠️ Esquecer o passo 5 causará erro: `IPC channel "x" is not allowed`

## Workflows Disponíveis

Você tem acesso a workflows definidos como prompts. Use-os quando solicitado:

- `/scaffold-feature`: Cria uma nova feature usando Plop.
- `/verify-project`: Verifica a saúde do projeto (Lint, Types, Build).
- `/view-project-tree`: Visualiza a estrutura de arquivos do projeto.
- `/security-audit`: Executa auditoria de segurança (npm audit, lint, typecheck).

## Instruções Adicionais

1. Sempre verifique a estrutura do projeto antes de criar arquivos (`python scripts/tree_project.py`).
2. Use `npm run generate` para criar novos componentes, features ou stores.
3. Mantenha o histórico de erros limpo rodando `pwsh scripts/log_lint.ps1` quando encontrar problemas.
4. Consulte `.template/SECURITY.md` para práticas de segurança do template.

## Estrutura de Documentação

- **`.template/`**: Documentação do template (ARCHITECTURE.md, SECURITY.md)
- **`docs/`**: Reservada para documentação de negócio do projeto que usar este template

```

## .github\prompts\scaffold-feature.prompt.md

```markdown
---
description: Create a new feature module using standardized templates
agent: electron-architect
tools: ['execute']
---

# Scaffold Feature Workflow

Siga estes passos para criar uma nova feature:

1. Execute o gerador Plop para uma feature.
   Comando: `npm run generate feature`
   (Aguarde input do usuário para o nome da feature se necessário)

2. Verifique se a nova pasta da feature foi criada em `src/features/`.

3. Adicione os tipos IPC em `src/shared/types/ipc.ts`:

   ```typescript
   'feature-name:getAll': {
     request: []
     response: FeatureName[]
   }
   ```

4. Registre o handler em `electron/main/ipc/index.ts`:

   ```typescript
   import { registerFeatureNameHandlers } from './handlers/feature-name.handlers'
   // ... dentro de registerIpcHandlers():
   registerFeatureNameHandlers()
   ```

5. **IMPORTANTE**: Atualize `ALLOWED_CHANNELS` em `electron/preload/index.ts`:

   ```typescript
   const ALLOWED_CHANNELS = new Set<keyof IpcEvents>([
     // ... existing channels
     'feature-name:getAll',
     'feature-name:getById',
     'feature-name:create',
     'feature-name:update',
     'feature-name:delete',
   ])
   ```

6. Registre a feature no roteador se ela tiver páginas.
   Arquivo: `src/app/router/index.tsx`

7. Rode o lint para garantir conformidade.
   Comando: `npm run lint`

```

## .github\prompts\verify-project.prompt.md

```markdown
---
description: Verify project health (Linting, Types, and Build)
agent: electron-architect
tools: ['execute']
---

# Verify Project Workflow

Execute as seguintes verificações de saúde do projeto:

1. Verifique o status do Git.
   Comando: `git status`

2. Execute o script de log de Lint/Prettier para capturar histórico de erros.
   Comando: `pwsh scripts/log_lint.ps1`

3. Execute o compilador TypeScript para verificar erros de tipo.
   Comando: `npm run typecheck`

4. Tente um build para garantir que a aplicação empacote corretamente.
   Comando: `npm run build`

```

## .github\prompts\view-project-tree.prompt.md

```markdown
---
description: Visualize the project file structure (excluding node_modules and docs)
agent: electron-architect
tools: ['execute']
---

# View Project Tree Workflow

1. Execute o script de árvore do projeto para visualizar a estrutura atual.
   Comando: `python scripts/tree_project.py`

```

## .github\workflows\security-audit.yml

```yaml
name: Security Audit

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    # Run weekly on Sunday at midnight
    - cron: '0 0 * * 0'
  workflow_dispatch:

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run npm audit
        run: npm audit --audit-level=high
        continue-on-error: true

      - name: Run ESLint
        run: npm run lint

      - name: Run TypeScript check
        run: npm run typecheck

  build-check:
    name: Build Check
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

```

## .husky\commit-msg

```
npx --no -- commitlint --edit "$1"

```

## .husky\pre-commit

```
npx lint-staged

```

## .template\ARCHITECTURE.md

```markdown
# Architecture & Development Guidelines

## Tech Stack

- **Runtime**: Electron + Node.js (Main Process)
- **Frontend**: React + Vite + TypeScript (Renderer)
- **Database**: SQLite (better-sqlite3) + Drizzle ORM
- **State Management**: Zustand
- **Styling**: TailwindCSS + Shadcn/ui
- **Validation**: Zod
- **API/Bridge**: Type-safe IPC via `electronAPI`

## Directory Structure (Feature-Based)

Adhering to Domain-Driven Design principles, code is organized by **Feature**.

```
src/
├── app/               # App-wide providers, layouts, router
├── features/          # Domain features (e.g., users, dashboard)
│   └── user/
│       ├── components/ # React components specific to feature
│       ├── hooks/      # React hooks specific to feature
│       ├── services/   # Business logic / API calls
│       ├── stores/     # State management (Zustand)
│       ├── types/      # Feature-specific types
│       └── schemas/    # Zod schemas
├── shared/            # Reusable core components/hooks
    ├── components/ui/ # Shadcn UI components
    └── lib/           # Utilities
```

## Conventions

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Stores**: `kebab-case.store.ts` (e.g., `user-profile.store.ts`)
- **Services**: `kebab-case.service.ts`
- **Schemas**: `kebab-case.schema.ts`
- **Hooks**: camelCase (e.g., `useAuth.ts`)

### Code Quality

- **Strict Typing**: No `any`. Use generics and shared types.
- **Early Returns**: Avoid deep nesting.
- **SOLID**: Single Responsibility Principle is paramount.
- **No Gambiarras**: Fix root causes (env vars, types) rather than patching.

### Workflow & Automation

- **Component Creation**: Use `npm run generate` (Plop) to scaffold features/components correctly.
- **Quality Gates**: `npm run lint` and `npm run typecheck` MUST pass before commit (enforced by Husky).
- **Format**: Prettier is enforced via ESLint.

## Electron Specifics

- **Main Process**: `electron/main` (Node.js environment).
- **Preload**: `electron/preload` (Bridge).
- **Renderer**: `src` (Web environment).
- **Communication**: Renderer calls `window.electronAPI.invoke()`. NEVER import `electron` directly in React components.

## Security

This template implements multiple security layers:

- **Sandbox**: Enabled in main process for renderer isolation.
- **Context Isolation**: Preload scripts run in separate context.
- **CSP**: Strict Content Security Policy in `index.html`.
- **IPC Whitelist**: Only channels in `ALLOWED_CHANNELS` can be invoked.
- **Permission Handlers**: Explicit whitelist for Electron permissions.

See `docs/SECURITY.md` for complete security documentation.

### Adding New IPC Channels

When adding new IPC communication, you must update:

1. `src/shared/types/ipc.ts` - Add type definitions
2. `electron/main/ipc/handlers/` - Create handler
3. `electron/main/ipc/index.ts` - Register handler
4. `electron/preload/index.ts` - Add to `ALLOWED_CHANNELS`

```

## .template\SECURITY.md

```markdown
# Security Policy

This document outlines the security measures implemented in this Electron template.

## Security Checklist

### ✅ Main Process (`electron/main/index.ts`)

| Feature                       | Status        | Description                            |
| ----------------------------- | ------------- | -------------------------------------- |
| `sandbox`                     | ✅ Enabled    | Isolates renderer process from system  |
| `contextIsolation`            | ✅ Enabled    | Separates preload script context       |
| `nodeIntegration`             | ✅ Disabled   | Prevents Node.js access in renderer    |
| `webviewTag`                  | ✅ Disabled   | Prevents webview element usage         |
| `allowRunningInsecureContent` | ✅ Disabled   | Blocks mixed content                   |
| Permission Handler            | ✅ Configured | Whitelists allowed permissions         |
| Navigation Blocking           | ✅ Configured | Blocks external URL navigation         |
| Window Open Handler           | ✅ Configured | Opens external links in system browser |

### ✅ Preload Script (`electron/preload/index.ts`)

| Feature           | Status         | Description                         |
| ----------------- | -------------- | ----------------------------------- |
| Channel Whitelist | ✅ Implemented | Only allows registered IPC channels |
| Type Safety       | ✅ Implemented | Fully typed IPC communication       |
| Validation        | ✅ Implemented | Validates channels before invoke    |

### ✅ Content Security Policy (`index.html`)

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
```

### ✅ Build Configuration (`electron-builder.yml`)

| Feature         | Status            | Description                       |
| --------------- | ----------------- | --------------------------------- |
| ASAR Archive    | ✅ Enabled        | Packages app in encrypted archive |
| GitHub Releases | 📝 Template Ready | Configure for auto-updates        |

---

## Allowed Permissions

The following permissions are whitelisted in the main process:

- `clipboard-read` - Read from system clipboard
- `clipboard-write` - Write to system clipboard
- `notifications` - Show system notifications

To add new permissions, modify `ALLOWED_PERMISSIONS` in `electron/main/index.ts`.

---

## Allowed IPC Channels

The following IPC channels are whitelisted in the preload script:

- `users:getAll`
- `users:getById`
- `users:create`
- `users:update`
- `users:delete`

To add new channels:

1. Add the channel type to `src/shared/types/ipc.ts`
2. Add the channel name to `ALLOWED_CHANNELS` in `electron/preload/index.ts`
3. Implement the handler in `electron/main/ipc/handlers/`

---

## Security Scripts

```bash
# Run npm audit for high-severity vulnerabilities
npm run security:audit

# Run full security check (lint + typecheck + audit)
npm run security:check
```

---

## GitHub Actions

The `.github/workflows/security-audit.yml` workflow runs automatically:

- On every push to `main`
- On every pull request to `main`
- Weekly (Sunday at midnight)
- Manually via workflow dispatch

---

## Best Practices

### Adding New Features

1. **Never enable `nodeIntegration`** - Use IPC instead
2. **Always add new IPC channels to the whitelist** - Prevents arbitrary channel invocation
3. **Use typed IPC** - Leverage TypeScript for type-safe communication
4. **Validate user input** - Use Zod schemas for data validation

### External Resources

If your app needs to load external resources:

1. Add specific domains to CSP in `index.html`
2. Consider using `connect-src` for API endpoints
3. Never use `unsafe-eval` in `script-src`

### Code Signing (Production)

For production releases, configure code signing in `electron-builder.yml`:

```yaml
# Windows
win:
  certificateFile: path/to/certificate.pfx
  certificatePassword: ${WIN_CSC_KEY_PASSWORD}

# macOS
mac:
  identity: 'Developer ID Application: Your Name (TEAM_ID)'
  hardenedRuntime: true
  gatekeeperAssess: false
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.mac.plist
```

---

## Reporting Vulnerabilities

If you discover a security vulnerability, please:

1. **Do not** open a public issue
2. Email the maintainer directly
3. Include steps to reproduce the vulnerability
4. Allow reasonable time for a fix before disclosure

```

## docs\README.md

```markdown
# Business Documentation

This folder is reserved for **business-specific documentation** for projects that use this template.

## Suggested Structure

```txt
docs/
├── requirements/     # Business requirements  
├── specifications/   # Technical specifications
├── user-guides/      # End-user documentation
└── api/              # API documentation (if applicable)
```

## Template Documentation

For template-specific documentation (architecture, security), see:

- **Architecture**: [.template/ARCHITECTURE.md](../.template/ARCHITECTURE.md)
- **Security**: [.template/SECURITY.md](../.template/SECURITY.md)

```

## electron\main\index.ts

```typescript
import { app, BrowserWindow, shell, session } from 'electron'
import { join } from 'node:path'
import { registerIpcHandlers } from './ipc'
import { closeDatabase } from './database/client'

// Security: Allowed permissions whitelist
const ALLOWED_PERMISSIONS = new Set(['clipboard-read', 'clipboard-write', 'notifications'])

// Security: Configure session permissions
function configureSecurityHandlers(): void {
  // Block permission requests not in whitelist
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(ALLOWED_PERMISSIONS.has(permission))
  })

  // Block permission checks not in whitelist
  session.defaultSession.setPermissionCheckHandler((_webContents, permission) => {
    return ALLOWED_PERMISSIONS.has(permission)
  })
}

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
      // Security: Additional hardening
      webviewTag: false,
      allowRunningInsecureContent: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  // Security: Block navigation to external URLs
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const allowedOrigins = ['file://', 'http://localhost', 'https://localhost']
    const isAllowed = allowedOrigins.some((origin) => url.startsWith(origin))
    if (!isAllowed) {
      event.preventDefault()
      console.warn(`[Security] Blocked navigation to: ${url}`)
    }
  })

  // Security: Block new window creation, open in external browser
  mainWindow.webContents.setWindowOpenHandler((details) => {
    void shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (process.env.ELECTRON_RENDERER_URL) {
    void mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    void mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
void app.whenReady().then(() => {
  // Set app user model id for windows
  app.setAppUserModelId('com.electron.template')

  // Security: Configure session handlers
  configureSecurityHandlers()

  // Register IPC handlers
  registerIpcHandlers()

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  closeDatabase()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

```

## electron\main\database\client.ts

```typescript
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

```

## electron\main\database\schema.ts

```typescript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// Example entity schema - customize for your needs
export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').unique(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

// Inferred types for TypeScript
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

```

## electron\main\ipc\index.ts

```typescript
import { ipcMain } from 'electron'
import { registerUserHandlers } from './handlers/user.handlers'

export function registerIpcHandlers(): void {
  // Register all IPC handlers
  registerUserHandlers(ipcMain)
}

```

## electron\main\ipc\handlers\user.handlers.ts

```typescript
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

```

## electron\preload\index.ts

```typescript
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

```

## plop-templates\component\component.tsx.hbs

```hbs
interface {{pascalCase name}}Props {
  className?: string
}

export function {{pascalCase name}}({ className }: {{pascalCase name}}Props) {
  return (
    <div className={className}>
      <p>{{pascalCase name}} Component</p>
    </div>
  )
}

```

## plop-templates\component\index.ts.hbs

```hbs
export * from './{{pascalCase name}}'

```

## plop-templates\feature\handler.ts.hbs

```hbs
import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { {{camelCase name}}s } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function register{{pascalCase name}}Handlers() {
  const db = getDatabase()

  ipcMain.handle('{{kebabCase name}}:getAll', async () => {
    return db.select().from({{camelCase name}}s).all()
  })

  ipcMain.handle('{{kebabCase name}}:getById', async (_event, id: string) => {
    const result = db.select().from({{camelCase name}}s).where(eq({{camelCase name}}s.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('{{kebabCase name}}:create', async (_event, data: unknown) => {
    // TODO: Add Zod validation here
    const result = db.insert({{camelCase name}}s).values(data as Record<string, unknown>).returning().get()
    return result
  })

  ipcMain.handle('{{kebabCase name}}:update', async (_event, id: string, data: unknown) => {
    // TODO: Add Zod validation here
    const result = db
      .update({{camelCase name}}s)
      .set(data as Record<string, unknown>)
      .where(eq({{camelCase name}}s.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('{{kebabCase name}}:delete', async (_event, id: string) => {
    db.delete({{camelCase name}}s).where(eq({{camelCase name}}s.id, id)).run()
    return true
  })
}

```

## plop-templates\feature\index.ts.hbs

```hbs
// Feature: {{pascalCase name}}
// Export public API from this file

export * from './types'

```

## plop-templates\feature\schema.ts.hbs

```hbs
import { z } from 'zod'

export const {{camelCase name}}Schema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Nome é obrigatório'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const create{{pascalCase name}}Schema = {{camelCase name}}Schema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const update{{pascalCase name}}Schema = create{{pascalCase name}}Schema.partial()

export type {{pascalCase name}}FormData = z.infer<typeof create{{pascalCase name}}Schema>
export type Update{{pascalCase name}}FormData = z.infer<typeof update{{pascalCase name}}Schema>

```

## plop-templates\feature\service.ts.hbs

```hbs
// {{pascalCase name}} Service
// IPC calls to interact with main process

// TODO: Import your feature types after defining them
// import type { {{pascalCase name}}, New{{pascalCase name}} } from '../types'

export const {{camelCase name}}Service = {
  async getAll() {
    // TODO: Update return type after adding IPC types
    return window.electronAPI.invoke('{{kebabCase name}}:getAll')
  },

  async getById(id: string) {
    return window.electronAPI.invoke('{{kebabCase name}}:getById', id)
  },

  async create(data: Record<string, unknown>) {
    // TODO: Replace with New{{pascalCase name}} type after defining
    return window.electronAPI.invoke('{{kebabCase name}}:create', data)
  },

  async update(id: string, data: Record<string, unknown>) {
    // TODO: Replace with Partial<New{{pascalCase name}}> after defining
    return window.electronAPI.invoke('{{kebabCase name}}:update', id, data)
  },

  async delete(id: string) {
    return window.electronAPI.invoke('{{kebabCase name}}:delete', id)
  },
}

/*
 * IMPORTANT: After creating this service, you must:
 * 1. Add IPC types in src/shared/types/ipc.ts
 * 2. Update ALLOWED_CHANNELS in electron/preload/index.ts
 * 3. Create handler in electron/main/ipc/handlers/{{kebabCase name}}.handlers.ts
 * 4. Register handler in electron/main/ipc/index.ts
 */

```

## plop-templates\feature\store.ts.hbs

```hbs
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface {{pascalCase name}}State {
  isLoading: boolean
  error: string | null
}

interface {{pascalCase name}}Actions {
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: {{pascalCase name}}State = {
  isLoading: false,
  error: null,
}

export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
  devtools(
    (set) => ({
      ...initialState,

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      reset: () => set(initialState),
    }),
    { name: '{{pascalCase name}}Store' }
  )
)

```

## plop-templates\feature\types.ts.hbs

```hbs
// {{pascalCase name}} Types
// Add feature-specific types here

export interface {{pascalCase name}} {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

```

## plop-templates\store\store.ts.hbs

```hbs
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface {{pascalCase name}}State {
  isLoading: boolean
  error: string | null
}

interface {{pascalCase name}}Actions {
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: {{pascalCase name}}State = {
  isLoading: false,
  error: null,
}

export const use{{pascalCase name}}Store = create<{{pascalCase name}}State & {{pascalCase name}}Actions>()(
  devtools(
    (set) => ({
      ...initialState,

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      reset: () => set(initialState),
    }),
    { name: '{{pascalCase name}}Store' }
  )
)

```

## scripts\doc_project.py

```python
import os
import datetime
import argparse
import sys

# Configurações Globais
IGNORE_DIRS = {'.git', 'node_modules', 'out', 'dist', '.vscode', '.idea', '__pycache__', '.agent', 'coverage', 'resources'}
IGNORE_FILES = {'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'PROJECT_STRUC_DOCS.md', '.DS_Store', 'thumbs.db'}
OUTPUT_FILE = 'PROJECT_STRUC_DOCS.md'

# Mapeamento de extensões
EXT_MAP = {
    'ts': 'typescript', 'tsx': 'tsx', 'js': 'javascript', 'jsx': 'jsx',
    'py': 'python', 'ps1': 'powershell', 'bat': 'batch',
    'md': 'markdown', 'json': 'json', 'yml': 'yaml', 'yaml': 'yaml',
    'html': 'html', 'css': 'css', 'scss': 'scss',
    'sql': 'sql', 'sh': 'bash'
}

def is_binary(file_path):
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
            return b'\0' in chunk
    except Exception:
        return True

def generate_tree_recursive(current_path, prefix, ignore_dirs, ignore_files):
    output = []
    try:
        items = sorted(os.listdir(current_path))
    except PermissionError:
        return []

    items = [i for i in items if i not in ignore_dirs and i not in ignore_files]
    
    for i, item in enumerate(items):
        path = os.path.join(current_path, item)
        is_last = (i == len(items) - 1)
        marker = "\\--- " if is_last else "+--- "
        
        output.append(f"{prefix}{marker}{item}")
        
        if os.path.isdir(path):
            next_prefix = prefix + ("     " if is_last else "|    ")
            output.extend(generate_tree_recursive(path, next_prefix, ignore_dirs, ignore_files))
            
    return output

def main():
    parser = argparse.ArgumentParser(description="Ferramenta unificada de documentação e visualização de estrutura.")
    
    # Argumento Posicional: Path (Opcional, default=current)
    parser.add_argument("path", nargs="?", default=".", help="Diretório alvo.")
    
    # Flags Mutuamente Exclusivas (para evitar confusão)
    group = parser.add_mutually_exclusive_group()
    group.add_argument("-t", "--terminal", action="store_true", help="Exibe APENAS a árvore no terminal (sem gerar arquivo).")
    group.add_argument("-n", "--no-content", action="store_true", help="Gera o arquivo de documentação APENAS com a árvore (sem conteúdo dos arquivos).")
    
    args = parser.parse_args()
    
    # Validação e Setup
    root_execution_dir = os.getcwd()
    target_path = os.path.abspath(args.path)
    
    # Configuração do diretório de saída (docs/)
    docs_dir = os.path.join(root_execution_dir, 'docs')
    if not os.path.exists(docs_dir):
        try:
            os.makedirs(docs_dir)
        except OSError as e:
            print(f"Erro ao criar diretório 'docs': {e}")
            sys.exit(1)
            
    # Determina o nome base do arquivo
    base_filename = OUTPUT_FILE
    
    # Se um path específico foi passado (não é o diretório atual)
    if os.path.abspath(target_path) != root_execution_dir:
        # Pega o caminho relativo e sanitiza para usar no nome do arquivo
        rel_path_name = os.path.relpath(target_path, root_execution_dir)
        # Substitui separadores de diretório por underscore e remove caracteres inválidos
        safe_name = rel_path_name.replace(os.sep, '_').replace(':', '').replace('.', '')
        name_part, ext_part = os.path.splitext(OUTPUT_FILE)
        base_filename = f"{name_part}_{safe_name}{ext_part}"
            
    output_path = os.path.join(docs_dir, base_filename)
    
    # Versionamento de arquivo: se existir, cria _v1, _v2, etc.
    if os.path.exists(output_path):
        base_name, ext = os.path.splitext(base_filename)
        counter = 1
        while True:
            new_filename = f"{base_name}_v{counter}{ext}"
            new_output_path = os.path.join(docs_dir, new_filename)
            if not os.path.exists(new_output_path):
                output_path = new_output_path
                break
            counter += 1
    
    # Adiciona o próprio arquivo de saída à lista de ignorados
    IGNORE_FILES.add(os.path.basename(output_path))

    if not os.path.exists(target_path):
        print(f"Erro: O caminho '{target_path}' não existe.")
        sys.exit(1)
        
    if not os.path.isdir(target_path):
        print(f"Erro: O caminho '{target_path}' não é um diretório.")
        sys.exit(1)

    # Lógica Principal
    
    # 1. Modo Terminal (-t): Apenas imprime a árvore e sai.
    if args.terminal:
        tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)
        print(os.path.basename(target_path))
        print("\n".join(tree_lines))
        sys.exit(0)

    # 2. Modo Arquivo (Default ou -n): Gera PROJECT_DOCS.md
    print(f"Gerando documentação para: {target_path}")
    print(f"Arquivo de saída: {output_path}")
    
    if args.no_content:
        print("Modo: Apenas Estrutura (Conteúdo ignorado)")
    else:
        print("Modo: Completo (Estrutura + Conteúdo)")

    print("Gerando estrutura de árvore...")
    tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Documentação do Projeto\n\n")
            f.write(f"> Gerado automaticamente em {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
            f.write(f"> Caminho documentado: `{target_path}`\n\n")
            
            f.write("## Estrutura de Arquivos\n\n")
            f.write("```text\n")
            f.write(os.path.basename(target_path) + "\n")
            f.write("\n".join(tree_lines))
            f.write("\n```\n\n")
            
            # Se NÃO tiver a flag --no-content, escreve o conteúdo
            if not args.no_content:
                f.write("## Conteúdo dos Arquivos\n")
                print("Escrevendo conteúdo dos arquivos...")
                
                file_count = 0
                for root, dirs, files in os.walk(target_path):
                    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
                    files = sorted([f for f in files if f not in IGNORE_FILES])
                    
                    for file in files:
                        file_path = os.path.join(root, file)
                        # Ignora o próprio arquivo de saída se estiver no caminho
                        if os.path.abspath(file_path) == os.path.abspath(output_path): continue

                        rel_path = os.path.relpath(file_path, target_path)
                        
                        f.write(f"\n## {rel_path}\n\n")
                        
                        ext = os.path.splitext(file)[1].lower().lstrip('.')
                        lang = EXT_MAP.get(ext, ext)
                        
                        f.write(f"```{lang}\n")
                        
                        if is_binary(file_path):
                            f.write("*(Arquivo binário ou ilegível)*\n")
                        else:
                            try:
                                with open(file_path, 'r', encoding='utf-8', errors='replace') as source:
                                    f.write(source.read())
                            except Exception as e:
                                f.write(f"*(Erro ao ler arquivo: {e})*\n")
                        
                        f.write("\n```\n")
                        file_count += 1
                print(f"Concluído! {file_count} arquivos documentados.")
            else:
                print("Concluído! Apenas estrutura gerada.")
                
    except PermissionError:
        print(f"Erro: Permissão negada ao escrever em {output_path}")
        sys.exit(1)
    except Exception as e:
        print(f"Erro inesperado: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

```

## scripts\log_lint.ps1

```powershell
$logFile = ".agent/lint_history.txt"
$date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$header = "`n----------------------------------------`n[LINT RUN] $date`n----------------------------------------`n"

# Ensure directory exists
if (!(Test-Path ".agent")) { New-Item -ItemType Directory -Path ".agent" | Out-Null }

# Add Header
Add-Content -Path $logFile -Value $header

# Run ESLint (no color for clean logs), Tee to console and Append to file
Write-Host "Running ESLint and logging to $logFile..."
npx eslint . --no-color | Tee-Object -FilePath $logFile -Append

# Run Prettier Check (optional, but requested "ESLint and Prettier errors")
$prettierHeader = "`n[PRETTIER CHECK]`n"
Add-Content -Path $logFile -Value $prettierHeader
npx prettier --check . --no-color 2>&1 | Tee-Object -FilePath $logFile -Append

```

## scripts\tree_shadcn.py

```python
import os

def print_tree(startpath):
    root_guide = os.path.join(startpath, '.agent', 'shadcn_guide')
    if not os.path.exists(root_guide):
        print(f"Error: {root_guide} not found.")
        return

    for root, dirs, files in os.walk(root_guide):
        # Allow all dirs inside shadcn_guide
        level = root.replace(startpath, '').count(os.sep)
        indent = '|   ' * (level)
        print('{}{}/'.format(indent, os.path.basename(root)))
        subindent = '|   ' * (level + 1)
        for f in files:
            print('{}{}'.format(subindent, f))

if __name__ == "__main__":
    print_tree('.')

```

## src\App.tsx

```tsx
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { AppRoutes } from '@/app/router'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  )
}

```

## src\index.css

```css
@tailwind base;

@custom-variant dark (&:is(.dark *));
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

.dark {
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: 224.3 76.3% 48%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

## src\main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

```

## src\app\components\AppSidebar.tsx

```tsx
import { Home, Database, Layers, Code, FileText } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/components/ui/sidebar'

// Menu items.
const items = [
  {
    title: 'Visão Geral',
    url: '#overview',
    icon: Home,
  },
  {
    title: 'Tech Stack',
    url: '#stack',
    icon: Layers,
  },
  {
    title: 'Arquitetura',
    url: '#architecture',
    icon: Code,
  },
  {
    title: 'Database',
    url: '#database',
    icon: Database,
  },
  {
    title: 'IPC & Segurança',
    url: '#ipc',
    icon: FileText,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Electron Template</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

```

## src\app\layouts\RootLayout.tsx

```tsx
import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/shared/components/ui/sidebar'
import { AppSidebar } from '@/app/components/AppSidebar'

export function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-screen w-full flex-1 flex-col bg-background text-foreground">
        <header className="flex h-14 items-center gap-4 border-b border-border px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Electron Template</h1>
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

```

## src\app\providers\ThemeProvider.tsx

```tsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'app-ui-theme',
  ...props
}: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme
  )

  useEffect(() => {
    const root = globalThis.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }),
    [theme, storageKey]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  return context
}

```

## src\app\router\index.tsx

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/app/layouts/RootLayout'
import { HomePage } from '@/features/home/components/HomePage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

```

## src\features\home\index.ts

```typescript
export * from './components/HomePage'

```

## src\features\home\components\HomePage.tsx

```tsx
import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

export function HomePage() {
  const stack = [
    {
      category: 'Core',
      items: [
        { name: 'Electron', url: 'https://www.electronjs.org/' },
        { name: 'React 18', url: 'https://react.dev/' },
        { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { name: 'Vite', url: 'https://vitejs.dev/' },
      ],
    },
    {
      category: 'UI & Styling',
      items: [
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { name: 'Shadcn/ui', url: 'https://ui.shadcn.com/' },
        { name: 'Lucide Icons', url: 'https://lucide.dev/' },
      ],
    },
    {
      category: 'Data & State',
      items: [
        { name: 'SQLite (better-sqlite3)', url: 'https://github.com/WiseLibs/better-sqlite3' },
        { name: 'Drizzle ORM', url: 'https://orm.drizzle.team/' },
        { name: 'Zustand', url: 'https://github.com/pmndrs/zustand' },
        { name: 'React Query', url: 'https://tanstack.com/query/latest' },
      ],
    },
    {
      category: 'Validation & Forms',
      items: [
        { name: 'Zod', url: 'https://zod.dev/' },
        { name: 'React Hook Form', url: 'https://react-hook-form.com/' },
      ],
    },
    {
      category: 'Tooling & Quality',
      items: [
        { name: 'ESLint', url: 'https://eslint.org/' },
        { name: 'Prettier', url: 'https://prettier.io/' },
        { name: 'Plop (Scaffolding)', url: 'https://plopjs.com/' },
        { name: 'Husky', url: 'https://typicode.github.io/husky/' },
        { name: 'Commitlint', url: 'https://commitlint.js.org/' },
      ],
    },
  ]

  return (
    <div className="container mx-auto max-w-5xl space-y-16 py-10">
      {/* Overview Section */}
      <section id="overview" className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Electron App Template
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Uma fundação robusta e moderna para construir aplicações desktop de alta performance.
        </p>
      </section>

      {/* Stack Section */}
      <section id="stack" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <Card key={group.category} className="h-full">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
                <CardDescription>Tecnologias principais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80"
                    >
                      <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                        {item.name}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Arquitetura</h2>
        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-primary">Backend (Main Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Node.js environment</li>
                <li>SQLite Database com Drizzle</li>
                <li>IPC Handlers Type-Safe</li>
                <li>Arquitetura segura (Sandbox ativado)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary">Frontend (Renderer Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>React + Vite</li>
                <li>Feature-based Folder Structure</li>
                <li>Componentes Shadcn/ui</li>
                <li>Separação estrita via ContextBridge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Database</h2>
        <p className="text-muted-foreground">
          O projeto utiliza <strong>better-sqlite3</strong> para alta performance e{' '}
          <strong>Drizzle ORM</strong> para type-safety. O arquivo do banco de dados é criado
          automaticamente no diretório de dados do usuário.
        </p>
      </section>

      {/* IPC Section */}
      <section id="ipc" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">IPC & Segurança</h2>
        <p className="text-muted-foreground">
          A comunicação entre processos é feita exclusivamente via <strong>ContextBridge</strong> e{' '}
          <strong>ipcRenderer.invoke</strong>. Todos os canais são tipados em{' '}
          <code>src/shared/types/ipc.ts</code>.
        </p>
      </section>
    </div>
  )
}

```

## src\features\users\index.ts

```typescript
export * from './stores/user.store'
export * from './schemas/user.schema'
export * from './services/user.service'

```

## src\features\users\schemas\user.schema.ts

```typescript
import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido').optional().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const updateUserSchema = createUserSchema.partial()

export type UserFormData = z.infer<typeof createUserSchema>
export type UpdateUserFormData = z.infer<typeof updateUserSchema>

```

## src\features\users\services\user.service.ts

```typescript
import type { User, NewUser } from '@main/database/schema'

export const userService = {
  async getAll(): Promise<User[]> {
    return window.electronAPI.invoke('users:getAll')
  },

  async getById(id: string): Promise<User | null> {
    return window.electronAPI.invoke('users:getById', id)
  },

  async create(data: NewUser): Promise<User> {
    return window.electronAPI.invoke('users:create', data)
  },

  async update(id: string, data: Partial<NewUser>): Promise<User> {
    return window.electronAPI.invoke('users:update', id, data)
  },

  async delete(id: string): Promise<boolean> {
    return window.electronAPI.invoke('users:delete', id)
  },
}

```

## src\features\users\stores\user.store.ts

```typescript
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { User } from '@main/database/schema'

interface UserState {
  users: User[]
  selectedUser: User | null
  isLoading: boolean
  error: string | null
}

interface UserActions {
  setUsers: (users: User[]) => void
  setSelectedUser: (user: User | null) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  fetchUsers: () => Promise<void>
  reset: () => void
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
}

export const useUserStore = create<UserState & UserActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setUsers: (users) => {
          set({ users })
        },
        setSelectedUser: (user) => {
          set({ selectedUser: user })
        },
        setLoading: (isLoading) => {
          set({ isLoading })
        },
        setError: (error) => {
          set({ error })
        },

        fetchUsers: async () => {
          set({ isLoading: true, error: null })
          try {
            const users = await window.electronAPI.invoke('users:getAll')
            set({ users, isLoading: false })
          } catch (error) {
            set({
              error: error instanceof Error ? error.message : 'Unknown error',
              isLoading: false,
            })
          }
        },

        reset: () => {
          set(initialState)
        },
      }),
      { name: 'user-store' }
    ),
    { name: 'UserStore' }
  )
)

```

## src\shared\components\ui\.gitkeep

```
// Placeholder for shared components
// Run `npx shadcn@latest add button` to add components

```

## src\shared\components\ui\badge.tsx

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const badgeVariants = cva(
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
        outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }

```

## src\shared\components\ui\button.tsx

```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
        outline:
          'shadow-xs border bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

## src\shared\components\ui\card.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('font-semibold leading-none', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-6', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('[.border-t]:pt-6 flex items-center px-6', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }

```

## src\shared\components\ui\input.tsx

```tsx
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'shadow-xs h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

## src\shared\components\ui\scroll-area.tsx

```tsx
import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/shared/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none select-none p-px transition-colors',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-border"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```

## src\shared\components\ui\separator.tsx

```tsx
import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/shared/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```

## src\shared\components\ui\sheet.tsx

```tsx
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
          side === 'top' &&
            'inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="rounded-xs focus:outline-hidden absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

## src\shared\components\ui\sidebar.tsx

```tsx
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { useIsMobile } from '@/shared/hooks/use-mobile'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Separator } from '@/shared/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/shared/components/ui/sheet'
import { Skeleton } from '@/shared/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

interface SidebarContextProps {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${String(openState)}; path=/; max-age=${String(SIDEBAR_COOKIE_MAX_AGE)}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((open) => !open)
    } else {
      setOpen((open) => !open)
    }
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={style}
          className={cn(
            'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
            `[--sidebar-width:${SIDEBAR_WIDTH}]`,
            `[--sidebar-width-icon:${SIDEBAR_WIDTH_ICON}]`,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className={cn(
            'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
            `[--sidebar-width:${SIDEBAR_WIDTH_MOBILE}]`
          )}
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem)]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+1rem+2px)]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'relative flex w-full flex-1 flex-col bg-background',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('h-8 w-full bg-background shadow-none', className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'outline-hidden flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'outline-hidden absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button outline-hidden group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'group-data-[collapsible=icon]:p-0! h-12 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : 'button'
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'outline-hidden absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    // eslint-disable-next-line react-hooks/purity
    return `${String(Math.floor(Math.random() * 40) + 50)}%`
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="max-w-(--skeleton-width) h-4 flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

## src\shared\components\ui\skeleton.tsx

```tsx
import { cn } from '@/shared/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-accent', className)}
      {...props}
    />
  )
}

export { Skeleton }

```

## src\shared\components\ui\tooltip.tsx

```tsx
import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/shared/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'origin-(--radix-tooltip-content-transform-origin) z-50 w-fit text-balance rounded-md bg-foreground px-3 py-1.5 text-xs text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

## src\shared\hooks\.gitkeep

```
// Placeholder for shared hooks

```

## src\shared\hooks\use-mobile.ts

```typescript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${String(MOBILE_BREAKPOINT - 1)}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => {
      mql.removeEventListener('change', onChange)
    }
  }, [])

  return !!isMobile
}

```

## src\shared\lib\utils.ts

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

## src\shared\schemas\.gitkeep

```
// Placeholder for shared Zod schemas

```

## src\shared\stores\.gitkeep

```
// Placeholder for global Zustand stores

```

## src\shared\types\.gitkeep

```
// Placeholder for shared types

```

## src\shared\types\ipc.ts

```typescript
import type { User, NewUser } from '@main/database/schema'

export interface IpcEvents {
  'users:getAll': {
    request: []
    response: User[]
  }
  'users:getById': {
    request: [id: string]
    response: User | null
  }
  'users:create': {
    request: [data: NewUser]
    response: User
  }
  'users:update': {
    request: [id: string, data: Partial<NewUser>]
    response: User
  }
  'users:delete': {
    request: [id: string]
    response: boolean
  }
}

```
