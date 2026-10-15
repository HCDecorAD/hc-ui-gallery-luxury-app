@echo off
rem HC UI Gallery Luxury - local verify: install -> (lint + build in parallel) -> dist check -> preview HTTP check -> live Pages check
rem Auto-fix on retry: clean npm cache, remove node_modules/dist, reinstall with explicit registry. No pause, no prompts.
setlocal EnableDelayedExpansion
cd /d "%~dp0.."
set "REG=https://registry.npmjs.org/"
set "BASE=/hc-ui-gallery-luxury-app/"
set "VITE_BASE=%BASE%"
set "VITE_CONFIG_NATIVE_IGNORE_WARNING=true"
set "MAX=3"
set "N=0"
if not exist logs mkdir logs
del /q logs\*.exit logs\*.code logs\RESULT.txt 2>nul

:loop
set /a N+=1
echo [attempt !N!/%MAX%] working dir: %CD%
if !N! GTR 1 (
  echo [fix] clean npm cache, remove node_modules and dist
  call npm cache clean --force >logs\fix.log 2>&1
  rmdir /s /q node_modules 2>nul
  rmdir /s /q dist 2>nul
)
if !N! EQU 1 (
  call npm ci --no-audit --no-fund >logs\install.log 2>&1
) else (
  call npm ci --no-audit --no-fund --prefer-online --registry=%REG% >logs\install.log 2>&1
)
if errorlevel 1 (
  echo [fail] npm ci - see logs\install.log
  goto retry
)

del /q logs\lint.exit logs\build.exit 2>nul
start /b cmd /c "npm run lint >logs\lint.log 2>&1 && (echo 0)>logs\lint.exit || (echo 1)>logs\lint.exit"
start /b cmd /c "npm run build >logs\build.log 2>&1 && (echo 0)>logs\build.exit || (echo 1)>logs\build.exit"

set "W=0"
:wait
if exist logs\lint.exit if exist logs\build.exit goto waited
set /a W+=1
if !W! GTR 150 (
  echo [fail] lint/build timeout
  goto retry
)
ping -n 3 127.0.0.1 >nul
goto wait

:waited
set /p LINT=<logs\lint.exit
set /p BLD=<logs\build.exit
echo [check] lint=!LINT! build=!BLD!
if not "!LINT!"=="0" ( echo [fail] lint - see logs\lint.log & goto retry )
if not "!BLD!"=="0" ( echo [fail] build - see logs\build.log & goto retry )
if not exist dist\index.html ( echo [fail] dist\index.html missing & goto retry )
echo [check] dist\index.html present

powershell -NoProfile -ExecutionPolicy Bypass -Command "$p=Start-Process -FilePath npx.cmd -ArgumentList 'vite','preview','--port','4173','--strictPort' -PassThru -WindowStyle Hidden -RedirectStandardOutput logs\preview.log; try { $c=0; for($i=0;$i -lt 20;$i++){ try { $c=(Invoke-WebRequest -UseBasicParsing ('http://127.0.0.1:4173'+$env:BASE)).StatusCode; break } catch { Start-Sleep 1 } }; Write-Output $c } finally { taskkill /PID $p.Id /T /F | Out-Null }" >logs\preview.code 2>logs\preview.err
set /p PCODE=<logs\preview.code
echo [check] local preview HTTP !PCODE!
if not "!PCODE!"=="200" ( echo [fail] preview not 200 - see logs\preview.err & goto retry )

powershell -NoProfile -ExecutionPolicy Bypass -Command "try { (Invoke-WebRequest -UseBasicParsing 'https://hcdecorad.github.io/hc-ui-gallery-luxury-app/').StatusCode } catch { 0 }" >logs\pages.code 2>nul
set /p GCODE=<logs\pages.code
echo [check] live Pages HTTP !GCODE!

echo DONE attempt=!N! lint=!LINT! build=!BLD! dist=ok preview=!PCODE! pages=!GCODE!>logs\RESULT.txt
type logs\RESULT.txt
exit /b 0

:retry
if !N! LSS %MAX% goto loop
echo FAILED after !N! attempts - see logs>logs\RESULT.txt
type logs\RESULT.txt
exit /b 1
