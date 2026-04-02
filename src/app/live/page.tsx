import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mic, Film, Clock, Zap } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { MediaCard } from '@/components/sections/MediaCard';
import { ArtistCard } from '@/components/sections/ArtistCard';
import { DEMO_EVENTS, DEMO_ARTISTS, DEMO_MEDIA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'KINTESSENS LIVE — Performances immersives haut de gamme',
  description: 'KINTESSENS LIVE : performances immersives, captation cinématographique, scénographies uniques. Le live au plus haut niveau artistique.',
};

const features = [
  { icon: Mic, label: 'Performance live', description: 'Des artistes au sommet de leur art, dans des conditions acoustiques et scéniques d\'exception.' },
  { icon: Film, label: 'Captation cinématographique', description: 'Chaque session est filmée avec une direction artistique exigeante — pour l\'histoire, pour la diffusion.' },
  { icon: Clock, label: 'Formats longs et courts', description: 'Des soirées pleines durée et des extraits capsules pour tous les formats de partage.' },
  { icon: Zap, label: 'Scénographies uniques', description: 'Chaque espace est transformé pour l\'occasion. Le lieu devient personnage.' },
];

export default function LivePage() {
  const liveEvents = DEMO_EVENTS.filter((e) => e.type === 'live');
  const liveMedia = DEMO_MEDIA.slice(0, 3);
  const liveArtists = DEMO_ARTISTS.slice(0, 4);

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 20% 50%, #A33A2B, transparent 70%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="inline-block px-3 py-1 bg-[#A33A2B] mb-8">
              <span className="font-body text-[10px] font-bold tracking-widests uppercase text-white">KINTESSENS LIVE</span>
            </div>
            <h1 className="font-heading text-6xl md:text-9xl font-bold text-white leading-none mb-8 max-w-3xl">
              Le son.<br />La scène.<br /><em className="not-italic text-[#A33A2B]">L&apos;instant.</em>
            </h1>
            <p className="font-body text-lg text-[#6E6E6E] max-w-2xl leading-relaxed mb-10">
              KINTESSENS LIVE est le format fondateur de la marque. Une soirée. Un lieu transformé. Des artistes d&apos;exception. Une captation haut de gamme. Une expérience totale.
            </p>
            <Link
              href="/evenements?type=live"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A33A2B] text-white font-body text-sm font-medium hover:bg-[#8B2E20] transition-colors"
            >
              Voir les prochains LIVE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Concept */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <AnimatedSection>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#0A0A0A] mb-6">
                Qu&apos;est-ce que le LIVE ?
              </h2>
              <p className="font-body text-base text-[#6E6E6E] leading-relaxed">
                Une session KINTESSENS LIVE n&apos;est pas un simple concert. C&apos;est une expérience pensée de A à Z : scénographie, acoustique, lumière, captation — chaque détail est maîtrisé pour créer un moment irrémédiablement mémorable.
              </p>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#D9D9D9]">
            {features.map((f, i) => (
              <AnimatedSection key={f.label} delay={i * 80}>
                <div className="p-8 border-b lg:border-b-0 border-r-0 lg:border-r border-[#D9D9D9] last:border-0">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#A33A2B] mb-6">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3">{f.label}</h3>
                  <p className="font-body text-sm text-[#6E6E6E] leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Editions */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">Éditions</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Nos sessions LIVE</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {liveEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 80}>
                <EventCard event={event} variant="compact" className="border-white/10 hover:border-[#A33A2B]" />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/evenements?type=live" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-body text-sm font-medium hover:bg-white/5 transition-colors">
              Toutes les éditions LIVE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A]">Artistes associés</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {liveArtists.map((artist, i) => (
              <AnimatedSection key={artist.id} delay={i * 80}>
                <ArtistCard artist={artist} variant="portrait" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
