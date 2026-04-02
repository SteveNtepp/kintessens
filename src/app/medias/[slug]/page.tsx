import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Calendar, User, Tag, Share2, ArrowRight } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { MediaCard } from '@/components/sections/MediaCard';
import { DEMO_MEDIA, DEMO_ARTISTS, DEMO_EVENTS } from '@/lib/data';
import { mediaTypeLabel, formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEMO_MEDIA.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const media = DEMO_MEDIA.find((m) => m.slug === slug);
  if (!media) return { title: 'Média introuvable' };
  return {
    title: media.meta_title || `${media.title} — KINTESSENS`,
    description: media.description,
  };
}

export default async function MediaDetailPage({ params }: Props) {
  const { slug } = await params;
  const media = DEMO_MEDIA.find((m) => m.slug === slug);
  if (!media) notFound();

  const artist = DEMO_ARTISTS.find(a => a.id === media.artist_id);
  const event = DEMO_EVENTS.find(e => e.id === media.event_id);
  const relatedMedia = DEMO_MEDIA.filter(m => m.id !== media.id).slice(0, 3);

  return (
    <PublicLayout>
      {/* Video Player Section */}
      <section className="pt-24 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
           <Link href="/medias" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm font-body">
              <ArrowLeft className="w-4 h-4" />
              Retour à la médiathèque
           </Link>

           <div className="aspect-cinema w-full bg-[#1E1E1E] relative group flex items-center justify-center">
              {media.thumbnail && (
                <Image src={media.thumbnail} alt={media.title} fill className="object-cover opacity-40" />
              )}
              {/* This is where the actual iFrame or Video Player would go */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white text-[#0A0A0A] flex items-center justify-center rounded-full mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
                <p className="text-white font-body text-sm font-medium tracking-widest uppercase">Lecture de la vidéo</p>
              </div>
           </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Meta & Description */}
            <div className="lg:col-span-2">
               <AnimatedSection>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-[#F7F6F2] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest">
                      {mediaTypeLabel[media.type]}
                    </span>
                    {media.published_at && (
                      <span className="text-[#6E6E6E] text-xs font-body">Publié le {formatDate(media.published_at)}</span>
                    )}
                  </div>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8">
                    {media.title}
                  </h1>
                  <p className="font-body text-base text-[#6E6E6E] leading-relaxed mb-12 max-w-2xl">
                    {media.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-[#D9D9D9]">
                    {media.tags?.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-[#D9D9D9] text-[#6E6E6E] text-[10px] font-medium uppercase tracking-widest">
                        #{tag}
                      </span>
                    ))}
                  </div>
               </AnimatedSection>
            </div>

            {/* Relations Sidebar */}
            <div className="lg:col-span-1">
              <aside className="space-y-10">
                {artist && (
                  <div className="p-6 border border-[#D9D9D9] bg-[#F7F6F2]">
                    <p className="text-[10px] uppercase tracking-widest text-[#6E6E6E] font-bold mb-4">Artiste lié</p>
                    <div className="flex items-center gap-4">
                       <div className="relative w-12 h-12 bg-[#1E1E1E] overflow-hidden">
                          {artist.photo && <Image src={artist.photo} alt={artist.name} fill className="object-cover" />}
                       </div>
                       <div>
                          <p className="font-body text-sm font-bold text-[#0A0A0A]">{artist.name}</p>
                          <Link href={`/artistes/${artist.slug}`} className="text-xs font-body text-[#6E6E6E] hover:text-[#0A0A0A] flex items-center gap-1 mt-1">
                            Voir le profil <ArrowRight className="w-3 h-3" />
                          </Link>
                       </div>
                    </div>
                  </div>
                )}

                {event && (
                  <div className="p-6 border border-[#D9D9D9]">
                    <p className="text-[10px] uppercase tracking-widest text-[#6E6E6E] font-bold mb-4">Événement lié</p>
                    <h4 className="font-body text-sm font-bold text-[#0A0A0A] mb-2">{event.title}</h4>
                    <p className="text-xs font-body text-[#6E6E6E] mb-4">{event.city}, {event.country}</p>
                    <Link href={`/evenements/${event.slug}`} className="text-xs font-body text-[#0A0A0A] font-bold underline flex items-center gap-1">
                      Détails de l&apos;événement
                    </Link>
                  </div>
                )}
                
                <div className="flex items-center justify-between p-4 border border-[#D9D9D9]">
                   <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#6E6E6E]">Partager</span>
                   <div className="flex gap-4">
                      <button className="text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors"><Share2 className="w-4 h-4" /></button>
                   </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Media */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
           <AnimatedSection className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-[#0A0A0A]">À Suivre</h2>
           </AnimatedSection>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedMedia.map((m) => (
                <MediaCard key={m.id} media={m} />
              ))}
           </div>
        </div>
      </section>
    </PublicLayout>
  );
}
