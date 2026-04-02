'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'main' | 'live' | 'festival' | 'solidarity';
  color?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  noLink?: boolean;
}

const subBrandColors: Record<string, string> = {
  live: '#A33A2B',
  festival: '#C8A96B',
  solidarity: '#2E6B57',
};

const subBrandLabels: Record<string, string> = {
  live: 'LIVE',
  festival: 'FESTIVAL',
  solidarity: 'SOLIDARITY',
};

const sizeClasses = {
  sm: { icon: 24, text: 'text-lg', sub: 'text-xs' },
  md: { icon: 32, text: 'text-2xl', sub: 'text-xs' },
  lg: { icon: 42, text: 'text-3xl', sub: 'text-sm' },
  xl: { icon: 56, text: 'text-5xl', sub: 'text-base' },
};

export function KintessensAsterisk({ size = 32, color = '#0A0A0A' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* 8-pointed asterisk / starburst like the logo */}
      {[0, 45, 90, 135].map((angle) => (
        <g key={angle} transform={`rotate(${angle}, 50, 50)`}>
          <rect x="46" y="4" width="8" height="92" rx="4" fill={color} />
        </g>
      ))}
    </svg>
  );
}

export function Logo({ variant = 'main', color = 'dark', size = 'md', className, noLink = false }: LogoProps) {
  const textColor = color === 'dark' ? '#0A0A0A' : '#F7F6F2';
  const iconColor = color === 'dark' ? '#0A0A0A' : '#F7F6F2';
  const dims = sizeClasses[size];

  const content = (
    <>
      {/* Asterisk icon */}
      <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:rotate-45">
        <KintessensAsterisk size={dims.icon} color={iconColor} />
      </div>

      {/* Vertical divider */}
      <div
        className="flex-shrink-0"
        style={{
          width: 1,
          height: dims.icon * 0.8,
          backgroundColor: color === 'dark' ? 'rgba(10,10,10,0.2)' : 'rgba(247,246,242,0.3)',
        }}
      />

      {/* Text block */}
      <div className="flex flex-col leading-none">
        <span
          className={cn('font-heading font-bold tracking-brand uppercase', dims.text)}
          style={{ color: textColor, letterSpacing: '0.08em' }}
        >
          Kintessens
        </span>
        {variant !== 'main' && (
          <span
            className={cn('font-body font-medium tracking-widest uppercase mt-0.5', dims.sub)}
            style={{ color: subBrandColors[variant], letterSpacing: '0.2em' }}
          >
            — {subBrandLabels[variant]} —
          </span>
        )}
      </div>
    </>
  );

  if (noLink) {
    return (
      <div className={cn('flex items-center gap-3 group select-none', className)}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3 group select-none', className)}
      aria-label="KINTESSENS — Accueil"
    >
      {content}
    </Link>
  );
}

export default Logo;
