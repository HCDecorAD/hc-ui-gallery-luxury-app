# HC App Builder manifest importer (local-only)
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File .\HC-App-Import.ps1 -Manifest "C:\Users\...\Downloads\HC-coreui-App.hc-app.json"
[CmdletBinding()]
param([Parameter(Mandatory=$true)][string]$Manifest,
      [string]$Builder = 'D:\HCDecorHUB\HC-App-Builder.ps1')
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$allowed = @('coreui','tabler','adminlte','shadcn','astro-cactus','commerce')
$manifestPath = (Resolve-Path -LiteralPath $Manifest -ErrorAction Stop).Path
if ((Get-Item -LiteralPath $manifestPath).Length -gt 16384) { throw 'Manifest too large (max 16KB)' }
$data = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
if ($data.schema -cne 'hc-app-config/v1') { throw 'Unsupported manifest schema' }
if ($data.template -cnotin $allowed) { throw 'Unsupported template' }
if ($data.appName -cnotmatch '^[A-Za-z0-9_-]{3,60}$') { throw 'Invalid appName' }
if ($data.brand -cnotmatch '^[A-Za-z0-9_-]{1,60}$') { throw 'Invalid brand' }
$keys = @($data.PSObject.Properties.Name)
if (@($keys | Where-Object { $_ -cnotin @('schema','template','appName','brand') }).Count -gt 0) { throw 'Unknown manifest fields' }
$target = Join-Path 'D:\HCDecorHUB\HC-Generated-Apps' $data.appName
if (Test-Path -LiteralPath $target) { throw "Refusing to overwrite existing app: $target" }
if (!(Test-Path -LiteralPath $Builder -PathType Leaf)) { throw "Builder not found: $Builder" }
Write-Host "Creating $($data.appName) from $($data.template) on HOCUONG..."
& $Builder -Template $data.template -AppName $data.appName -Brand $data.brand
if ($LASTEXITCODE -and $LASTEXITCODE -ne 0) { throw "Builder failed: $LASTEXITCODE" }
if (!(Test-Path -LiteralPath (Join-Path $target 'hc-app.json'))) { throw 'App metadata not found after build' }
Write-Host "APP CREATED: $target"
