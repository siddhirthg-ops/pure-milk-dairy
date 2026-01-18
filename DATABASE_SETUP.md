# 🗄️ Database Setup Guide

## Overview
This project uses **Supabase** (PostgreSQL) to store form submissions from the contact form.

---

## 📋 Step 1: Create Supabase Account

1. Go to: **https://supabase.com**
2. Click **"Start your project"** (free tier available)
3. Sign up with GitHub or email
4. Create a new project

---

## 📋 Step 2: Create Database Table

Once your Supabase project is created:

1. Go to **SQL Editor** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
-- Create form_submissions table
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  inquiry_type TEXT NOT NULL CHECK (inquiry_type IN ('order', 'franchise')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster searches
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);

-- Create index on inquiry_type for filtering
CREATE INDEX IF NOT EXISTS idx_form_submissions_inquiry_type ON form_submissions(inquiry_type);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON form_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can submit forms)
CREATE POLICY "Allow public inserts" ON form_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow reads (you can customize this)
-- For now, we'll allow authenticated reads only
-- You can modify this based on your needs
CREATE POLICY "Allow authenticated reads" ON form_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

4. Click **"Run"** or press `Ctrl+Enter`
5. Table created! ✅

---

## 📋 Step 3: Get Supabase Credentials

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy these values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys" → "anon public")

---

## 📋 Step 4: Configure Environment Variables

### For Local Development:

1. Create a file named `.env` in your project root (copy from `env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these variables:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
   - `SUPABASE_URL` = same as above (for serverless functions)
   - `SUPABASE_ANON_KEY` = same as above (for serverless functions)
   - `SUPABASE_SERVICE_ROLE_KEY` = your service role key (for server-side operations)

---

## 📋 Step 5: Set Up Vercel Serverless Functions

The API route is already created at `api/submit-form.ts`.

For Vercel to recognize it, make sure your `vercel.json` includes:

```json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "@vercel/node"
    }
  }
}
```

---

## 📋 Step 6: Test the Connection

1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your Supabase dashboard → **Table Editor** → `form_submissions`
5. You should see your submission! ✅

---

## 🔍 Viewing Submissions

### Option 1: Supabase Dashboard
- Go to **Table Editor** → `form_submissions`
- View all submissions in a table format

### Option 2: Supabase SQL Editor
Run queries like:
```sql
-- View all submissions
SELECT * FROM form_submissions ORDER BY created_at DESC;

-- View only orders
SELECT * FROM form_submissions WHERE inquiry_type = 'order';

-- View submissions from last 7 days
SELECT * FROM form_submissions 
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Option 3: Create Admin Dashboard (Future)
We can create a React admin page to view submissions.

---

## 🔒 Security Notes

- The **anon key** is safe to use in client-side code
- The **service role key** should NEVER be exposed in client code
- Row Level Security (RLS) is enabled to protect data
- Only authenticated users can read submissions (you can modify this)

---

## 📊 Database Schema

```
form_submissions
├── id (UUID, Primary Key)
├── name (TEXT, Required)
├── email (TEXT, Required)
├── phone (TEXT, Required)
├── message (TEXT, Required)
├── inquiry_type (TEXT, 'order' or 'franchise')
└── created_at (TIMESTAMP, Auto-generated)
```

---

## 🛠️ Troubleshooting

### "Failed to save submission" error:
- Check if environment variables are set correctly
- Verify Supabase credentials are correct
- Check Supabase dashboard for any errors
- Make sure the table was created successfully

### API route not found:
- Make sure you're deploying to Vercel (serverless functions work there)
- For local dev, you might need to set up a dev server proxy
- Or update `VITE_API_URL` in `.env` to point to your API

### CORS errors:
- The API function handles CORS automatically
- If issues persist, check Vercel function logs

---

## 📚 Resources

- Supabase Docs: https://supabase.com/docs
- Supabase Dashboard: https://supabase.com/dashboard
- Vercel Functions: https://vercel.com/docs/functions

---

## ✅ Checklist

- [ ] Created Supabase account
- [ ] Created new project
- [ ] Created `form_submissions` table
- [ ] Got API credentials
- [ ] Set environment variables locally
- [ ] Set environment variables in Vercel
- [ ] Tested form submission
- [ ] Verified data in Supabase dashboard

---

Your database is now connected! 🎉
