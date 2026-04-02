import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Heart, Users, Lightbulb, HandHeart } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { EventCard } from '@/components/sections/EventCard';
import { DEMO_EVENTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'KINTESSENS SOLIDARITY — Art et engagement social',
  description: 'KINTESSENS SOLIDARITY : le volet solidaire de la marque. Transmission, engagement artistique et impact culturel au service des communautés.',
};

const actions = [
  { icon: HandHeart, label: 'Concerts solidaires', description: 'Des performances ouvertes à tous, dans des espaces communautaires et culturels.' },
  { icon: Lightbulb, label: 'Ateliers créatifs', description: 'Formations, mentorat et workshops pour les jeunes artistes émergents.' },
  { icon: Users, label: 'Mentorat artistique', description: 'Les artistes résidents KINTESSENS accompagnent la nouvelle génération.' },
  { icon: Heart, label: 'Actions sociales', description: 'Partenariats avec des associations culturelles et des institutions communautaires.' },
];

const solidarityEvents = DEMO_EVENTS.filter((e) => e.type === 'solidarity');

export default function SolidarityPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(ellipse at 40% 60%, #2E6B57, transparent 70%)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="inline-block px-3 py-1 bg-[#2E6B57] mb-8">
              <span className="font-body text-[10px] font-bold tracking-widests uppercase text-white">KINTESSENS SOLIDARITY</span>
            </div>
            <h1 className="font-heading text-6xl md:text-9xl font-bold text-white leading-none mb-8 max-w-4xl">
              L&apos;art.<br />Le lien.<br /><em className="not-italic text-[#2E6B57]">L&apos;impact.</em>
            </h1>
            <p className="font-body text-lg text-[#6E6E6E] max-w-2xl leading-relaxed mb-10">
              KINTESSENS SOLIDARITY incarne la dimension sociale et solidaire de la marque. L&apos;art comme outil de transformation, de transmission et de connexion entre les êtres humains.
            </p>
            <Link
              href="/contact?type=partnership"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2E6B57] text-white font-body text-sm font-medium hover:bg-[#235248] transition-colors"
            >
              Soutenir SOLIDARITY
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Manifeste solidaire */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8">
                L&apos;art n&apos;est pas réservé à quelques-uns.
              </h2>
              <div className="space-y-6 font-body text-base text-[#6E6E6E] leading-relaxed">
                <p>
                  KINTESSENS croit profondément que la création artistique a une responsabilité sociale. Au-delà des scènes premium et des événements haut de gamme, SOLIDARITY est notre engagement pour rendre l&apos;art accessible, vivant et transformateur.
                </p>
                <p>
                  Dans chaque ville où nous intervenons, SOLIDARITY est une invitation à la communauté — artistes et non-artistes, jeunes et moins jeunes, confirmés et émergents.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <div className="bg-[#0A0A0A] p-12">
                <p className="font-heading text-2xl font-bold text-white leading-relaxed">
                  &ldquo;La culture est le terrain le plus fertile pour construire des ponts là où les murs semblent infranchissables.&rdquo;
                </p>
                <p className="font-body text-sm text-[#6E6E6E] mt-6">— Équipe KINTESSENS</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">Nos actions</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-0 border border-white/10">
            {actions.map((a, i) => (
              <AnimatedSection key={a.label} delay={i * 80}>
                <div className="p-10 border-b md:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2E6B57] mb-6">
                    <a.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">{a.label}</h3>
                  <p className="font-body text-sm text-[#6E6E6E] leading-relaxed">{a.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solidarity Events */}
      {solidarityEvents.length > 0 && (
        <section className="py-28 bg-[#F7F6F2]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A]">Sessions SOLIDARITY</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {solidarityEvents.map((event, i) => (
                <AnimatedSection key={event.id} delay={i * 80}>
                  <EventCard event={event} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA mécènes */}
      <section className="py-28 bg-[#2E6B57]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Devenez mécène SOLIDARITY</h2>
            <p className="font-body text-base text-white/70 max-w-xl mx-auto mb-10">
              Soutenez des actions culturelles à impact social réel. Rejoignez une communauté de mécènes engagés pour la création africaine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=sponsorship" className="px-8 py-4 bg-white text-[#2E6B57] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors">
                Devenir mécène
              </Link>
              <Link href="/partenaires" className="px-8 py-4 border border-white/40 text-white font-body text-sm font-medium hover:bg-white/10 transition-colors">
                Voir nos partenaires
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PublicLayout>
  );
}
