function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ig-action-icon">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ig-action-icon">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ig-action-icon">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ig-action-icon">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="ig-dots-icon">
      <circle cx="5"  cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

export default function InstagramCard({ content }) {
  const {
    username, avatarInitials, avatarColor,
    imageGradient, likes, caption, hashtags, comments, time,
  } = content;

  return (
    <div className="ig-card">
      {/* Header */}
      <div className="ig-header">
        <div className="ig-avatar" style={{ backgroundColor: avatarColor }}>
          {avatarInitials}
        </div>
        <div className="ig-username-wrap">
          <span className="ig-username">{username}</span>
        </div>
        <span className="ig-follow">Follow</span>
        <DotsIcon />
      </div>

      {/* Photo area — gradient simulates a photo */}
      <div
        className="ig-photo"
        style={{ background: `linear-gradient(135deg, ${imageGradient[0]}, ${imageGradient[1]})` }}
      />

      {/* Actions */}
      <div className="ig-actions">
        <div className="ig-action-left">
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
        <BookmarkIcon />
      </div>

      {/* Likes */}
      <div className="ig-likes">{likes} likes</div>

      {/* Caption */}
      <div className="ig-caption">
        <span className="ig-caption-user">{username}</span>
        {caption}
        {hashtags && <span className="ig-hashtags"> {hashtags}</span>}
      </div>

      {/* Comments */}
      {comments > 0 && (
        <div className="ig-comments">View all {comments} comments</div>
      )}

      {/* Timestamp */}
      <div className="ig-time">{time}</div>
    </div>
  );
}
