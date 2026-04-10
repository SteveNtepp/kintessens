import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';

export const metadata: Metadata = {
  title: 'À propos — KINTESSENS',
  description: 'Découvrez l\'histoire, la vision et les valeurs de KINTESSENS — plateforme artistique et audiovisuelle dédiée à la création contemporaine africaine.',
};

const values = [
  { label: 'Excellence', description: 'Nous n\'acceptons que le meilleur. Dans chaque performance, chaque captation, chaque production.' },
  { label: 'Exigence artistique', description: 'L\'art sans compromis. Nous soutenons les artistes qui refusent la facilité.' },
  { label: 'Innovation', description: 'Réinventer les formats, les scénographies, les expériences — toujours.' },
  { label: 'Transmission', description: 'Connecter les générations, les disciplines, les cultures.' },
  { label: 'Rayonnement', description: 'Ancré en Afrique, tourné vers le monde. Notre ambition est internationale.' },
];

const team = [
  { name: 'Directeur Artistique', role: 'Conseil Artistique', country: 'Sénégal' },
  { name: 'Directrice de Production', role: 'Production', country: 'Côte d\'Ivoire' },
  { name: 'Responsable Communication', role: 'Communication & Médias', country: 'France' },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-6">
              Notre histoire
            </p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight max-w-3xl">
              La plateforme de la création africaine
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* Story */}
      <section className="py-28 md:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8">
                Une conviction commune
              </h2>
              <div className="space-y-6 font-body text-base text-[#6E6E6E] leading-relaxed">
                <p>
                  KINTESSENS est née d&apos;une évidence : la création contemporaine africaine — dans toute sa richesse, sa singularité, sa modernité — méritait une plateforme pensée à sa mesure.
                </p>
                <p>
                  Ni simple festival, ni simple label, ni simple média — KINTESSENS est une <strong className="text-[#0A0A0A]">marque culturelle totale</strong>, une institution artistique en construction, un espace de convergence entre les disciplines, les générations et les territoires.
                </p>
                <p>
                  Fondée à Dakar en 2026, KINTESSENS a immédiatement affirmé une ambition panafricaine et internationale. Nos formats artistiques — LIVE, FESTIVAL, SOLIDARITY — sont autant de manières d&apos;habiter l&apos;art, de le partager, de le transmettre.
                </p>
                <p>
                  La <em>quintessence</em> : c&apos;est ce que nous cherchons dans chaque artiste, chaque performance, chaque production. Le meilleur de ce que le continent a à offrir — présenté avec l&apos;exigence qu&apos;il mérite.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200} className="space-y-8">
              <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-[#1E1E1E]">
                <Image
                  src="/images/about/vision-v3.jpg"
                  alt="KINTESSENS Vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0A0A0A] p-6 text-center">
                  <p className="font-heading text-4xl font-bold text-white mb-1">2026</p>
                  <p className="font-body text-xs text-[#6E6E6E] uppercase tracking-widests">Fondation</p>
                </div>
                <div className="bg-[#0A0A0A] p-6 text-center">
                  <p className="font-heading text-4xl font-bold text-white mb-1">4+</p>
                  <p className="font-body text-xs text-[#6E6E6E] uppercase tracking-widests">Pays</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-28 md:py-40 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">
              Les visages de KINTESSENS
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Notre équipe
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: '/images/team/didier-awadi.jpg', name: 'Didier Awadi', role: 'Directeur Artistique' },
              { src: '/images/team/duggy-tee.jpg',   name: 'Duggy Tee',    role: 'Directeur Artistique'  },
              { src: '/images/team/dj-boups-v2.jpg',    name: 'DJ Boups',     role: 'Directeur Musical'   },
              { src: '/images/team/bakhaw-v3.jpg',      name: 'Bakhaw',       role: 'Production'          },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100}>
                <div className="group flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-[#1E1E1E]">
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="font-heading text-base font-bold text-white">{member.name}</p>
                    <p className="font-body text-xs text-[#6E6E6E] uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-6">Vision</p>
            <blockquote className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
              &ldquo;Faire de la création contemporaine africaine une référence mondiale de l&apos;excellence artistique.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <p className="font-body text-[11px] tracking-widests uppercase text-[#6E6E6E] mb-4">Nos valeurs</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A]">Ce en quoi nous croyons</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#D9D9D9]">
            {values.map((v, i) => (
              <AnimatedSection key={v.label} delay={i * 80}>
                <div className="p-8 border-b md:border-r border-[#D9D9D9] last:border-0 hover:bg-white transition-colors">
                  <span className="font-body text-xs text-[#D9D9D9] font-bold mb-4 block">0{i + 1}</span>
                  <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] mb-3">{v.label}</h3>
                  <p className="font-body text-sm text-[#6E6E6E] leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-8">Rejoignez l&apos;univers KINTESSENS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/evenements" className="px-8 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors">
              Voir les événements
            </Link>
            <Link href="/contact?type=partnership" className="px-8 py-4 border border-white/30 text-white font-body text-sm font-medium hover:bg-white/5 transition-colors">
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
