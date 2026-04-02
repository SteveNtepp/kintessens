'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { MediaCard } from '@/components/sections/MediaCard';
import { DEMO_MEDIA } from '@/lib/data';
import { mediaTypeLabel, cn } from '@/lib/utils';
import { Play, Grid, List, Search, ArrowRight } from 'lucide-react';

const categories = ['all', 'video_live', 'short_clip', 'documentary', 'backstage', 'interview', 'photo_gallery'];

export default function MediasPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = DEMO_MEDIA.filter((m) => {
    const matchCat = activeCategory === 'all' || m.type === activeCategory;
    const matchSearch = search === '' || m.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Médiathèque</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              L&apos;expérience<br />cinématographique
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              Vivez et revivez les moments forts de KINTESSENS. Captations live, interviews exclusives, documentaires et coulisses.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Filters Hub */}
      <div className="bg-white border-b border-[#D9D9D9] sticky top-20 z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
              <input
                type="text"
                placeholder="Rechercher une vidéo, un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-[#D9D9D9] bg-[#F7F6F2] text-sm font-body text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-[11px] font-body font-bold uppercase tracking-widest border transition-all",
                    activeCategory === cat
                      ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                      : "bg-white text-[#6E6E6E] border-[#D9D9D9] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
                  )}
                >
                  {cat === 'all' ? 'Tout' : mediaTypeLabel[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Media */}
      {activeCategory === 'all' && !search && (
        <section className="py-20 bg-[#F7F6F2]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
             <AnimatedSection className="mb-12">
                <h2 className="font-heading text-3xl font-bold text-[#0A0A0A]">À la une</h2>
             </AnimatedSection>
             <div className="grid lg:grid-cols-2 gap-8">
                {DEMO_MEDIA.filter(m => m.featured).slice(0, 2).map((m) => (
                  <MediaCard key={m.id} media={m} variant="featured" />
                ))}
             </div>
          </div>
        </section>
      )}

      {/* Main Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
           <AnimatedSection className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-[#0A0A0A]">
                {activeCategory === 'all' ? 'Tous les contenus' : mediaTypeLabel[activeCategory]}
              </h2>
           </AnimatedSection>

           {filtered.length === 0 ? (
             <div className="text-center py-20 border-2 border-dashed border-[#D9D9D9]">
                <p className="font-body text-[#6E6E6E]">Aucun contenu ne correspond à vos critères.</p>
             </div>
           ) : (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((m, i) => (
                  <AnimatedSection key={m.id} delay={i * 50}>
                    <MediaCard media={m} />
                  </AnimatedSection>
                ))}
             </div>
           )}
        </div>
      </section>

      {/* Suggestion Section */}
      <section className="py-28 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection direction="left">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                  Une production<br />haut de gamme.
                </h2>
                <p className="font-body text-base text-[#6E6E6E] leading-relaxed mb-8">
                  Chaque clip, chaque documentaire produit par KINTESSENS est le fruit d&apos;une collaboration entre réalisateurs, ingénieurs du son et artistes. Nous ne captons pas seulement de la musique, nous créons des objets cinématographiques.
                </p>
                <Link href="/presse" className="inline-flex items-center gap-2 text-white font-body text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-colors">
                  Accéder au Media Kit
                  <ArrowRight className="w-4 h-4" />
                </Link>
             </AnimatedSection>
             <AnimatedSection direction="right" className="relative aspect-cinema bg-[#1E1E1E]">
                <Image src="/images/media/production.jpg" alt="Production KINTESSENS" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white fill-white" />
                   </div>
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
