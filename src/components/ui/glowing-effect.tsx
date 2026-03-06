import React, { useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: 'default' | 'white';
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = 'default',
  glow = false,
  className,
  movementDuration = 2,
  borderWidth = 1,
  disabled = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  const handleMove = useCallback(
    (e?: MouseEvent | { x: number; y: number }) => {
      if (!containerRef.current) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const element = containerRef.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(
          mouseX - center[0],
          mouseY - center[1]
        );
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          element.style.setProperty('--active', '0');
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        element.style.setProperty('--active', isActive ? '1' : '0');

        if (!isActive) return;

        const currentAngle =
          parseFloat(element.style.getPropertyValue('--start')) || 0;

        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
            Math.PI +
          90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        element.style.setProperty(
          '--start',
          newAngle + spread / 2 + 'deg'
        );
      });
    },
    [inactiveZone, proximity, spread]
  );

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => handleMove(e);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMove, disabled]);

  return (
    <div
      ref={containerRef}
      style={
        {
          '--blur': `${blur}px`,
          '--spread': spread,
          '--start': '0deg',
          '--active': '0',
          '--glowingeffect-border-width': `${borderWidth}px`,
          '--repeating-conic-gradient-times': '5',
          '--gradient':
            variant === 'white'
              ? `repeating-conic-gradient(
                  from calc(var(--start) - var(--spread) * 1deg / var(--repeating-conic-gradient-times) * 0) at 50% 50%,
                  transparent 0%,
                  #fff calc(var(--spread) * 1deg / var(--repeating-conic-gradient-times)),
                  transparent calc(var(--spread) * 2deg / var(--repeating-conic-gradient-times))
                )`
              : `repeating-conic-gradient(
                  from calc(var(--start) - var(--spread) * 1deg / var(--repeating-conic-gradient-times) * 0) at 50% 50%,
                  transparent 0%,
                  #1C7AC2 calc(var(--spread) * 1deg / var(--repeating-conic-gradient-times)),
                  transparent calc(var(--spread) * 2deg / var(--repeating-conic-gradient-times))
                )`,
          transitionDuration: `${movementDuration}s`,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity',
        glow && 'opacity-100',
        '[--active:0] [--start:0deg]',
        '[background:var(--gradient)] [background-attachment:fixed]',
        'after:absolute after:inset-[calc(var(--glowingeffect-border-width)*-1)]',
        'after:rounded-[inherit]',
        'after:[background:var(--gradient)] after:[background-attachment:fixed]',
        'after:[mask-clip:padding-box,border-box]',
        'after:[mask-composite:intersect]',
        'after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc(var(--start)-calc(var(--spread)*0.5deg)),#00000000_0%,#fff,#00000000_calc(var(--spread)*1deg))]',
        disabled && 'hidden',
        className
      )}
    />
  );
};
