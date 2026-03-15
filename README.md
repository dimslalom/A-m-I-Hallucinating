# Am I Hallucinating?

A quiz game where players decide whether AI-generated academic content is real or hallucinated.
Live at: **https://dimslalom.github.io/A-m-I-Hallucinating/**

---

## Running locally

```bash
# 1. Clone
git clone https://github.com/dimslalom/A-m-I-Hallucinating.git
cd A-m-I-Hallucinating

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your Supabase credentials

# 4. Start dev server
npm run dev
```

---

## Environment variables

Copy `.env.example` to `.env` and fill in your values:

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL (Project Settings → API) |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon/public key (safe for client) |

> Never commit your `.env` file. The anon key is safe to expose; never use the service role key on the client.

---

## Admin stats page

Visit `#/stat` to view quiz statistics (admin only):

```
https://dimslalom.github.io/A-m-I-Hallucinating/#/stat
```

- If not logged in: a compact email/password login form is shown.
- If logged in but not an admin: "Access denied".
- If admin: shows total attempts, correct/wrong counts, average accuracy, and a per-faculty breakdown.

---

## GitHub Pages + HashRouter

The app uses `HashRouter` from `react-router-dom`. This means all routes are encoded after `#` in the URL, which GitHub Pages serves correctly without needing a custom `404.html` redirect.

| Route | URL |
|---|---|
| Quiz home | `/#/` |
| Stats (admin) | `/#/stat` |

---

## Supabase setup checklist

### 1. Auth
Enable Email/Password sign-in in **Authentication → Providers**.

### 2. `profiles` table
```sql
-- Run in Supabase SQL editor
CREATE TABLE public.profiles (
  id   uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_admin boolean NOT NULL DEFAULT false
);

-- RLS: users can only read their own row
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own profile read"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Insert a profile row after creating your admin user:
INSERT INTO public.profiles (id, is_admin)
VALUES ('<your-auth-user-uuid>', true);
```

### 3. `quiz_results` table
```sql
CREATE TABLE public.quiz_results (
  id         bigserial PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  student_id text,
  faculty    text,
  score      int,
  correct    int,
  wrong      int,
  accuracy   int,
  results    jsonb
);

-- RLS: anyone can insert (for quiz saves)
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public insert"
  ON public.quiz_results FOR INSERT
  WITH CHECK (true);

-- Only admins can read (enforced in app via profiles check)
-- Optionally create a stats_summary view for better performance:
CREATE VIEW public.stats_summary AS
  SELECT
    COUNT(*)                        AS total_attempts,
    SUM(correct)                    AS total_correct,
    SUM(wrong)                      AS total_wrong,
    ROUND(AVG(accuracy))            AS avg_accuracy
  FROM public.quiz_results;
```

### 4. Deploy
```bash
npm run build
npm run deploy   # uses gh-pages to push dist/ to gh-pages branch
```
