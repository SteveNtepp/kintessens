'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="flex-1 bg-white border border-[#D9D9D9] px-5 py-4 text-sm font-body text-[#0A0A0A] placeholder-[#6E6E6E] focus:outline-none focus:border-[#0A0A0A] transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-body text-sm font-medium hover:bg-[#1E1E1E] transition-colors whitespace-nowrap disabled:opacity-50"
      >
        {loading ? 'Envoi...' : "S'inscrire"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
