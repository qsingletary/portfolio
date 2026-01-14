'use client';

import { useEffect, useState } from 'react';

const CAREER_START = new Date('2021-01-01').getTime();
const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365;

export default function SystemStatus() {
  const [time, setTime] = useState('');
  const [uptime, setUptime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      setTime(`${hours}:${minutes}`);

      const years = Math.floor((Date.now() - CAREER_START) / MS_IN_YEAR);

      setUptime(`${years}y`);
    };

    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 text-[10px]">
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff41] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ff41]" />
        </span>

        <span className="text-[#00ff41]">online</span>
      </div>

      <Separator />

      <span className="text-[#808080]">uptime: {uptime}</span>

      <Separator />

      <span className="text-[#808080]">{time}</span>
    </div>
  );
}

function Separator() {
  return <span className="text-[#808080]">|</span>;
}
