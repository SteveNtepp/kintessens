import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Camera, Video, Send, Globe, MapPin, Music } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { DEMO_ARTISTS, DEMO_EVENTS } from '@/lib/data';
import { artistCategoryLabel } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_ARTISTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = DEMO_ARTISTS.find((a) => a.slug === slug);
  if (!artist) return { title: 'Artiste introuvable' };
  return {
    title: artist.meta_title || `${artist.name} — KINTESSENS`,
    description: artist.meta_description || artist.bio_short,
  };
}

const statusLabels: Record<string, string> = {
  emerging: 'Artiste émergent',
  guest: 'Artiste invité',
  resident: 'Artiste résident',
  artistic_council: 'Conseil Artistique',
};

const statusColors: Record<string, string> = {
  emerging: '#6E6E6E',
  guest: '#0A0A0A',
  resident: '#A33A2B',
  artistic_council: '#C8A96B',
};

export default async function ArtistDetailPage({ params }: Props) {
  const { slug } = await params;
  const artist = DEMO_ARTISTS.find((a) => a.slug === slug);
  if (!artist) notFound();

  const artistEvents = DEMO_EVENTS.filter((e) => artist.event_ids?.includes(e.id));

  return (
    <PublicLayout>
      {/* Back navigation */}
      <div className="pt-24 pb-0 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <Link href="/artistes" className="inline-flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Tous les artistes
          </Link>
        </div>
      </div>

      {/* Artist hero */}
      <div className="bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1E1E1E]">
                {artist.photo && (
                  <Image src={artist.photo} alt={artist.name} fill className="object-cover" />
                )}
                <div
                  className="absolute top-4 left-4 px-3 py-1"
                  style={{ backgroundColor: statusColors[artist.status] }}
                >
                  <span className="font-body text-[10px] font-bold tracking-widests uppercase text-white">
                    {statusLabels[artist.status]}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 pt-0 lg:pt-8">
              <AnimatedSection>
                <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-3">
                  {artistCategoryLabel[artist.category]}
                </p>
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-6">
                  {artist.name}
                </h1>
                <div className="flex items-center gap-2 mb-8 text-[#6E6E6E]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-body text-sm">{artist.city && `${artist.city}, `}{artist.country}</span>
                </div>
                <p className="font-body text-base text-[#0A0A0A] leading-relaxed mb-6 max-w-2xl font-medium">
                  {artist.bio_short}
                </p>
                {artist.bio_long && (
                  <div className="space-y-4 font-body text-sm text-[#6E6E6E] leading-relaxed max-w-2xl">
                    {artist.bio_long.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {/* Socials */}
                <div className="flex items-center gap-4 mt-10">
                  {artist.instagram && (
                    <a href={`https://instagram.com/${artist.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                      <Camera className="w-4 h-4" />
                      Instagram
                    </a>
                  )}
                  {artist.youtube && (
                    <a href={`https://youtube.com/@${artist.youtube}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                      <Video className="w-4 h-4" />
                      YouTube
                    </a>
                  )}
                  {artist.twitter && (
                    <a href={`https://twitter.com/${artist.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                      <Send className="w-4 h-4" />
                      Twitter
                    </a>
                  )}
                  {artist.website && (
                    <a href={artist.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                      <Globe className="w-4 h-4" />
                      Site web
                    </a>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Associated events */}
      {artistEvents.length > 0 && (
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="font-heading text-4xl font-bold text-white mb-12">Événements associés</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artistEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PublicLayout>
  );
}
