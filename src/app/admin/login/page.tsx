'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/layout/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Lock, Mail, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      if (email === 'admin@kintessens.com' && password === 'admin123') {
        toast.success('Connexion réussie');
        router.push('/admin');
      } else {
        toast.error('Identifiants invalides');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E1E1E] via-[#0A0A0A] to-[#0A0A0A]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
           <div className="flex justify-center mb-10">
              <Logo color="light" size="lg" />
           </div>
        </div>

        <Card className="border-white/10 bg-white/5 backdrop-blur-xl text-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-heading font-bold text-center">Accès Back-Office</CardTitle>
            <CardDescription className="text-[#6E6E6E] text-center font-body text-xs uppercase tracking-widest">
              Identifiez-vous pour gérer la plateforme
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Email</Label>
                <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
                   <Input 
                      id="email" 
                      type="email" 
                      placeholder="admin@kintessens.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-white/10 pl-10 h-12 focus-visible:ring-[#C8A96B] dark"
                   />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Mot de passe</Label>
                <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
                   <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white/5 border-white/10 pl-10 h-12 focus-visible:ring-[#C8A96B] dark"
                   />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 flex flex-col space-y-4">
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 bg-white text-[#0A0A0A] hover:bg-[#F7F6F2] font-body font-bold uppercase tracking-widest transition-all"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Se connecter'}
              </Button>
              <button 
                type="button" 
                onClick={() => toast.info('Veuillez contacter le support')}
                className="text-xs text-[#6E6E6E] hover:text-white transition-colors"
              >
                Mot de passe oublié ?
              </button>
            </CardFooter>
          </form>
        </Card>

        <p className="text-center text-[10px] text-[#6E6E6E] font-body uppercase tracking-[0.2em]">
           &copy; 2026 KINTESSENS — Système de gestion propriétaire
        </p>
      </div>
    </div>
  );
}
