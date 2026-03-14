import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function DeltaPopup({ text, positive, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1150);
    return () => clearTimeout(t);
  }, [onDone]);

  return createPortal(
    <div className={`delta-popup ${positive ? 'pos' : 'neg'}`}>
      {text}
    </div>,
    document.body
  );
}
