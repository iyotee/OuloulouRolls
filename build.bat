@echo off
echo ========================================
echo   Ouloulou Ice Rolls - Production Build
echo ========================================
echo.

echo Building for production...
call npm run build

echo.
echo ========================================
echo    Build Complete!
echo ========================================
echo.
echo The production files are in the 'dist' folder.
echo.
echo To preview the build locally, run:
echo   npm run preview
echo.
pause

