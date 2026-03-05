import * as React from "react"
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
  highlightWord?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className,
  highlightWord
}: TestimonialsSectionProps) {
  const renderTitle = () => {
    if (!highlightWord) {
      return title
    }
    
    const parts = title.split(highlightWord)
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="text-brand-400">{highlightWord}</span>
            )}
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <section id="testimonials" className={cn(
      "bg-navy-950 text-white",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {renderTitle()}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-300 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-950 to-transparent" />
        </div>
      </div>
    </section>
  )
}