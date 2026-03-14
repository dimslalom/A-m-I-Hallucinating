import { useState } from 'react';
import aiqr from '../assets/aiqr.png';

const ROUND_SIZE = 5;

export default function EndScreen({ correct, wrong, results, onSave, onRestart }) {
  const [studentId, setStudentId] = useState('');
  const [saved, setSaved]         = useState(false);
  const [saving, setSaving]       = useState(false);

  const accuracy = Math.round((correct / ROUND_SIZE) * 100);
  const won      = correct >= 4;

  async function handleSave() {
    if (!studentId.trim() || saving || saved) return;
    setSaving(true);
    await onSave(studentId.trim());
    setSaving(false);
    setSaved(true);
  }

  return (
    <div className="screen" id="screen-end">
      <p className="end-eyebrow">{won ? 'Quest Cleared! 🎉' : 'Mission Failed'}</p>
      <h2 className="end-headline">
        {won ? 'You passed the BS Detector.' : 'You fell for the hallucination.'}
      </h2>
      <p className="end-tagline">
        {won
          ? 'Show this screen to our staff to claim your free coffee!'
          : 'BUT — scan the QR code below for a second chance. Find the definition of Contract Cheating, then tell our staff the answer to win!'}
      </p>

      <div className="result-dots">
        {results.map((r, i) => (
          <div key={i} className={`result-dot ${r === 'correct' ? 'c' : 'w'}`}>
            {r === 'correct' ? '✓' : '✗'}
          </div>
        ))}
      </div>

      <div className="score-block">
        <div className="score-number">{correct}<span className="score-denom-inline">/{ROUND_SIZE}</span></div>
        <div className="score-denom">{accuracy}% accuracy</div>
      </div>

      <div className="stats-grid">
        <div className="stat-cell">
          <span className="stat-num">{correct}</span>
          <span className="stat-lbl">Correct</span>
        </div>
        <div className="stat-cell">
          <span className="stat-num">{wrong}</span>
          <span className="stat-lbl">Wrong</span>
        </div>
        <div className="stat-cell">
          <span className="stat-num">{accuracy}%</span>
          <span className="stat-lbl">Accuracy</span>
        </div>
      </div>

      {!saved ? (
        <div className="save-score-wrap">
          <label className="student-id-label" htmlFor="end-student-id">
            Student ID <span className="optional">(optional — save your score)</span>
          </label>
          <div className="save-row">
            <input
              id="end-student-id"
              type="text"
              className="student-id-input"
              placeholder="e.g. s4891234"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSave()}
              autoComplete="off"
            />
            <button
              className="btn-save"
              onClick={handleSave}
              disabled={!studentId.trim() || saving}
            >
              {saving ? '...' : 'SAVE'}
            </button>
          </div>
        </div>
      ) : (
        <p className="save-confirm">Score saved!</p>
      )}

      <div className="qr-section">
        <p className="qr-eyebrow">
          {won ? 'Scan while you wait for your coffee' : 'Scan for your extra life'}
        </p>
        <div className="qr-wrap">
          <img src={aiqr} alt="UQ AI Student Hub QR Code" style={{ width: '100%', height: '100%', display: 'block' }} />
          {false && <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
            {/* Corner squares */}
            <rect x="5"  y="5"  width="26" height="26" stroke="#000" strokeWidth="4"/>
            <rect x="11" y="11" width="14" height="14" fill="#000"/>
            <rect x="69" y="5"  width="26" height="26" stroke="#000" strokeWidth="4"/>
            <rect x="75" y="11" width="14" height="14" fill="#000"/>
            <rect x="5"  y="69" width="26" height="26" stroke="#000" strokeWidth="4"/>
            <rect x="11" y="75" width="14" height="14" fill="#000"/>
            {/* Data pattern */}
            <rect x="38" y="5"  width="5" height="5"  fill="#000"/>
            <rect x="46" y="5"  width="5" height="5"  fill="#000"/>
            <rect x="54" y="5"  width="10" height="5" fill="#000"/>
            <rect x="38" y="13" width="5" height="5"  fill="#000"/>
            <rect x="50" y="13" width="5" height="5"  fill="#000"/>
            <rect x="60" y="13" width="5" height="5"  fill="#000"/>
            <rect x="38" y="21" width="10" height="5" fill="#000"/>
            <rect x="56" y="21" width="8"  height="5" fill="#000"/>
            <rect x="38" y="29" width="5" height="5"  fill="#000"/>
            <rect x="46" y="29" width="8" height="5"  fill="#000"/>
            <rect x="60" y="29" width="5" height="5"  fill="#000"/>
            <rect x="5"  y="38" width="5" height="5"  fill="#000"/>
            <rect x="14" y="38" width="5" height="5"  fill="#000"/>
            <rect x="23" y="38" width="5" height="5"  fill="#000"/>
            <rect x="38" y="38" width="5" height="5"  fill="#000"/>
            <rect x="50" y="38" width="5" height="5"  fill="#000"/>
            <rect x="60" y="38" width="5" height="5"  fill="#000"/>
            <rect x="69" y="38" width="5" height="5"  fill="#000"/>
            <rect x="80" y="38" width="5" height="5"  fill="#000"/>
            <rect x="90" y="38" width="5" height="5"  fill="#000"/>
            <rect x="5"  y="46" width="10" height="5" fill="#000"/>
            <rect x="20" y="46" width="5" height="5"  fill="#000"/>
            <rect x="38" y="46" width="5" height="5"  fill="#000"/>
            <rect x="48" y="46" width="8" height="5"  fill="#000"/>
            <rect x="60" y="46" width="5" height="5"  fill="#000"/>
            <rect x="74" y="46" width="10" height="5" fill="#000"/>
            <rect x="90" y="46" width="5" height="5"  fill="#000"/>
            <rect x="5"  y="54" width="5" height="5"  fill="#000"/>
            <rect x="16" y="54" width="8" height="5"  fill="#000"/>
            <rect x="30" y="54" width="5" height="5"  fill="#000"/>
            <rect x="40" y="54" width="8" height="5"  fill="#000"/>
            <rect x="56" y="54" width="5" height="5"  fill="#000"/>
            <rect x="66" y="54" width="5" height="5"  fill="#000"/>
            <rect x="78" y="54" width="5" height="5"  fill="#000"/>
            <rect x="88" y="54" width="7" height="5"  fill="#000"/>
            <rect x="5"  y="62" width="8" height="5"  fill="#000"/>
            <rect x="18" y="62" width="5" height="5"  fill="#000"/>
            <rect x="28" y="62" width="5" height="5"  fill="#000"/>
            <rect x="44" y="62" width="5" height="5"  fill="#000"/>
            <rect x="54" y="62" width="10" height="5" fill="#000"/>
            <rect x="69" y="62" width="5" height="5"  fill="#000"/>
            <rect x="80" y="62" width="5" height="5"  fill="#000"/>
            <rect x="90" y="62" width="5" height="5"  fill="#000"/>
            <rect x="38" y="69" width="5" height="5"  fill="#000"/>
            <rect x="48" y="69" width="8" height="5"  fill="#000"/>
            <rect x="62" y="69" width="5" height="5"  fill="#000"/>
            <rect x="80" y="69" width="10" height="5" fill="#000"/>
            <rect x="38" y="77" width="10" height="5" fill="#000"/>
            <rect x="54" y="77" width="5" height="5"  fill="#000"/>
            <rect x="64" y="77" width="8" height="5"  fill="#000"/>
            <rect x="77" y="77" width="5" height="5"  fill="#000"/>
            <rect x="88" y="77" width="7" height="5"  fill="#000"/>
            <rect x="38" y="85" width="5" height="5"  fill="#000"/>
            <rect x="46" y="85" width="5" height="5"  fill="#000"/>
            <rect x="56" y="85" width="8" height="5"  fill="#000"/>
            <rect x="69" y="85" width="5" height="5"  fill="#000"/>
            <rect x="80" y="85" width="5" height="5"  fill="#000"/>
            <rect x="90" y="85" width="5" height="5"  fill="#000"/>
            <rect x="38" y="93" width="8" height="5"  fill="#000"/>
            <rect x="52" y="93" width="5" height="5"  fill="#000"/>
            <rect x="62" y="93" width="5" height="5"  fill="#000"/>
            <rect x="74" y="93" width="10" height="5" fill="#000"/>
            <rect x="90" y="93" width="5" height="5"  fill="#000"/>
          </svg>}
        </div>
        <p className="qr-message">
          {won
            ? <>&quot;Scan this to make sure your next essay doesn&apos;t get flagged by Turnitin.&quot; → <strong>UQ AI Student Hub</strong></>
            : <>Visit the <strong>UQ AI Student Hub</strong>, find the definition of <em>Contract Cheating</em>, and tell our staff the answer!</>}
        </p>
      </div>

      <button className="btn-outline" onClick={onRestart}>↺ &nbsp;Play Again</button>
    </div>
  );
}
