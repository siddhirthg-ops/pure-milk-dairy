# 🚀 Quick Database Setup Guide

## ✅ What's Been Set Up

Your project now has:
- ✅ Supabase client configuration (`src/lib/supabase.ts`)
- ✅ API endpoint for form submissions (`api/submit-form/index.ts`)
- ✅ Updated contact form to save to database
- ✅ Vercel serverless function configuration
- ✅ All required dependencies installed

---

## 📋 Next Steps (5 minutes)

### Step 1: Create Supabase Account (2 minutes)

1. Go to **https://supabase.com**
2. Click **"Start your project"** (free tier available)
3. Sign up with GitHub or email
4. Click **"New Project"**
5. Fill in:
   - **Name:** Pure Milk Dairy
   - **Database Password:** (create a strong password, save it!)
   - **Region:** Choose closest to you
6. Click **"Create new project"**
7. Wait ~2 minutes for project to initialize

---

### Step 2: Create Database Table (1 minute)

1. In Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  inquiry_type TEXT NOT NULL CHECK (inquiry_type IN ('order', 'franchise')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON form_submissions
  FOR INSERT
  WITH CHECK (true);
```

4. Click **"Run"** (or press `Ctrl+Enter`)
5. ✅ Table created!

---

### Step 3: Get API Keys (1 minute)

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (long string under "Project API keys")

---

### Step 4: Add Environment Variables to Vercel (1 minute)

1. Go to your **Vercel dashboard** → Your project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

**Variable 1:**
- Key: `VITE_SUPABASE_URL`
- Value: (your Supabase Project URL)
- Environment: Production, Preview, Development (select all)

**Variable 2:**
- Key: `VITE_SUPABASE_ANON_KEY`
- Value: (your Supabase anon key)
- Environment: Production, Preview, Development (select all)

**Variable 3:**
- Key: `SUPABASE_URL`
- Value: (same as VITE_SUPABASE_URL)
- Environment: Production, Preview, Development

**Variable 4:**
- Key: `SUPABASE_ANON_KEY`
- Value: (same as VITE_SUPABASE_ANON_KEY)
- Environment: Production, Preview, Development

**Variable 5 (Optional but recommended):**
- Key: `SUPABASE_SERVICE_ROLE_KEY`
- Value: (your service_role key from Supabase Settings → API)
- Environment: Production, Preview, Development
- ⚠️ Keep this secret! Only for server-side use.

4. Click **"Save"** on each one
5. **Redeploy** your site (Vercel will auto-redeploy if you push to GitHub, or manually click "Redeploy")

---

### Step 5: Test It! (30 seconds)

1. Go to your deployed website
2. Fill out the contact form
3. Submit it
4. Check **Supabase dashboard** → **Table Editor** → `form_submissions`
5. You should see your submission! 🎉

---

## 🎉 Done!

Your database is now connected. All form submissions will be:
- ✅ Saved to Supabase database
- ✅ Email notification still sent (backup)
- ✅ Viewable in Supabase dashboard

---

## 📊 View Submissions

### Option 1: Supabase Dashboard
- **Table Editor** → `form_submissions` → View all data

### Option 2: SQL Editor
```sql
-- View all submissions
SELECT * FROM form_submissions ORDER BY created_at DESC;

-- Count by type
SELECT inquiry_type, COUNT(*) 
FROM form_submissions 
GROUP BY inquiry_type;
```

---

## 🔧 Troubleshooting

**"Failed to save submission" error:**
- ✅ Check environment variables are set in Vercel
- ✅ Verify Supabase credentials are correct
- ✅ Make sure table was created
- ✅ Redeploy after adding environment variables

**API not found:**
- ✅ Make sure you're on Vercel (serverless functions need Vercel)
- ✅ Check Vercel deployment logs

---

## 📚 Full Documentation

See `DATABASE_SETUP.md` for detailed instructions.

---

## ✅ Checklist

- [ ] Created Supabase account
- [ ] Created project
- [ ] Created `form_submissions` table
- [ ] Copied API credentials
- [ ] Added environment variables to Vercel
- [ ] Redeployed site
- [ ] Tested form submission
- [ ] Verified data in Supabase

Your database is ready! 🚀
