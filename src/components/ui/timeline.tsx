import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-index') ?? '0');
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="conditions" className="py-24 bg-silver-100 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 text-brand-600 text-sm font-medium mb-4">
            Conditions We Address
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
            Conditions We <span className="text-brand-500">Help</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Comprehensive care for the full spectrum of hormone-related and metabolic health challenges.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-brand-300/50" />
          <div
            className="absolute left-4 md:left-8 top-0 w-px bg-brand-500 transition-all duration-500"
            style={{ height: `${((activeIndex + 1) / data.length) * 100}%` }}
          />

          <div className="space-y-0">
            {data.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={cn(
                  'relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-4 md:gap-8 transition-all duration-500',
                  index < data.length - 1 && 'pb-16'
                )}
              >
                <div className="flex flex-col items-center pt-1">
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 flex-shrink-0',
                      index <= activeIndex
                        ? 'bg-brand-500 border-brand-400 shadow-lg shadow-brand-500/40'
                        : 'bg-silver-200 border-brand-300/60'
                    )}
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      'text-2xl font-bold mb-6 transition-colors duration-300',
                      index <= activeIndex ? 'text-brand-600' : 'text-slate-400'
                    )}
                  >
                    {item.title}
                  </h3>
                  <div className={cn('transition-opacity duration-300', index <= activeIndex ? 'opacity-100' : 'opacity-50')}>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
