'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X, Calendar, Handshake, Music } from 'lucide-react';

const navItems = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'LIVE', href: '/live' },
  { label: 'FESTIVAL', href: '/festival' },
  { label: 'SOLIDARITY', href: '/solidarity' },
  { label: 'Artistes', href: '/artistes' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Médias', href: '/medias' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'Presse', href: '/presse' },
  { label: 'Contact', href: '/contact' },
];

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = transparent && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isDark
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-[#D9D9D9]',
          scrolled && 'shadow-sm'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Logo color={isDark ? 'light' : 'dark'} size="sm" />

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-body text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-100',
                  isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#6E6E6E] hover:text-[#0A0A0A]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/evenements"
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium font-body border transition-all duration-200',
                isDark
                  ? 'border-white/30 text-white hover:bg-white hover:text-[#0A0A0A]'
                  : 'border-[#D9D9D9] text-[#6E6E6E] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              Événements
            </Link>
            <Link
              href="/contact?type=partnership"
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium font-body transition-all duration-200',
                isDark
                  ? 'bg-white text-[#0A0A0A] hover:bg-[#F7F6F2]'
                  : 'bg-[#0A0A0A] text-[#F7F6F2] hover:bg-[#1E1E1E]'
              )}
            >
              <Handshake className="w-3.5 h-3.5" />
              Devenir partenaire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'xl:hidden p-2 transition-colors',
              isDark ? 'text-white' : 'text-[#0A0A0A]'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-24 pb-8 px-8">
          <nav className="flex flex-col gap-1 flex-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-3xl font-bold text-white/90 hover:text-white py-3 border-b border-white/10 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-8">
            <Link
              href="/evenements"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-body text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              Voir les événements
            </Link>
            <Link
              href="/contact?type=artist"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0A0A0A] font-body text-sm font-medium"
            >
              <Music className="w-4 h-4" />
              Proposer un artiste
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
