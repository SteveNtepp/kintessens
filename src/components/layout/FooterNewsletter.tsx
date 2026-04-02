'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Inscription réussie !');
      setEmail('');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="bg-white/5 border border-white/10 px-4 py-3 text-sm font-body text-white placeholder-[#6E6E6E] focus:outline-none focus:border-white/30 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 bg-white text-[#0A0A0A] px-4 py-3 text-sm font-body font-medium hover:bg-[#F7F6F2] transition-colors duration-200 disabled:opacity-50"
      >
        {loading ? 'Envoi...' : "S'inscrire"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
