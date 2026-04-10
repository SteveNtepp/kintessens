import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Mail, Download, ExternalLink } from 'lucide-react';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { DEMO_PARTNERS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Partenaires — KINTESSENS',
  description: 'Ils soutiennent la création contemporaine africaine. Découvrez nos partenaires et rejoignez l\'aventure KINTESSENS.',
};

const partnerTypes = [
  { key: 'sponsor', label: 'Sponsors & Marques' },
  { key: 'institution', label: 'Institutions' },
  { key: 'media', label: 'Médias Partenaires' },
  { key: 'technical', label: 'Partenaires Techniques' },
];

export default function PartenairesPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Partenaires</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              Construire<br />ensemble
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              KINTESSENS est une aventure partagée. Nous collaborons avec des institutions, des marques et des médias qui partagent notre ambition pour l&apos;excellence artistique africaine.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-28 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {partnerTypes.map((type) => {
            const partners = DEMO_PARTNERS.filter(p => p.type === type.key);
            if (partners.length === 0) return null;

            return (
              <div key={type.key} className="mb-24 last:mb-0">
                <AnimatedSection className="border-b border-[#D9D9D9] pb-6 mb-12">
                  <h2 className="font-body text-xs font-bold uppercase tracking-[0.3em] text-[#6E6E6E]">{type.label}</h2>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center">
                   {partners.map((partner) => (
                     <AnimatedSection key={partner.id} className="group">
                        <div className="flex flex-col items-center">
                          <div className="relative aspect-video w-full flex items-center justify-center mb-4grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                             {/* Logo text as placeholder if no image */}
                             <span className="font-heading text-2xl font-bold text-[#0A0A0A]">{partner.name}</span>
                          </div>
                          {partner.website && (
                             <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-[10px] font-body text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors flex items-center gap-1">
                               Site web <ExternalLink className="w-3 h-3" />
                             </a>
                          )}
                        </div>
                     </AnimatedSection>
                   ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Become a partner Section */}
      <section className="py-28 bg-white overflow-hidden border-t border-[#D9D9D9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-8">
                  Pourquoi devenir<br />partenaire ?
                </h2>
                <div className="space-y-8">
                   {[
                     { title: 'Visibilité Premium', text: 'Associez votre image à une marque culturelle exigeante et une audience qualifiée.' },
                     { title: 'Engagement Culturel', text: 'Affirmez votre soutien au rayonnement de la création contemporaine africaine.' },
                     { title: 'Expériences Uniques', text: 'Accès exclusif à nos événements pour vos collaborateurs et clients VIP.' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="w-8 h-8 rounded-full border border-[#D9D9D9] flex items-center justify-center shrink-0 font-heading text-sm font-bold text-[#0A0A0A]">
                          0{i+1}
                        </div>
                        <div>
                          <h4 className="font-body text-sm font-bold text-[#0A0A0A] mb-2 uppercase tracking-widest">{item.title}</h4>
                          <p className="font-body text-sm text-[#6E6E6E] leading-relaxed">{item.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" className="bg-[#0A0A0A] p-12 lg:p-16 text-center">
                 <Handshake className="w-16 h-16 text-white mx-auto mb-8 stroke-[1px]" />
                 <h3 className="font-heading text-3xl font-bold text-white mb-6">Rejoignez-nous</h3>
                 <p className="font-body text-sm text-[#6E6E6E] mb-10 leading-relaxed">
                   Téléchargez notre dossier de partenariat 2026 pour découvrir nos formats de collaboration et les activations possibles.
                 </p>
                 <div className="flex flex-col gap-4">
                    <button className="w-full flex items-center justify-center gap-3 py-4 bg-white text-[#0A0A0A] font-body text-sm font-medium hover:bg-[#F7F6F2] transition-colors">
                      <Download className="w-4 h-4" />
                      Dossier de partenariat
                    </button>
                    <Link href="/contact?type=partnership" className="w-full flex items-center justify-center gap-3 py-4 border border-white/20 text-white font-body text-sm font-medium hover:bg-white/5 transition-colors">
                      Prendre contact
                    </Link>
                 </div>
              </AnimatedSection>
           </div>
        </div>
      </section>
    </PublicLayout>
  );
}
