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
