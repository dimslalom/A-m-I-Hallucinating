import { useState, useEffect } from 'react';
import {
  PieChart, Pie, Cell, Label,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LabelList,
} from 'recharts';
import { supabase } from '../lib/supabase';

// ── Theme colours (mirrors theme.js so SVG can use them) ────────
const C = {
  primary:     '#510094',
  primarySoft: '#7a2bbf',
  correct:     '#1DB000',
  wrong:       '#CC0505',
  muted:       '#7a5a9a',
  border:      '#A461DA',
  accentLight: '#E8DEF8',
  bg:          '#ffffff',
  orange:      '#E87800',
};

const TYPE_LABELS = {
  tweet:     'Tweet',
  abstract:  'Abstract',
  reference: 'Reference',
  slide:     'Slide',
  instagram: 'Instagram',
};

function failColor(pct) {
  if (pct >= 60) return C.wrong;
  if (pct >= 35) return C.orange;
  return C.correct;
}

// ── KPI card ────────────────────────────────────────────────────
function KpiCard({ label, value, sub, accent }) {
  return (
    <div className="sp-kpi-card" style={{ borderTopColor: accent || C.primary }}>
      <span className="sp-kpi-value" style={{ color: accent || C.primary }}>{value}</span>
      <span className="sp-kpi-label">{label}</span>
      {sub && <span className="sp-kpi-sub">{sub}</span>}
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────
function Section({ title, children }) {
  return (
    <div className="sp-section">
      <p className="sp-section-title">{title}</p>
      {children}
    </div>
  );
}

// ── Custom Tooltip for bar charts ────────────────────────────────
function BarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="sp-tooltip">
      <p className="sp-tooltip-label">{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.fill || p.color }}>
          {p.name}: <strong>{p.value}{p.unit || ''}</strong>
        </p>
      ))}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────
export default function StatPage() {
  const [session, setSession]           = useState(undefined);
  const [isAdmin, setIsAdmin]           = useState(null);
  const [stats, setStats]               = useState(null);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState(null);
  const [email, setEmail]               = useState('');
  const [password, setPassword]         = useState('');
  const [loginError, setLoginError]     = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session === undefined) return;
    if (!session) { setIsAdmin(null); setStats(null); return; }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        // RLS: users can read their own profile row
        const { data: profile, error: profileErr } = await supabase
          .from('profiles').select('is_admin').eq('id', session.user.id).single();
        if (profileErr) throw profileErr;
        if (cancelled) return;
        if (!profile?.is_admin) { setIsAdmin(false); setLoading(false); return; }
        setIsAdmin(true);

        // RLS: admins can read all rows from quiz_results
        const { data: rows, error: statsErr } = await supabase
          .from('quiz_results')
          .select(
            'correct, wrong, accuracy, faculty,' +
            'q1_type, q1_correct, q2_type, q2_correct, q3_type, q3_correct,' +
            'q4_type, q4_correct, q5_type, q5_correct'
          );
        if (statsErr) throw statsErr;
        if (cancelled) return;

        // ── Totals ──────────────────────────────────────────────
        const total        = rows.length;
        const totalCorrect = rows.reduce((s, r) => s + (r.correct  ?? 0), 0);
        const totalWrong   = rows.reduce((s, r) => s + (r.wrong    ?? 0), 0);
        const avgAccuracy  = total > 0
          ? Math.round(rows.reduce((s, r) => s + (r.accuracy ?? 0), 0) / total) : 0;

        // ── By question type ─────────────────────────────────────
        const typeMap = {};
        for (const r of rows) {
          for (let i = 1; i <= 5; i++) {
            const t = r[`q${i}_type`];
            if (!t) continue;
            if (!typeMap[t]) typeMap[t] = { seen: 0, wrong: 0 };
            typeMap[t].seen++;
            if (r[`q${i}_correct`] === false) typeMap[t].wrong++;
          }
        }
        const byType = Object.entries(typeMap)
          .map(([type, { seen, wrong }]) => ({
            name:     TYPE_LABELS[type] || type,
            seen,
            wrong,
            correct:  seen - wrong,
            failPct:  seen > 0 ? Math.round((wrong / seen) * 100) : 0,
          }))
          .sort((a, b) => b.failPct - a.failPct);

        // ── By faculty ───────────────────────────────────────────
        const facMap = {};
        for (const r of rows) {
          const f = r.faculty || 'Unknown';
          if (!facMap[f]) facMap[f] = { attempts: 0, correct: 0, wrong: 0 };
          facMap[f].attempts++;
          facMap[f].correct += r.correct ?? 0;
          facMap[f].wrong   += r.wrong   ?? 0;
        }
        const byFaculty = Object.entries(facMap)
          .map(([name, { attempts, correct, wrong }]) => ({
            name,
            attempts,
            correct,
            wrong,
            avgAcc: attempts > 0 ? Math.round((correct / (attempts * 5)) * 100) : 0,
          }))
          .sort((a, b) => b.attempts - a.attempts);

        setStats({ total, totalCorrect, totalWrong, avgAccuracy, byType, byFaculty });
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

  async function handleLogout() { await supabase.auth.signOut(); }

  // ── Auth / loading states ────────────────────────────────────
  if (session === undefined) return <Shell><p className="sp-status">Loading…</p></Shell>;

  if (!session) return (
    <Shell>
      <h2 className="sp-page-title">Stats</h2>
      <p className="sp-page-sub">Admin access required.</p>
      <form className="sp-login-form" onSubmit={handleLogin}>
        <input type="email"    className="student-id-input" placeholder="Email"
          value={email}    onChange={e => setEmail(e.target.value)}    required autoComplete="email" />
        <input type="password" className="student-id-input" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
        {loginError && <p className="sp-error">{loginError}</p>}
        <button className="btn-save sp-login-btn" type="submit" disabled={loginLoading}>
          {loginLoading ? '…' : 'Sign in'}
        </button>
      </form>
    </Shell>
  );

  if (loading)         return <Shell><p className="sp-status">Loading stats…</p></Shell>;
  if (error)           return <Shell><p className="sp-error">Error: {error}</p><SignOut onLogout={handleLogout} /></Shell>;
  if (isAdmin === false) return <Shell><p className="sp-error">Access denied.</p><SignOut onLogout={handleLogout} /></Shell>;

  // ── Dashboard ────────────────────────────────────────────────
  const donutData = [
    { name: 'Correct', value: stats.totalCorrect },
    { name: 'Wrong',   value: stats.totalWrong   },
  ];

  return (
    <Shell>
      <div className="sp-header-row">
        <h2 className="sp-page-title">Stats</h2>
        <SignOut onLogout={handleLogout} />
      </div>

      {/* KPI cards */}
      <div className="sp-kpi-row">
        <KpiCard label="Total Attempts" value={stats.total} accent={C.primary} />
        <KpiCard label="Correct Answers" value={stats.totalCorrect}
          sub={`across all rounds`} accent={C.correct} />
        <KpiCard label="Wrong Answers" value={stats.totalWrong}
          sub={`across all rounds`} accent={C.wrong} />
        <KpiCard label="Avg Accuracy" value={`${stats.avgAccuracy}%`} accent={C.primarySoft} />
      </div>

      {/* Two-column: donut + question type */}
      <div className="sp-two-col">

        <Section title="Overall Result">
          <div className="sp-chart-wrap sp-chart-wrap--short">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%" cy="50%"
                  innerRadius={64} outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90} endAngle={-270}
                >
                  <Cell fill={C.correct} />
                  <Cell fill={C.wrong} />
                  <Label
                    content={({ viewBox }) => {
                      const { cx, cy } = viewBox;
                      return (
                        <g>
                          <text x={cx} y={cy - 8} textAnchor="middle"
                            fill={C.primary} fontSize={30} fontWeight={800}>
                            {stats.avgAccuracy}%
                          </text>
                          <text x={cx} y={cy + 14} textAnchor="middle"
                            fill={C.muted} fontSize={11} fontWeight={500}>
                            accuracy
                          </text>
                        </g>
                      );
                    }}
                    position="center"
                  />
                </Pie>
                <Tooltip
                  formatter={(v, name) => [`${v} answers`, name]}
                  contentStyle={{ border: `1px solid ${C.border}`, borderRadius: 6, fontSize: 13 }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="sp-donut-legend">
              <span className="sp-legend-dot" style={{ background: C.correct }} />
              <span>Correct ({stats.totalCorrect})</span>
              <span className="sp-legend-dot" style={{ background: C.wrong }} />
              <span>Wrong ({stats.totalWrong})</span>
            </div>
          </div>
        </Section>

        <Section title="Fail Rate by Question Type">
          <div className="sp-chart-wrap sp-chart-wrap--short">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={stats.byType}
                layout="vertical"
                margin={{ top: 0, right: 48, bottom: 0, left: 16 }}
              >
                <CartesianGrid horizontal={false} stroke={C.accentLight} />
                <XAxis type="number" domain={[0, 100]} tickFormatter={v => `${v}%`}
                  tick={{ fontSize: 11, fill: C.muted }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" width={72}
                  tick={{ fontSize: 12, fill: C.primary, fontWeight: 600 }}
                  axisLine={false} tickLine={false} />
                <Tooltip content={<BarTooltip />} cursor={{ fill: C.accentLight }} />
                <Bar dataKey="failPct" name="Fail rate" unit="%" radius={[0, 4, 4, 0]}>
                  {stats.byType.map((entry, i) => (
                    <Cell key={i} fill={failColor(entry.failPct)} />
                  ))}
                  <LabelList dataKey="failPct" position="right"
                    formatter={v => `${v}%`}
                    style={{ fontSize: 11, fontWeight: 700, fill: C.muted }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Section>

      </div>

      {/* Question type detail table */}
      <Section title="Question Type Breakdown">
        <div className="sp-type-grid">
          {stats.byType.map(({ name, seen, correct, wrong, failPct }) => (
            <div key={name} className="sp-type-card">
              <div className="sp-type-name">{name}</div>
              <div className="sp-type-bar-bg">
                <div
                  className="sp-type-bar-fill"
                  style={{ width: `${100 - failPct}%`, background: failColor(100 - failPct) }}
                />
              </div>
              <div className="sp-type-stats">
                <span style={{ color: C.correct }}>✓ {correct}</span>
                <span style={{ color: C.wrong }}>✗ {wrong}</span>
                <span style={{ color: failColor(failPct), fontWeight: 700 }}>{failPct}% fail</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Faculty breakdown */}
      {stats.byFaculty.length > 0 && (
        <Section title="By Faculty">
          <div className="sp-chart-wrap">
            <ResponsiveContainer width="100%" height={Math.max(180, stats.byFaculty.length * 52)}>
              <BarChart
                data={stats.byFaculty}
                layout="vertical"
                margin={{ top: 0, right: 60, bottom: 0, left: 8 }}
                barSize={18}
              >
                <CartesianGrid horizontal={false} stroke={C.accentLight} />
                <XAxis type="number" tick={{ fontSize: 11, fill: C.muted }}
                  axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" width={110}
                  tick={{ fontSize: 12, fill: C.primary, fontWeight: 600 }}
                  axisLine={false} tickLine={false} />
                <Tooltip content={<BarTooltip />} cursor={{ fill: C.accentLight }} />
                <Bar dataKey="correct" name="Correct" fill={C.correct}
                  stackId="a" radius={[0, 0, 0, 0]}>
                </Bar>
                <Bar dataKey="wrong" name="Wrong" fill={C.wrong}
                  stackId="a" radius={[0, 4, 4, 0]}>
                  <LabelList
                    content={({ x, y, width, height, index }) => {
                      const d = stats.byFaculty[index];
                      return (
                        <text
                          x={x + width + 8} y={y + height / 2}
                          dominantBaseline="middle" fontSize={11}
                          fontWeight={700} fill={C.muted}
                        >
                          {d.attempts} · {d.avgAcc}% avg
                        </text>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stacked bar legend */}
          <div className="sp-donut-legend" style={{ marginTop: 8 }}>
            <span className="sp-legend-dot" style={{ background: C.correct }} />
            <span>Correct</span>
            <span className="sp-legend-dot" style={{ background: C.wrong }} />
            <span>Wrong</span>
          </div>
        </Section>
      )}
    </Shell>
  );
}

// ── Tiny helpers ─────────────────────────────────────────────────
function Shell({ children }) {
  return <div className="screen sp-screen">{children}</div>;
}
function SignOut({ onLogout }) {
  return <button className="btn-outline sp-signout" onClick={onLogout}>Sign out</button>;
}
