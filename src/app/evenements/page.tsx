'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { DEMO_EVENTS } from '@/lib/data';
import { eventTypeLabel } from '@/lib/utils';

const types = ['all', 'live', 'festival', 'solidarity'];
const statuses = ['all', 'upcoming', 'past'];

export default function EvenementsPage() {
  const [activeType, setActiveType] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = DEMO_EVENTS.filter((e) => {
    const matchType = activeType === 'all' || e.type === activeType;
    const matchStatus = activeStatus === 'all' || e.status === activeStatus;
    const matchSearch = 
      search === '' || 
      e.title.toLowerCase().includes(search.toLowerCase()) || 
      e.city.toLowerCase().includes(search.toLowerCase()) ||
      e.country.toLowerCase().includes(search.toLowerCase());
    return matchType && matchStatus && matchSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const typeLabels: Record<string, string> = {
    all: 'Tous les formats',
    ...eventTypeLabel,
  };

  const statusLabels: Record<string, string> = {
    all: 'Tous les statuts',
    upcoming: 'À venir',
    past: 'Passés',
  };

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Agenda</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              Vivre<br />l&apos;expérience
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              Découvrez la programmation KINTESSENS — des sessions LIVE immersives, le festival annuel et nos actions solidaires à travers le continent.
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
                placeholder="Rechercher un événement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-[#D9D9D9] bg-white text-sm font-body text-[#0A0A0A] placeholder-[#6E6E6E] focus:outline-none focus:border-[#0A0A0A] transition-colors"
              />
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-3 py-1.5 text-[11px] font-body font-medium tracking-wider uppercase transition-all duration-200 border ${
                    activeType === t
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white text-[#6E6E6E] border-[#D9D9D9] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                  }`}
                >
                  {typeLabels[t]}
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
                    ? 'text-[#0A0A0A] underline decoration-2 underline-offset-4'
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
              <p className="font-body text-[#6E6E6E]">Aucun événement trouvé pour cette recherche.</p>
              <button onClick={() => { setActiveType('all'); setActiveStatus('all'); setSearch(''); }} className="mt-4 text-sm font-body text-[#0A0A0A] underline">
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 80}>
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-28 bg-[#0A0A0A] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ne manquez aucune édition</h2>
          <p className="font-body text-base text-[#6E6E6E] mb-10">
            Inscrivez-vous à notre newsletter pour être informé en priorité de l&apos;ouverture des billetteries et des nouveaux événements.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
             <input
              type="email"
              required
              placeholder="Votre adresse email"
              className="flex-1 bg-white/5 border border-white/10 px-5 py-4 text-sm font-body text-white focus:outline-none focus:border-white/30"
            />
            <button className="px-8 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </PublicLayout>
  );
}
