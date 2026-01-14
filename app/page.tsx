'use client';

import Navigation from '@/components/Navigation';
import SystemStatus from '@/components/SystemStatus';
import TypingText from '@/components/TypingText';
import EasterEgg from '@/components/EasterEgg';

const TECH_STACK = [
  'react',
  'typescript',
  'node.js',
  'graphql',
  'stencil.js',
  'aws',
];

const Divider = () => (
  <div className="select-none overflow-hidden text-[8px] leading-tight text-[#00ff41] opacity-20">
    <pre>{'─'.repeat(68)}</pre>
  </div>
);

export default function Home() {
  const showBlog = false;

  return (
    <div className="mx-auto mt-8 mb-16 flex max-w-[680px] flex-col px-6 md:mt-16">
      <Navigation showBlog={showBlog} />

      <main className="flex flex-col gap-10 font-mono text-xs">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-base font-medium text-white">
                <EasterEgg>quinn singletary</EasterEgg>
              </h1>

              <div className="flex items-center gap-2 text-[11px] text-[#808080]">
                <span>software engineer</span>
                <span>·</span>
                <span>new york</span>
              </div>
            </div>

            <SystemStatus />
          </div>

          <TypingText
            text="building with react, typescript, and modern infrastructure."
            className="leading-relaxed text-[#808080]"
          />
        </header>

        {/* Tech */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xs font-medium text-white">tech</h2>

          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded border border-[#808080] border-opacity-20 px-2 py-1 text-[11px] text-[#808080]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xs font-medium text-white">experience</h2>

          {/* Marqeta */}
          <div className="group flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <a
                  href="https://www.marqeta.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glitch-hover font-medium text-white transition-colors hover:text-[#00ff41]"
                >
                  marqeta
                </a>

                <span className="text-[11px] text-[#808080]">
                  software engineer
                </span>
              </div>

              <span className="whitespace-nowrap text-[11px] text-[#808080]">
                2021 → present
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-[#808080]">
              building sdks and developer tools for modern card issuing.
            </p>
          </div>

          {/* Mile Two */}
          <div className="group flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <a
                  href="https://www.miletwo.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glitch-hover font-medium text-white transition-colors hover:text-[#00ff41]"
                >
                  mile two
                </a>

                <span className="text-[11px] text-[#808080]">
                  software engineer
                </span>
              </div>

              <span className="whitespace-nowrap text-[11px] text-[#808080]">
                2019 → 2021
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-[#808080]">
              built full-stack applications for government clients. shipped fast
              with modern technologies.
            </p>
          </div>
        </section>

        <Divider />

        {/* Projects */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xs font-medium text-white">projects</h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-white">coming soon</span>
              <span className="animate-pulse text-[10px] text-[#00ff41]">
                ● building
              </span>
            </div>

            <p className="text-[11px] leading-relaxed text-[#808080]">
              building something interesting. check back soon.
            </p>
          </div>
        </section>

        {showBlog && (
          <>
            <Divider />

            <section className="flex flex-col gap-4">
              <h2 className="text-white">writing</h2>
              <p className="text-[#808080]">
                thoughts on software, systems, and building products.
              </p>
            </section>
          </>
        )}

        <Divider />

        {/* Links */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-medium text-white">links</h2>

          <div className="flex flex-col gap-2.5 text-[11px] text-[#808080]">
            {[
              ['github', 'https://github.com/qsingletary'],
              ['linkedin', 'https://linkedin.com/in/qsingletary'],
              ['email', 'mailto:qsingletary@pm.me'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors hover:text-[#00ff41]"
              >
                <span className="text-[#00ff41] opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
                {label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
