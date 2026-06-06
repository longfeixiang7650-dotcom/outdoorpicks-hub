'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-[1200px] mx-auto bg-[#1A1740] border border-[#2A2560] rounded-xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-[#A99BD6] flex-1">
          We use cookies to improve your experience and show relevant ads.{' '}
          <Link href="/privacy" className="text-[#7C3AED] hover:text-[#6D28D9] underline">
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-[#A99BD6] hover:text-[#EDE9FE] border border-[#2A2560] rounded-lg hover:bg-[#12102A] transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-lg hover:opacity-90 transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
