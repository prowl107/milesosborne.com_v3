'use client';

import { useState } from 'react';

export default function ToggleHistory({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div id="older-jobs" className={visible ? '' : 'timeline-collapsed'}>
        {children}
      </div>
      <button
        onClick={() => setVisible(!visible)}
        className="button"
      >
        {visible ? 'Hide History' : 'Show Full History'}
      </button>
    </>
  );
}
