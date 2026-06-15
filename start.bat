@echo off
cd /d "%~dp0"
echo ═══════════════════════════════════
echo   مساعدي المحاسبي - Local Server
echo ═══════════════════════════════════
echo.
echo   📱 ع التلفون افتح:
echo   http://192.168.100.4:8080
echo.
echo   ❌ عشان توقف: Ctrl+C
echo ═══════════════════════════════════
echo.
start http://localhost:8080
python -m http.server 8080 --bind 0.0.0.0
pause
