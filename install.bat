@echo off
echo ========================================
echo    Ouloulou Ice Rolls - Installation
echo ========================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Running audit fix...
call npm audit fix --force

echo.
echo ========================================
echo    Installation Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   start.bat
echo.
pause

