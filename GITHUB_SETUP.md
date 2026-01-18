# 🚀 Push to GitHub - Complete Guide

## Step 1: Install Git (If Not Installed)

1. **Download Git for Windows:**
   - Go to: https://git-scm.com/download/win
   - Download and install (use default settings)
   - **Restart your terminal/IDE after installation**

2. **Verify Installation:**
   ```bash
   git --version
   ```

---

## Step 2: Create GitHub Account (If Needed)

1. Go to: **https://github.com/signup**
2. Sign up (free)
3. Verify your email

---

## Step 3: Create a New Repository on GitHub

1. **Go to GitHub:** https://github.com/new
2. **Repository name:** `pure-milk-dairy-website` (or any name you like)
3. **Description:** "Pure Milk Dairy Business Website"
4. **Visibility:** Choose Public or Private
5. **DON'T** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

---

## Step 4: Push Your Code to GitHub

Once Git is installed, run these commands in your terminal:

### Open Terminal in Your Project Folder

```bash
cd "C:\Users\gadhe\Desktop\Business Website"
```

### Initialize Git Repository

```bash
git init
```

### Add All Files

```bash
git add .
```

### Create First Commit

```bash
git commit -m "Initial commit: Pure Milk Dairy website"
```

### Add GitHub Remote (Replace YOUR_USERNAME with your GitHub username)

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/pure-milk-dairy-website.git
```

### Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**Note:** First time pushing will ask for GitHub username and password (use Personal Access Token, not password)

---

## Step 5: Get Personal Access Token (If Required)

If GitHub asks for password authentication:

1. Go to: **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Name it: "Vercel Deployment"
4. Select scopes: **repo** (check the box)
5. Click **"Generate token"**
6. **Copy the token** (you'll only see it once!)
7. Use this token as your password when pushing

---

## Step 6: Deploy to Vercel from GitHub

1. Go back to **Vercel dashboard**
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository
5. Click **"Deploy"**
6. **Done!** Your site is live!

---

## 🎯 Quick Commands Summary

After installing Git, run these in order:

```bash
cd "C:\Users\gadhe\Desktop\Business Website"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 📝 Alternative: Use GitHub Desktop (Easier GUI)

If you prefer a visual interface:

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Install and sign in** with your GitHub account
3. **File** → **Add Local Repository**
4. Select your project folder
5. **Publish repository** to GitHub
6. **Done!**

---

## ✅ Current Status

- ✅ Repository files prepared
- ✅ .gitignore file created
- ⏳ Waiting for Git installation
- ⏳ Waiting for GitHub repository creation

Once you complete steps 1-3 above, I can help you push the code!
