import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function StatPage() {
  // undefined = session not yet loaded
  const [session, setSession]   = useState(undefined);
  const [isAdmin, setIsAdmin]   = useState(null);
  const [stats, setStats]       = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  // Login form
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Sync auth session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  // Check admin + load stats whenever session changes
  useEffect(() => {
    if (session === undefined) return; // still loading
    if (!session) { setIsAdmin(null); setStats(null); return; }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        // ── Admin gate ──────────────────────────────────────────────
        // Requires RLS policy: "Users can read their own profile row"
        //   CREATE POLICY "own profile" ON profiles FOR SELECT
        //     USING (auth.uid() = id);
        const { data: profile, error: profileErr } = await supabase
          .from('profiles')
          .select('is_admin')
          .eq('id', session.user.id)
          .single();

        if (profileErr) throw profileErr;
        if (cancelled) return;

        if (!profile?.is_admin) {
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        setIsAdmin(true);

        // ── Stats query ─────────────────────────────────────────────
        // TODO: For better performance replace with a Supabase view:
        //   CREATE VIEW public.stats_summary AS
        //     SELECT COUNT(*) AS total_attempts, ...
        //     FROM quiz_results;
        // Requires RLS policy on quiz_results for admin reads.
        const { data: rows, error: statsErr } = await supabase
          .from('quiz_results')
          .select('correct, wrong, accuracy, faculty, results, question_types');

        if (statsErr) throw statsErr;
        if (cancelled) return;

        // Aggregate client-side
        const total        = rows.length;
        const totalCorrect = rows.reduce((s, r) => s + (r.correct  ?? 0), 0);
        const totalWrong   = rows.reduce((s, r) => s + (r.wrong    ?? 0), 0);
        const avgAccuracy  = total > 0
          ? Math.round(rows.reduce((s, r) => s + (r.accuracy ?? 0), 0) / total)
          : 0;

        // Per-faculty breakdown
        const byFaculty = {};
        for (const r of rows) {
          const f = r.faculty || 'Unknown';
          if (!byFaculty[f]) byFaculty[f] = { attempts: 0, correct: 0 };
          byFaculty[f].attempts++;
          byFaculty[f].correct += r.correct ?? 0;
        }

        // Per-question-type breakdown
        // Zips results[] + question_types[] from each row to tally seen/wrong per type
        const byType = {};
        for (const r of rows) {
          const types   = r.question_types;
          const results = r.results;
          if (!Array.isArray(types) || !Array.isArray(results)) continue;
          for (let i = 0; i < types.length; i++) {
            const t = types[i] || 'unknown';
            if (!byType[t]) byType[t] = { seen: 0, wrong: 0 };
            byType[t].seen++;
            if (results[i] === 'wrong') byType[t].wrong++;
          }
        }

        setStats({ total, totalCorrect, totalWrong, avgAccuracy, byFaculty, byType });
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [session]);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoginLoading(false);
    if (error) setLoginError(error.message);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  // ── Session loading ──────────────────────────────────────────────
  if (session === undefined) {
    return (
      <div className="screen stat-screen">
        <p className="stat-loading">Loading…</p>
      </div>
    );
  }

  // ── Not authenticated — show login ───────────────────────────────
  if (!session) {
    return (
      <div className="screen stat-screen">
        <h2 className="stat-title">Stats</h2>
        <p className="stat-subtitle">Admin access required.</p>
        <form className="stat-login-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="student-id-input"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            className="student-id-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {loginError && <p className="stat-error">{loginError}</p>}
          <button className="btn-save stat-login-btn" type="submit" disabled={loginLoading}>
            {loginLoading ? '…' : 'Sign in'}
          </button>
        </form>
      </div>
    );
  }

  // ── Loading stats / admin check ──────────────────────────────────
  if (loading) {
    return (
      <div className="screen stat-screen">
        <p className="stat-loading">Loading stats…</p>
      </div>
    );
  }

  // ── Error ────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="screen stat-screen">
        <p className="stat-error">Error: {error}</p>
        <button className="btn-outline" onClick={handleLogout}>Sign out</button>
      </div>
    );
  }

  // ── Not admin ────────────────────────────────────────────────────
  if (isAdmin === false) {
    return (
      <div className="screen stat-screen">
        <p className="stat-error">Access denied.</p>
        <button className="btn-outline" onClick={handleLogout}>Sign out</button>
      </div>
    );
  }

  // ── Admin — show stats ───────────────────────────────────────────
  return (
    <div className="screen stat-screen">
      <div className="stat-header-row">
        <h2 className="stat-title">Stats</h2>
        <button className="btn-outline stat-signout" onClick={handleLogout}>Sign out</button>
      </div>

      {stats && (
        <>
          <div className="stats-grid stat-summary-grid">
            <div className="stat-cell">
              <span className="stat-num">{stats.total}</span>
              <span className="stat-lbl">Attempts</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">{stats.totalCorrect}</span>
              <span className="stat-lbl">Correct</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">{stats.totalWrong}</span>
              <span className="stat-lbl">Wrong</span>
            </div>
            <div className="stat-cell">
              <span className="stat-num">{stats.avgAccuracy}%</span>
              <span className="stat-lbl">Avg Accuracy</span>
            </div>
          </div>

          <p className="stat-section-title">By Question Type</p>
          <div className="stat-faculty-table" style={{ marginBottom: 28 }}>
            {Object.entries(stats.byType)
              .sort((a, b) => b[1].wrong / b[1].seen - a[1].wrong / a[1].seen)
              .map(([type, { seen, wrong }]) => {
                const failRate = seen > 0 ? Math.round((wrong / seen) * 100) : 0;
                return (
                  <div key={type} className="stat-faculty-row">
                    <span className="stat-faculty-name stat-type-name">{type}</span>
                    <span className="stat-faculty-val">{seen} shown</span>
                    <span className="stat-faculty-val">{wrong} wrong</span>
                    <span className={`stat-faculty-val stat-fail-rate${failRate >= 50 ? ' high' : ''}`}>
                      {failRate}% fail
                    </span>
                  </div>
                );
              })}
          </div>

          <p className="stat-section-title">By Faculty</p>
          <div className="stat-faculty-table">
            {Object.entries(stats.byFaculty)
              .sort((a, b) => b[1].attempts - a[1].attempts)
              .map(([faculty, { attempts, correct }]) => (
                <div key={faculty} className="stat-faculty-row">
                  <span className="stat-faculty-name">{faculty}</span>
                  <span className="stat-faculty-val">{attempts} attempts</span>
                  <span className="stat-faculty-val">
                    {attempts > 0 ? Math.round((correct / (attempts * 5)) * 100) : 0}% avg
                  </span>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
