import Link from 'next/link';
import { Logo } from './Logo';
import { Camera, Video, Send, Globe, ArrowRight } from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

const quickLinks = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'KINTESSENS LIVE', href: '/live' },
  { label: 'KINTESSENS FESTIVAL', href: '/festival' },
  { label: 'KINTESSENS SOLIDARITY', href: '/solidarity' },
  { label: 'Artistes', href: '/artistes' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Médias', href: '/medias' },
  { label: 'Partenaires', href: '/partenaires' },
];

const legalLinks = [
  { label: 'Presse / Media Kit', href: '/presse' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'Contact', href: '/contact' },
];

const socials = [
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Video, href: '#', label: 'YouTube' },
  { icon: Send, href: '#', label: 'X / Twitter' },
  { icon: Globe, href: '#', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F7F6F2] pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo color="light" size="sm" />
            <p className="mt-6 text-sm text-[#6E6E6E] font-body leading-relaxed">
              La quintessence de la création contemporaine africaine.
            </p>
            <p className="mt-3 text-sm text-[#6E6E6E] font-body">
              Dakar · Abidjan · Paris
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-[#6E6E6E] hover:text-white hover:border-white/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-widest uppercase text-[#6E6E6E] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#D9D9D9] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-widest uppercase text-[#6E6E6E] mb-6">
              Informations
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#D9D9D9] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-body text-xs font-medium tracking-widest uppercase text-[#6E6E6E] mb-3">
                Contact
              </h4>
              <a
                href="mailto:contact@kintessens.com"
                className="font-body text-sm text-[#D9D9D9] hover:text-white transition-colors duration-200"
              >
                contact@kintessens.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-widest uppercase text-[#6E6E6E] mb-6">
              Newsletter
            </h4>
            <p className="font-body text-sm text-[#6E6E6E] mb-4 leading-relaxed">
              Recevez les actualités KINTESSENS, les prochains événements et les contenus exclusifs.
            </p>
            <FooterNewsletter />
            <p className="text-xs text-[#6E6E6E] mt-3 font-body">
              En vous inscrivant, vous acceptez notre{' '}
              <Link href="/politique-confidentialite" className="underline hover:text-white">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6E6E6E] font-body">
            © {new Date().getFullYear()} KINTESSENS. Tous droits réservés.
          </p>
          <p className="text-xs text-[#6E6E6E] font-body italic">
            La quintessence de la création contemporaine africaine.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
