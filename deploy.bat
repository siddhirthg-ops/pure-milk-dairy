@echo off
echo ========================================
echo Deploying to Vercel...
echo ========================================
echo.

REM Add Node.js to PATH
set PATH=%ProgramFiles%\nodejs;%PATH%

REM Deploy using npx
npx vercel --prod --yes

echo.
echo ========================================
echo Deployment complete!
echo Check the URL above for your live website.
echo ========================================
pause
