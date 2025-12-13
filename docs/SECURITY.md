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
