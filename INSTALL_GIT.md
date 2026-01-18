# 🔧 Install Git for Windows

## Quick Installation Steps:

### Method 1: Download Git Installer

1. **Download Git for Windows:**
   - Go to: **https://git-scm.com/download/win**
   - Click the download button (it will automatically detect your system)
   - File size: ~50 MB

2. **Run the Installer:**
   - Double-click the downloaded `.exe` file
   - Click "Next" through the installation wizard
   - **Important:** Use default settings (they're fine!)
   - Click "Install"
   - Wait for installation to complete

3. **Verify Installation:**
   - Open a NEW terminal/command prompt
   - Type: `git --version`
   - You should see: `git version 2.x.x`

4. **Configure Git (First Time):**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

---

### Method 2: Install via Winget (If Available)

Open PowerShell as Administrator and run:
```bash
winget install Git.Git
```

---

### Method 3: Use GitHub Desktop (Easier for Beginners)

1. **Download GitHub Desktop:**
   - Go to: **https://desktop.github.com/**
   - Download and install
   - It includes Git automatically!

2. **Use GitHub Desktop:**
   - Sign in with your GitHub account
   - File → Add Local Repository
   - Select your project folder
   - Click "Publish repository"
   - Done! ✅

---

## ✅ After Installing Git

Once Git is installed:

1. **Restart your terminal/IDE** (important!)
2. Run: `git --version` to verify
3. Then follow the instructions in `GITHUB_SETUP.md`

---

## 🚀 Quick Push Commands (After Git Installation)

Once Git is installed and you've created a GitHub repository:

```bash
cd "C:\Users\gadhe\Desktop\Business Website"
git init
git add .
git commit -m "Initial commit: Pure Milk Dairy website"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `REPO_NAME` with your repository name

---

## 📞 Need Help?

- Git Documentation: https://git-scm.com/doc
- GitHub Guide: https://guides.github.com/
