# Deployment Guide for Pure Milk Dairy Website

## Quick Access on Local Network (Same WiFi)

Your website is already accessible on your local network:

**Local Network URL:** `http://172.29.186.185:8080/`

**How to access on another device:**
1. Make sure both devices are on the same WiFi network
2. Open a web browser on the other device
3. Type the URL: `http://172.29.186.185:8080/`
4. The website will load!

**Note:** The dev server must be running for this to work.

---

## Publish Website Online (Permanent Link)

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Install Vercel CLI (if not installed):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Login to Vercel (creates account if needed)
   - Confirm project settings
   - Deploy!

3. **Your website will be live at:** `https://your-project-name.vercel.app`

4. **Or deploy via GitHub:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-deploy!

### Option 2: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```
   
   Follow the prompts to login and deploy.

3. **Or deploy via drag-and-drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder (from the build) onto the Netlify dashboard
   - Your site is live!

4. **Your website will be live at:** `https://your-project-name.netlify.app`

### Option 3: Deploy to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to package.json scripts:**
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages in your repository settings**

---

## Production Build

Your production build is already created in the `dist` folder.

**To rebuild:**
```bash
npm run build
```

**To preview the production build locally:**
```bash
npm run preview
```

---

## Current Status

✅ Production build created: `dist/` folder
✅ Deployment configs created (vercel.json, netlify.toml)
✅ Local network access: `http://172.29.186.185:8080/`

---

## Recommended: Vercel Deployment

The easiest way to get a permanent link:

1. Go to [vercel.com/signup](https://vercel.com/signup)
2. Sign up with GitHub (recommended) or email
3. Click "New Project"
4. Import your GitHub repository (or drag the `dist` folder)
5. Click "Deploy"
6. Your site will be live in seconds!

**Your permanent link will be:** `https://your-project-name.vercel.app`

---

## Troubleshooting

- **Can't access on local network?** Make sure both devices are on the same WiFi
- **Build failed?** Run `npm install` first
- **404 errors?** Make sure the rewrite rules are configured (already done in vercel.json and netlify.toml)
