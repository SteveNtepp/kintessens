import { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — KINTESSENS',
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PublicLayout>
      <div className="pt-40 pb-28 bg-[#F7F6F2]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-12 text-center lg:text-left">Confidentialité</h1>
            
            <div className="prose prose-neutral font-body text-sm text-[#6E6E6E] space-y-10 leading-relaxed text-justify">
              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Introduction</h2>
                <p>
                  KINTESSENS accorde une importance primordiale à la protection de vos données personnelles. Cette politique détaille la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre plateforme.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Données collectées</h2>
                <p>
                  Nous collectons uniquement les données nécessaires à l&apos;amélioration de votre expérience et à la communication de nos activités :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Formulaires de contact : Nom, Email, Sujet, Message.</li>
                  <li>Newsletter : Adresse Email.</li>
                  <li>Navigation : Données analytiques anonymisées (via cookies) pour mesurer l&apos;audience du site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Utilisation des données</h2>
                <p>
                  Vos données sont utilisées exclusivement par KINTESSENS pour :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Répondre à vos demandes de contact ou de partenariat.</li>
                  <li>Vous envoyer nos actualités (si vous êtes inscrit à la newsletter).</li>
                  <li>Optimiser les performances et le design de notre plateforme.</li>
                </ul>
                <p className="mt-6 font-bold text-[#0A0A0A]">
                  Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales.
                </p>
              </section>

              <section>
                <h2 className="text-[#0A0A0A] text-lg font-bold uppercase tracking-widest mb-4">Vos droits</h2>
                <p>
                  Conformément au RGPD et aux lois locales sur la protection des données, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ces droits à tout moment en nous envoyant un email à <strong className="text-[#0A0A0A]">privacy@kintessens.com</strong>.
                </p>
              </section>

              <p className="pt-10 border-t border-[#D9D9D9] italic">
                Dernière mise à jour : 31 Mars 2026.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PublicLayout>
  );
}
