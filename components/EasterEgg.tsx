'use client';

import { useState } from 'react';

interface EasterEggProps {
  children: React.ReactNode;
}

const TRIGGER_CLICKS = 5;
const RESET_DELAY_MS = 5_000;

export default function EasterEgg({ children }: EasterEggProps) {
  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const reset = () => {
    setClicks(0);
    setIsVisible(false);
  };

  const handleClick = () => {
    setClicks((prev) => {
      const next = prev + 1;

      if (next === TRIGGER_CLICKS) {
        setIsVisible(true);
        setTimeout(reset, RESET_DELAY_MS);
      }

      return next;
    });
  };

  return (
    <>
      <span onClick={handleClick} className="cursor-pointer select-none">
        {children}
      </span>

      {isVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-in fade-in duration-300"
          onClick={reset}
        >
          <div className="max-w-md rounded border border-[#00ff41] border-opacity-30 p-8 font-mono text-xs text-[#00ff41]">
            <div className="mb-4">
              <span className="text-white">$</span> cat secret.txt
            </div>

            <div className="space-y-2 text-[#808080]">
              <p>// you found the easter egg</p>
              <p>// nothing fancy, just a little surprise</p>
              <p>// thanks for clicking around</p>
              <p className="mt-4 text-[#00ff41]">- quinn</p>
            </div>

            <div className="mt-4 text-[10px] opacity-50">
              [click anywhere to close]
            </div>
          </div>
        </div>
      )}
    </>
  );
}
