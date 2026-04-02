'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { ArtistCard } from '@/components/sections/ArtistCard';
import { DEMO_ARTISTS } from '@/lib/data';
import { artistCategoryLabel } from '@/lib/utils';

const categories = ['all', 'music', 'poetry', 'visual_arts', 'performance', 'audiovisual'];
const statuses = ['all', 'artistic_council', 'resident', 'guest', 'emerging'];

export default function ArtistesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = DEMO_ARTISTS.filter((a) => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory;
    const matchStatus = activeStatus === 'all' || a.status === activeStatus;
    const matchSearch = search === '' || a.name.toLowerCase().includes(search.toLowerCase()) || a.country.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  const categoryLabels: Record<string, string> = {
    all: 'Tous',
    ...artistCategoryLabel,
  };

  const statusLabels: Record<string, string> = {
    all: 'Tous les statuts',
    artistic_council: 'Conseil Artistique',
    resident: 'Résidents',
    guest: 'Invités',
    emerging: 'Émergents',
  };

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">Artistes</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              Les visages de<br />KINTESSENS
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              Musiciens, poètes, plasticiens, performeurs, réalisateurs — les artistes KINTESSENS incarnent l&apos;excellence et la singularité de la création contemporaine africaine.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-[#D9D9D9] sticky top-20 z-30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
              <input
                type="text"
                placeholder="Rechercher un artiste..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-[#D9D9D9] bg-white text-sm font-body text-[#0A0A0A] placeholder-[#6E6E6E] focus:outline-none focus:border-[#0A0A0A] transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-body font-medium tracking-wider uppercase transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white text-[#6E6E6E] border-[#D9D9D9] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2 mt-3">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`px-3 py-1 text-[10px] font-body font-medium tracking-wider uppercase transition-all duration-200 ${
                  activeStatus === s
                    ? 'text-[#0A0A0A] underline'
                    : 'text-[#6E6E6E] hover:text-[#0A0A0A]'
                }`}
              >
                {statusLabels[s]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-[#6E6E6E]">Aucun artiste trouvé pour cette recherche.</p>
              <button onClick={() => { setActiveCategory('all'); setActiveStatus('all'); setSearch(''); }} className="mt-4 text-sm font-body text-[#0A0A0A] underline">
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filtered.map((artist, i) => (
                <AnimatedSection key={artist.id} delay={i * 60}>
                  <ArtistCard artist={artist} />
                </AnimatedSection>
              ))}
            </div>
          )}

          <div className="mt-20 bg-[#0A0A0A] p-10 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Vous êtes artiste ?</h2>
            <p className="font-body text-sm text-[#6E6E6E] mb-8 max-w-lg mx-auto">
              KINTESSENS est toujours à la recherche de nouvelles voix, de nouveaux talents. Proposez votre candidature.
            </p>
            <Link
              href="/contact?type=artist"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors"
            >
              Proposer ma candidature
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
