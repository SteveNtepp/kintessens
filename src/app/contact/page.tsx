'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { Mail, Phone, MapPin, Camera, Video, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactTypes = [
  { id: 'general', label: 'Contact général' },
  { id: 'partnership', label: 'Partenariat & Sponsoring' },
  { id: 'artist', label: 'Candidature artiste' },
  { id: 'press', label: 'Espace Presse' },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'general';
  
  const [activeType, setActiveType] = useState(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 lg:p-20 text-center border border-[#D9D9D9]">
        <div className="w-20 h-20 bg-[#F7F6F2] flex items-center justify-center mx-auto mb-8">
           <CheckCircle2 className="w-10 h-10 text-[#0A0A0A]" />
        </div>
        <h2 className="font-heading text-4xl font-bold text-[#0A0A0A] mb-6">Message reçu</h2>
        <p className="font-body text-[#6E6E6E] mb-10 max-w-sm mx-auto">
          Merci pour votre demande. Notre équipe reviendra vers vous sous 48 heures.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-8 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 lg:p-12 border border-[#D9D9D9]">
      <div className="mb-12">
        <p className="font-body text-[10px] uppercase tracking-widest text-[#6E6E6E] mb-6">Je souhaite contacter...</p>
        <div className="flex flex-wrap gap-2">
           {contactTypes.map(type => (
             <button
               key={type.id}
               type="button"
               onClick={() => setActiveType(type.id)}
               className={cn(
                 "px-4 py-3 text-[11px] font-body font-bold uppercase tracking-widest border transition-all",
                 activeType === type.id
                  ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                  : "bg-white text-[#6E6E6E] border-[#D9D9D9] hover:border-[#0A0A0A] hover:text-[#0A0A0A]"
               )}
             >
               {type.label}
             </button>
           ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
           <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-[#0A0A0A]">Nom complet</label>
              <input
                id="name"
                required
                type="text"
                placeholder="Ex: Amadou Fall"
                className="w-full bg-[#F7F6F2] border border-[#D9D9D9] px-4 py-4 text-sm font-body text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
              />
           </div>
           <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-[#0A0A0A]">Adresse Email</label>
              <input
                id="email"
                required
                type="email"
                placeholder="Ex: amadou@example.com"
                className="w-full bg-[#F7F6F2] border border-[#D9D9D9] px-4 py-4 text-sm font-body text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
              />
           </div>
        </div>

        <div className="space-y-2">
           <label htmlFor="subject" className="text-[10px] uppercase font-bold tracking-widest text-[#0A0A0A]">Sujet</label>
           <input
             id="subject"
             required
             type="text"
             placeholder="Objet de votre demande"
             className="w-full bg-[#F7F6F2] border border-[#D9D9D9] px-4 py-4 text-sm font-body text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
           />
        </div>

        <div className="space-y-2">
           <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-[#0A0A0A]">Message</label>
           <textarea
             id="message"
             required
             rows={6}
             placeholder="Votre message ici..."
             className="w-full bg-[#F7F6F2] border border-[#D9D9D9] px-4 py-4 text-sm font-body text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] resize-none"
           />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-all disabled:opacity-50"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center lg:text-left">
          <AnimatedSection>
            <p className="font-body text-[11px] tracking-widest uppercase text-[#6E6E6E] mb-4">Contact</p>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
              Ouvrons le<br />dialogue
            </h1>
            <p className="font-body text-base text-[#6E6E6E] max-w-xl leading-relaxed">
              Une question, un projet, une collaboration ou une candidature ? Notre équipe est à votre écoute pour faire rayonner la création contemporaine.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <section className="py-20 lg:py-40 bg-[#F7F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
           <div className="grid lg:grid-cols-12 gap-16">
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-12">
                 <AnimatedSection delay={0} direction="left">
                    <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] mb-8">Coordonnées</h3>
                    <div className="space-y-8">
                       <div className="flex gap-4">
                          <Mail className="w-5 h-5 text-[#6E6E6E] shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-[#6E6E6E] mb-1">Email</p>
                            <a href="mailto:contact@kintessens.com" className="font-body text-base text-[#0A0A0A] hover:underline">contact@kintessens.com</a>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <MapPin className="w-5 h-5 text-[#6E6E6E] shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-[#6E6E6E] mb-1">Bureaux</p>
                            <p className="font-body text-base text-[#0A0A0A]">Dakar, Sénégal<br />Abidjan, Côte d&apos;Ivoire</p>
                          </div>
                       </div>
                    </div>
                 </AnimatedSection>

                 <AnimatedSection delay={100} direction="left">
                    <h3 className="font-heading text-2xl font-bold text-[#0A0A0A] mb-8">Suivez-nous</h3>
                    <div className="flex gap-6">
                       <a href="#" className="w-10 h-10 border border-[#D9D9D9] flex items-center justify-center text-[#6E6E6E] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all">
                          <Camera className="w-5 h-5" />
                       </a>
                       <a href="#" className="w-10 h-10 border border-[#D9D9D9] flex items-center justify-center text-[#6E6E6E] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all">
                          <Video className="w-5 h-5" />
                       </a>
                       <a href="#" className="w-10 h-10 border border-[#D9D9D9] flex items-center justify-center text-[#6E6E6E] hover:text-[#0A0A0A] hover:border-[#0A0A0A] transition-all">
                          <Send className="w-5 h-5" />
                       </a>
                    </div>
                 </AnimatedSection>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-8">
                 <AnimatedSection delay={200} direction="right">
                    <Suspense fallback={<div className="bg-white p-12 border border-[#D9D9D9] animate-pulse h-96" />}>
                      <ContactForm />
                    </Suspense>
                 </AnimatedSection>
              </div>
           </div>
        </div>
      </section>
    </PublicLayout>
  );
}
