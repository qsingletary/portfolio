'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  showBlog: boolean;
}

const navLinkClass = (active: boolean) =>
  `transition-colors ${
    active ? 'text-[#00ff41]' : 'text-[#808080] hover:text-white'
  }`;

export default function Navigation({ showBlog }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="mb-12 flex items-center justify-between font-mono text-xs">
      <span className="text-[#00ff41]">~/portfolio</span>

      <div className="flex gap-4">
        <Link href="/" className={navLinkClass(pathname === '/')}>
          [index]
        </Link>

        {showBlog && (
          <Link href="/blog" className={navLinkClass(pathname === '/blog')}>
            [blog]
          </Link>
        )}
      </div>
    </nav>
  );
}
