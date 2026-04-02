import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';

export const metadata: Metadata = {
  title: 'Mentions Légales — KINTESSENS',
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <PublicLayout>
      <div className="pt-40 pb-28 bg-[#F7F6F2]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-12">Mentions Légales</h1>
            
            <div className="prose prose-neutral font-body text-sm text-[#6E6E6E] space-y-10 leading-relaxed">
              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Éditeur du site</h2>
                <p>
                  Le présent site est édité par la société <strong className="text-[#0A0A0A]">KINTESSENS S.A.S.</strong><br />
                  Siège social : Dakar, Sénégal.<br />
                  Directeur de la publication : Le Président de KINTESSENS.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Hébergement</h2>
                <p>
                  Ce site est hébergé par <strong className="text-[#0A0A0A]">Vercel Inc.</strong><br />
                  Adresse : 340 S Lemon Ave #1192, Walnut, CA 91789, États-Unis.<br />
                  Site web : https://vercel.com
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Propriété Intellectuelle</h2>
                <p>
                  L&apos;ensemble des contenus (textes, graphismes, logos, photographies, vidéos, etc.) de ce site est protégé par les lois internationales sur la propriété intellectuelle. Toute reproduction, même partielle, sans autorisation préalable est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Contact</h2>
                <p>
                  Pour toute demande relative aux mentions légales, vous pouvez nous contacter à l&apos;adresse suivante : <strong className="text-[#0A0A0A]">contact@kintessens.com</strong>
                </p>
              </section>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PublicLayout>
  );
}
