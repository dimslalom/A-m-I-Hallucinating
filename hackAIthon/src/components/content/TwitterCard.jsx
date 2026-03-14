function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function RetweetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ViewsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function TwitterCard({ content }) {
  const { name, handle, avatarInitials, avatarColor, text, time, replies, retweets, likes, views, verified } = content;

  return (
    <div className="tw-card">
      <div className="tw-header">
        <div className="tw-avatar-wrap">
          <div className="tw-avatar" style={{ backgroundColor: avatarColor }}>
            {avatarInitials}
          </div>
          <div className="tw-name-wrap">
            <span className="tw-name">
              {name}
              {verified && (
                <svg viewBox="0 0 24 24" fill="#1d9bf0" style={{ width: 16, height: 16, marginLeft: 3, verticalAlign: 'middle' }}>
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.26 3.91.81C9.33 21.12 10.57 22 12 22s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91C21.37 14.67 22.25 13.43 22.25 12zm-6.16-1.96l-4.5 6a.75.75 0 01-.55.34.72.72 0 01-.58-.2l-2.5-2.5a.75.75 0 011.06-1.06l1.87 1.87 3.99-5.31a.75.75 0 011.2.9z" />
                </svg>
              )}
            </span>
            <span className="tw-handle">{handle}</span>
          </div>
        </div>
        <div className="tw-x-logo"><XLogo /></div>
      </div>

      <p className="tw-text">{text}</p>

      <div className="tw-time">{time}</div>

      <div className="tw-actions">
        <span className="tw-action"><ReplyIcon />{replies}</span>
        <span className="tw-action"><RetweetIcon />{retweets}</span>
        <span className="tw-action"><HeartIcon />{likes}</span>
        <span className="tw-action"><ViewsIcon />{views}</span>
      </div>
    </div>
  );
}
