import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { ArtistCard } from '@/components/sections/ArtistCard';
import { MediaCard } from '@/components/sections/MediaCard';
import { NewsletterForm } from '@/components/sections/NewsletterForm';
import { DEMO_EVENTS, DEMO_ARTISTS, DEMO_MEDIA, DEMO_PARTNERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'KINTESSENS — La quintessence de la création contemporaine africaine',
  description: 'Plateforme artistique et audiovisuelle dédiée à la mise en valeur de la création contemporaine africaine.',
};

const pillars = [
  {
    key: 'live',
    label: 'KINTESSENS LIVE',
    accent: '#A33A2B',
    href: '/live',
    description: 'Performances immersives, captation haut de gamme, scénographies uniques. Le LIVE est le cœur battant de KINTESSENS.',
    number: '01',
  },
  {
    key: 'festival',
    label: 'KINTESSENS FESTIVAL',
    accent: '#C8A96B',
    href: '/festival',
    description: 'Le moment culminant de la saison. Trois jours de programmation multidisciplinaire au plus haut niveau artistique.',
    number: '02',
  },
  {
    key: 'solidarity',
    label: 'KINTESSENS SOLIDARITY',
    accent: '#2E6B57',
    href: '/solidarity',
    description: 'La dimension solidaire de KINTESSENS. Transmission, engagement, impact culturel et social au cœur de nos territoires.',
    number: '03',
  },
];

const pressQuotes = [
  { quote: 'Un concept révolutionnaire pour la scène culturelle africaine.', source: 'Jeune Afrique' },
  { quote: 'KINTESSENS redéfinit ce que signifie vivre la création contemporaine.', source: 'Canal+' },
  { quote: 'La référence artistique du continent pour les années à venir.', source: 'RFI Musique' },
];

export default function HomePage() {
  const upcomingEvents = DEMO_EVENTS.filter((e) => e.status === 'upcoming');
  const featuredArtists = DEMO_ARTISTS.filter((a) => a.featured).slice(0, 6);
  const featuredMedia = DEMO_MEDIA.filter((m) => m.featured).slice(0, 3);

  return (
    <PublicLayout transparentHeader>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/main.jpg"
            alt="KINTESSENS Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            sizes="100vw"
          />
        </div>
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, #A33A2B 0%, transparent 50%), radial-gradient(circle at 70% 60%, #C8A96B 0%, transparent 50%)`,
          }}
        />
        {/* Cinematic grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(247,246,242,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,246,242,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <span className="font-body text-[11px] tracking-widest uppercase text-white/50">
              Dakar · Abidjan · Paris
            </span>
            <div className="h-px w-12 bg-white/30" />
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-none mb-6 tracking-tight">
            KINTESSENS
          </h1>

          {/* Tagline */}
          <p className="font-body text-base md:text-xl text-white/60 mb-12 tracking-widest uppercase max-w-2xl mx-auto">
            La quintessence de la création contemporaine africaine
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/evenements"
              className="flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors duration-200 min-w-[200px] justify-center"
            >
              Voir les événements
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/a-propos"
              className="flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-body text-sm font-medium hover:border-white hover:bg-white/5 transition-all duration-200 min-w-[200px] justify-center"
            >
              Découvrir KINTESSENS
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { label: 'Éditions', value: '4+' },
                { label: 'Artistes', value: '50+' },
                { label: 'Pays', value: '8' },
                { label: 'Spectateurs', value: '12K+' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="py-5 px-8 border-r border-white/10 last:border-r-0 text-center"
                >
                  <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MANIFESTE ─── */}
      <section className="py-28 md:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-6">
                Notre vision
              </p>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-8">
                L&apos;art africain
                <br />
                <em className="not-italic text-[#6E6E6E]">sans frontières.</em>
              </h2>
              <p className="font-body text-lg text-[#6E6E6E] leading-relaxed mb-8 max-w-xl">
                KINTESSENS est née d&apos;une conviction : la création contemporaine africaine mérite une plateforme à la hauteur de son ambition. Une scène. Un son. Un regard.
              </p>
              <p className="font-body text-base text-[#6E6E6E] leading-relaxed max-w-xl">
                Nous réunissons les artistes les plus singuliers du continent — musiciens, poètes, plasticiens, performeurs, réalisateurs — et nous les mettons en lumière avec l&apos;exigence qui leur est due.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-3 mt-10 font-body text-sm font-medium text-[#0A0A0A] border-b border-[#0A0A0A] pb-1 hover:gap-5 transition-all duration-200"
              >
                Notre histoire
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-6 -left-6 w-48 h-48 border border-[#D9D9D9]" />
                <div className="relative aspect-[4/5] bg-[#1E1E1E] overflow-hidden">
                  <Image
                    src="/images/about/vision-v3.jpg"
                    alt="KINTESSENS — Vision artistique"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-[#0A0A0A] flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-heading text-4xl font-bold text-white">2026</p>
                    <p className="font-body text-xs text-white/50 tracking-widest uppercase">Première saison</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── 3 PILLARS ─── */}
      <section className="py-28 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">
              Nos formats
            </p>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white">
              Trois formats,
              <br />
              <em className="not-italic text-[#6E6E6E]">une exigence.</em>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.key} delay={i * 120}>
                <Link
                  href={pillar.href}
                  className="group block p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="font-body text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ color: pillar.accent }}
                    >
                      {pillar.number}
                    </span>
                    <div
                      className="w-2 h-2 mt-3"
                      style={{ backgroundColor: pillar.accent }}
                    />
                  </div>
                  <h3
                    className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:opacity-90 transition-opacity"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.label}
                  </h3>
                  <p className="font-body text-sm text-[#6E6E6E] leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                  <span className="flex items-center gap-2 font-body text-xs font-medium text-white/50 group-hover:text-white transition-colors uppercase tracking-widest">
                    Explorer
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      <section className="py-28 md:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex items-end justify-between mb-16">
            <div>
              <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">
                Agenda
              </p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-[#0A0A0A]">
                Prochains<br />événements
              </h2>
            </div>
            <Link
              href="/evenements"
              className="hidden md:flex items-center gap-2 font-body text-sm font-medium text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors border-b border-[#D9D9D9] pb-1"
            >
              Voir tout l&apos;agenda
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 100}>
                <EventCard event={event} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              href="/evenements"
              className="flex items-center justify-center gap-2 w-full py-4 border border-[#D9D9D9] font-body text-sm font-medium text-[#0A0A0A]"
            >
              Voir tout l&apos;agenda
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ARTISTS SPOTLIGHT ─── */}
      <section className="py-28 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex items-end justify-between mb-16">
            <div>
              <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">
                Les artistes
              </p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
                Portraits<br />
                <em className="not-italic text-[#6E6E6E]">d&apos;exception.</em>
              </h2>
            </div>
            <Link
              href="/artistes"
              className="hidden md:flex items-center gap-2 font-body text-sm font-medium text-[#6E6E6E] hover:text-white transition-colors border-b border-[#1E1E1E] pb-1"
            >
              Tous les artistes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredArtists.map((artist, i) => (
              <AnimatedSection key={artist.id} delay={i * 80} className="lg:col-span-1">
                <ArtistCard artist={artist} variant="portrait" />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/artistes"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-body text-sm font-medium hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              Découvrir tous les artistes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VIDEO SECTION ─── */}
      <section className="relative py-28 md:py-0 bg-[#0A0A0A] overflow-hidden">
        <div className="md:aspect-[16/7] relative bg-[#1E1E1E] flex items-center justify-center">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/media/production.jpg"
              alt="L'expérience audiovisuelle KINTESSENS"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
            />
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />

          {/* Play button (simulated) */}
          <div className="relative z-20 text-center px-6">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-white/40 hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer group">
                <Play className="w-10 h-10 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="font-body text-[11px] tracking-widest uppercase text-white/50 mb-4">
              Découvrez l&apos;univers KINTESSENS
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white max-w-2xl mx-auto leading-tight">
              L&apos;expérience audiovisuelle
            </h2>
            <Link
              href="/medias"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors"
            >
              Explorer les médias
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEDIA GRID ─── */}
      <section className="py-28 md:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex items-end justify-between mb-16">
            <div>
              <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">
                Médias
              </p>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-[#0A0A0A]">
                Contenus<br />exclusifs
              </h2>
            </div>
            <Link
              href="/medias"
              className="hidden md:flex items-center gap-2 font-body text-sm font-medium text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors border-b border-[#D9D9D9] pb-1"
            >
              Toute la médiathèque
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMedia.map((media, i) => (
              <AnimatedSection key={media.id} delay={i * 100}>
                <MediaCard media={media} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="py-20 bg-white border-t border-[#D9D9D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-12">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E]">
              Ils nous font confiance
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {DEMO_PARTNERS.map((partner) => (
              <AnimatedSection key={partner.id}>
                <a
                  href={partner.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-2xl font-bold text-[#D9D9D9] hover:text-[#0A0A0A] transition-colors duration-300"
                  title={partner.name}
                >
                  {partner.name}
                </a>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors border-b border-[#D9D9D9] pb-1"
            >
              Devenir partenaire
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRESS / CREDIBILITY ─── */}
      <section className="py-28 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">
              Presse
            </p>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white">
              Ce qu&apos;on dit de nous
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10">
            {pressQuotes.map((q, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0">
                  <p className="font-heading text-[5rem] leading-none text-white/10 font-bold mb-6">&ldquo;</p>
                  <p className="font-heading text-xl md:text-2xl font-medium text-white leading-snug mb-6">
                    {q.quote}
                  </p>
                  <p className="font-body text-sm text-[#6E6E6E] uppercase tracking-widests">
                    — {q.source}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/presse"
              className="inline-flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-white transition-colors border-b border-[#1E1E1E] pb-1"
            >
              Espace presse & Media Kit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">
              Newsletter
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Restez dans l&apos;univers KINTESSENS
            </h2>
            <p className="font-body text-base text-[#6E6E6E] mb-10">
              Événements, artistes, contenus exclusifs — recevez l&apos;essentiel, directement dans votre boîte mail.
            </p>
            <NewsletterForm />
            <p className="text-xs text-[#6E6E6E] mt-4 font-body">
              Données protégées. Désabonnement possible à tout moment.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PublicLayout>
  );
}
