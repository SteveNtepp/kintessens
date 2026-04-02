import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { DEMO_PRESS } from '@/lib/data';
import { Download, FileText, Image as ImageIcon, FileArchive, Mail, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Espace Presse & Media Kit — KINTESSENS',
  description: 'Accédez aux ressources officielles de KINTESSENS : communiqués, dossiers de presse, logos et visuels haute définition.',
};

const typeIcons: Record<string, any> = {
  dossier: FileText,
  communique: FileText,
  logo: FileArchive,
  photo_hd: ImageIcon,
  biography: UserIcon,
  press_review: GlobeIcon,
};

// Simple utility component for icons
function UserIcon(props: any) { return <span {...props}>👤</span> }
function GlobeIcon(props: any) { return <span {...props}>🌐</span> }

export default function PressePage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Presse</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              Espace Médias<br />& Media Kit
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              Retrouvez l&apos;ensemble des ressources officielles KINTESSENS pour vos articles, reportages et publications.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Resources List */}
            <div className="lg:col-span-2 space-y-12">
               <AnimatedSection>
                  <h2 className="font-heading text-3xl font-bold text-[#0A0A0A] mb-8">Ressources à télécharger</h2>
                  <div className="space-y-4">
                    {DEMO_PRESS.map((item) => {
                      const Icon = typeIcons[item.type] || FileText;
                      return (
                        <div key={item.id} className="bg-white border border-[#D9D9D9] p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#0A0A0A] transition-colors">
                           <div className="flex gap-4">
                              <div className="w-12 h-12 bg-[#F7F6F2] flex items-center justify-center shrink-0 group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                                 <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                 <h3 className="font-body text-sm font-bold text-[#0A0A0A] mb-1">{item.title}</h3>
                                 <p className="font-body text-xs text-[#6E6E6E]">{item.description}</p>
                              </div>
                           </div>
                           <button className="flex items-center justify-center gap-2 px-6 py-3 border border-[#D9D9D9] text-[#0A0A0A] font-body text-[10px] font-bold uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-all">
                              <Download className="w-3 h-3" />
                              Télécharger
                           </button>
                        </div>
                      )
                    })}
                  </div>
               </AnimatedSection>

               {/* Guidelines */}
               <AnimatedSection delay={100}>
                  <div className="bg-[#0A0A0A] p-10 md:p-16 text-white">
                    <h2 className="font-heading text-3xl font-bold mb-8">Utilisation des visuels</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#6E6E6E]">Respect du logo</h4>
                          <p className="font-body text-sm text-[#D9D9D9] leading-relaxed">
                            Le logo KINTESSENS ne doit pas être déformé, recoloré ou modifié. Merci de respecter les zones d&apos;exclusion mentionnées dans notre charte graphique.
                          </p>
                       </div>
                       <div className="space-y-4">
                          <h4 className="font-body text-xs font-bold uppercase tracking-widest text-[#6E6E6E]">Crédits photographiques</h4>
                          <p className="font-body text-sm text-[#D9D9D9] leading-relaxed">
                            Toute utilisation des photos officielles doit mentionner obligatoirement le crédit : <strong className="text-white">© KINTESSENS</strong>, suivi du nom du photographe si indiqué.
                          </p>
                       </div>
                    </div>
                  </div>
               </AnimatedSection>
            </div>

            {/* Sidebar Contact */}
            <div className="lg:col-span-1">
               <div className="sticky top-32 space-y-8">
                  <div className="bg-white p-8 border border-[#D9D9D9]">
                    <div className="w-12 h-12 bg-[#F7F6F2] flex items-center justify-center mb-6">
                      <Mail className="w-6 h-6 text-[#0A0A0A]" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] mb-4">Contact Presse</h3>
                    <p className="font-body text-sm text-[#6E6E6E] mb-8 leading-relaxed">
                      Vous souhaitez une interview, une accréditation ou davantage d&apos;informations ? Notre service presse est à votre disposition.
                    </p>
                    <a 
                      href="mailto:presse@kintessens.com" 
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-colors"
                    >
                      presse@kintessens.com
                    </a>
                  </div>

                  <div className="p-6 border border-[#D9D9D9] flex flex-col gap-4">
                     <p className="font-body text-[10px] uppercase font-bold tracking-widest text-[#6E6E6E]">Derniers communiqués</p>
                     <ul className="space-y-4">
                        {DEMO_PRESS.filter(i => i.type === 'communique').map(c => (
                          <li key={c.id}>
                             <a href="#" className="font-body text-xs text-[#0A0A0A] hover:underline flex items-center gap-2">
                                <ArrowRight className="w-3 h-3 text-[#D9D9D9]" />
                                {c.title}
                             </a>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
