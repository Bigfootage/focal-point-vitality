import React from 'react';
import { cn } from '@/lib/utils';

interface Author {
  name: string;
  handle: string;
  avatar: string;
}

interface Testimonial {
  author: Author;
  text: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  highlightWord?: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-navy-800 border border-brand-500/20 rounded-2xl p-6 w-80 shrink-0 mx-3">
      <p className="text-slate-300 text-sm leading-relaxed mb-5">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.author.name}</div>
          <div className="text-slate-500 text-xs">{testimonial.author.handle}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <div
        className={cn(
          'flex gap-0 animate-marquee',
          reverse && '[animation-direction:reverse]'
        )}
        style={{ '--marquee-duration': '40s' } as React.CSSProperties}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection({ title, description, testimonials, highlightWord }: TestimonialsSectionProps) {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  const titleParts = highlightWord
    ? title.split(highlightWord)
    : [title];

  return (
    <section id="testimonials" className="py-24 bg-navy-950 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--marquee-duration, 40s) linear infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-brand-300 text-sm font-medium mb-4">
          Patient Stories
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          {titleParts[0]}
          {highlightWord && <span className="text-brand-400">{highlightWord}</span>}
          {titleParts[1]}
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
