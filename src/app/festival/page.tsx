import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Music, Globe, Users, Star } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { ArtistCard } from '@/components/sections/ArtistCard';
import { DEMO_EVENTS, DEMO_ARTISTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'KINTESSENS FESTIVAL — L\'événement culturel de l\'année',
  description: 'KINTESSENS FESTIVAL : 3 jours de programmation multidisciplinaire, scénographies immersives, artistes du continent et de la diaspora.',
};

const festivalFeatures = [
  { icon: Music, label: 'Programmation multidisciplinaire', description: 'Musique, poésie, arts visuels, performance et audiovisuel réunis sous un même toit.' },
  { icon: Globe, label: 'Rayonnement continental', description: 'Des artistes de tout le continent africain et de la diaspora, pour une célébration globale.' },
  { icon: Users, label: 'Expérience communautaire', description: 'Tables rondes, ateliers, rencontres — le festival est un espace de dialogue et de partage.' },
  { icon: Star, label: 'Moments phares', description: 'Chaque édition crée ses propres légendes. Des instants dont on se souvient toute sa vie.' },
];

export default function FestivalPage() {
  const festivalEvents = DEMO_EVENTS.filter((e) => e.type === 'festival');
  const festivalArtists = DEMO_ARTISTS.slice(0, 6);

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(ellipse at 70% 40%, #C8A96B, transparent 70%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="inline-block px-3 py-1 bg-[#C8A96B] mb-8">
              <span className="font-body text-[10px] font-bold tracking-widests uppercase text-white">KINTESSENS FESTIVAL</span>
            </div>
            <h1 className="font-heading text-6xl md:text-9xl font-bold text-white leading-none mb-8 max-w-4xl">
              Le<br />festival.<br /><em className="not-italic text-[#C8A96B]">L&apos;événement.</em>
            </h1>
            <p className="font-body text-lg text-[#6E6E6E] max-w-2xl leading-relaxed mb-10">
              KINTESSENS FESTIVAL est le moment culminant de la saison culturelle. Trois jours de programmation multidisciplinaire au plus haut niveau — une célébration de la création contemporaine africaine.
            </p>
            <Link
              href="/evenements?type=festival"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8A96B] text-white font-body text-sm font-medium hover:bg-[#B8976A] transition-colors"
            >
              Explorer les éditions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Festival features */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#0A0A0A]">Une expérience totale</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#D9D9D9]">
            {festivalFeatures.map((f, i) => (
              <AnimatedSection key={f.label} delay={i * 80}>
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#D9D9D9] last:border-0">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#C8A96B] mb-6">
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

      {/* Upcoming festival */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">Prochaine édition</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">KINTESSENS FESTIVAL 2026</h2>
          </AnimatedSection>
          {festivalEvents.map((event) => (
            <AnimatedSection key={event.id}>
              <EventCard event={event} variant="featured" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A]">Artistes du festival</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {festivalArtists.map((artist, i) => (
              <AnimatedSection key={artist.id} delay={i * 60}>
                <ArtistCard artist={artist} variant="portrait" />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/artistes" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-colors">
              Voir tous les artistes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
