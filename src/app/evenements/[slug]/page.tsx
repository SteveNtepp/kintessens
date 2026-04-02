import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock, Music, Users, Share2, Ticket } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { ArtistCard } from '@/components/sections/ArtistCard';
import { DEMO_EVENTS, DEMO_ARTISTS } from '@/lib/data';
import { formatDate, eventTypeLabel, eventTypeColor } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = DEMO_EVENTS.find((e) => e.slug === slug);
  if (!event) return { title: 'Événement introuvable' };
  return {
    title: event.meta_title || `${event.title} — KINTESSENS`,
    description: event.meta_description || event.description_short,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = DEMO_EVENTS.find((e) => e.slug === slug);
  if (!event) notFound();

  const lineupArtists = DEMO_ARTISTS.filter((a) => event.lineup?.includes(a.name));
  const accentColor = eventTypeColor[event.type];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-end bg-[#0A0A0A] pt-32 pb-16">
        {event.cover_image && (
          <div className="absolute inset-0 opacity-40">
            <Image
              src={event.cover_image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 overlay-dark" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <Link href="/evenements" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm font-body">
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;agenda
          </Link>

          <div className="inline-block px-3 py-1 mb-6" style={{ backgroundColor: accentColor }}>
            <span className="font-body text-[10px] font-bold tracking-widest uppercase text-white">
              {eventTypeLabel[event.type]}
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 max-w-4xl leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-white/80 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-white/40" />
              <span className="font-body text-base">{formatDate(event.date)}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/40" />
                <span className="font-body text-base">{event.time}</span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white/40" />
              <span className="font-body text-base">{event.location}, {event.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading text-3xl font-bold text-[#0A0A0A] mb-8">Présentation</h2>
                <div className="prose prose-lg prose-neutral max-w-none font-body text-[#6E6E6E] leading-relaxed">
                  <p className="text-[#0A0A0A] text-xl font-medium mb-8">
                    {event.description_short}
                  </p>
                  {event.description_long?.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-6">{para}</p>
                  ))}
                </div>

                {/* Video Teaser if any */}
                {event.video_teaser && (
                  <div className="mt-16 aspect-cinema bg-[#1E1E1E] relative group">
                     {/* Placeholder for video player */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                          <Music className="w-10 h-10 text-white" />
                        </div>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <span className="font-body text-white text-sm font-medium uppercase tracking-widest">Voir le teaser</span>
                     </div>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Book Box */}
                {event.status === 'upcoming' && (
                  <div className="bg-white p-8 border border-[#D9D9D9]">
                    <h3 className="font-body text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">Réservation</h3>
                    <p className="font-body text-sm text-[#6E6E6E] mb-8">
                      {event.cta_label ? 'Réservez votre place dès maintenant pour cette expérience unique.' : 'Les réservations ouvriront prochainement.'}
                    </p>
                    <Link
                      href={event.cta_url || '/contact'}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-colors"
                      style={{ backgroundColor: event.cta_url ? '#0A0A0A' : '#6E6E6E' }}
                    >
                      <Ticket className="w-4 h-4" />
                      {event.cta_label || 'Me tenir au courant'}
                    </Link>
                  </div>
                )}

                {/* Share */}
                <div className="flex items-center justify-between p-4 border border-[#D9D9D9]">
                   <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#6E6E6E]">Partager</span>
                   <div className="flex gap-4">
                      <button className="text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors"><Share2 className="w-4 h-4" /></button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      {lineupArtists.length > 0 && (
        <section className="py-28 bg-[#0A0A0A]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
              <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Programmation</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Line-up</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lineupArtists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} variant="portrait" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="py-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
               <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A]">En images</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {event.gallery.map((img, i) => (
                 <div key={i} className="relative aspect-cinema bg-[#F7F6F2] overflow-hidden group">
                    <Image src={img} alt={`${event.title} - ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
               ))}
            </div>
          </div>
        </section>
      )}
    </PublicLayout>
  );
}
