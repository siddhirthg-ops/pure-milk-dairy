@echo off
echo ========================================
echo Pushing to GitHub...
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo.
    echo Please install Git first:
    echo 1. Go to: https://git-scm.com/download/win
    echo 2. Download and install Git
    echo 3. Restart this terminal
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

echo Git is installed!
echo.

REM Change to project directory
cd /d "%~dp0"

echo Current directory: %CD%
echo.

REM Initialize git if not already done
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add all files
echo Adding files...
git add .
echo.

REM Commit
echo Creating commit...
git commit -m "Initial commit: Pure Milk Dairy website"
echo.

echo ========================================
echo NEXT STEPS:
echo ========================================
echo.
echo 1. Create a repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Then run these commands (replace YOUR_USERNAME and REPO_NAME):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ========================================
echo.
pause
