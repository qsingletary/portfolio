'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypingText({
  text,
  className = '',
  speed = 30,
}: TypingTextProps) {
  const [value, setValue] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setValue((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <p className={className}>
      {value}
      {index < text.length && <Caret />}
    </p>
  );
}

function Caret() {
  return (
    <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-[#00ff41]" />
  );
}
