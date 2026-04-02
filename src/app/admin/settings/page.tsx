'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  User, 
  Lock, 
  Globe, 
  Bell, 
  ShieldCheck,
  Save
} from "lucide-react";
import { toast } from "sonner";

export default function AdminSettingsPage() {
  const handleSave = () => {
    toast.success('Paramètres enregistrés avec succès');
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-[#0A0A0A] mb-2">Paramètres du système</h1>
        <p className="font-body text-[#6E6E6E] text-sm">Configurez les options générales de la plateforme et de votre compte.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-[#F7F6F2] border border-[#D9D9D9] p-1 rounded-none h-auto flex-wrap">
          <TabsTrigger value="general" className="font-body text-[10px] uppercase tracking-widest font-bold px-6 py-3 data-[state=active]:bg-white data-[state=active]:border-[#D9D9D9]">Général</TabsTrigger>
          <TabsTrigger value="profile" className="font-body text-[10px] uppercase tracking-widest font-bold px-6 py-3 data-[state=active]:bg-white data-[state=active]:border-[#D9D9D9]">Mon Profil</TabsTrigger>
          <TabsTrigger value="security" className="font-body text-[10px] uppercase tracking-widest font-bold px-6 py-3 data-[state=active]:bg-white data-[state=active]:border-[#D9D9D9]">Sécurité</TabsTrigger>
          <TabsTrigger value="notifications" className="font-body text-[10px] uppercase tracking-widest font-bold px-6 py-3 data-[state=active]:bg-white data-[state=active]:border-[#D9D9D9]">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <div className="grid gap-6">
            <Card className="border-[#D9D9D9] rounded-none bg-white">
              <CardHeader>
                <CardTitle className="font-heading text-xl">Informations de la marque</CardTitle>
                <CardDescription className="font-body text-xs">Ces informations s&apos;affichent sur le site public.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Nom de la marque</Label>
                    <Input defaultValue="KINTESSENS" className="font-body text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Baseline</Label>
                    <Input defaultValue="La quintessence de la création contemporaine africaine" className="font-body text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                   <Label className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Email de contact public</Label>
                   <Input defaultValue="contact@kintessens.com" className="font-body text-sm" />
                </div>
                <Separator className="bg-[#F0F0F0]" />
                <div className="flex justify-end">
                   <Button onClick={handleSave} className="bg-[#0A0A0A] font-body text-xs uppercase tracking-widest font-bold h-11 px-8">
                      <Save className="w-4 h-4 mr-2" /> Enregistrer les modifications
                   </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <Card className="border-[#D9D9D9] rounded-none bg-white">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Détails personnels</CardTitle>
              <CardDescription className="font-body text-xs">Gérez vos informations d&apos;administrateur.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-[#0A0A0A] text-white flex items-center justify-center font-heading text-3xl font-bold rounded-lg shrink-0">K</div>
                  <div className="space-y-2">
                     <Button variant="outline" size="sm" className="font-body text-[10px] uppercase font-bold tracking-widest">Changer de photo</Button>
                     <p className="text-[10px] text-[#6E6E6E] font-body uppercase tracking-tighter">JPG ou PNG, Max 2MB</p>
                  </div>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Prénom</Label>
                    <Input defaultValue="Admin" className="font-body text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-[#6E6E6E]">Nom</Label>
                    <Input defaultValue="Kintessens" className="font-body text-sm" />
                  </div>
               </div>
               <div className="flex justify-end">
                  <Button onClick={handleSave} className="bg-[#0A0A0A] font-body text-xs uppercase tracking-widest font-bold h-11 px-8">
                    <Save className="w-4 h-4 mr-2" /> Mettre à jour le profil
                  </Button>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
           <Card className="border-[#D9D9D9] rounded-none bg-white">
              <CardHeader>
                 <CardTitle className="font-heading text-xl">Sécurité du compte</CardTitle>
                 <CardDescription className="font-body text-xs">Sécurisez votre accès administratif.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="p-4 bg-[#F7F6F2] border border-[#D9D9D9] flex items-start gap-4">
                    <ShieldCheck className="w-5 h-5 text-[#2E6B57] shrink-0 mt-1" />
                    <div>
                       <p className="font-body font-bold text-sm text-[#0A0A0A]">Double authentification</p>
                       <p className="font-body text-xs text-[#6E6E6E]">Ajoutez une couche de sécurité supplémentaire à votre compte.</p>
                       <Button variant="link" className="p-0 h-auto font-body text-xs text-[#0A0A0A] font-bold uppercase tracking-widest mt-2">Activer maintenant</Button>
                    </div>
                 </div>
                 <Separator className="bg-[#F0F0F0]" />
                 <div className="space-y-4">
                    <h4 className="font-body font-bold text-sm text-[#0A0A0A]">Changer le mot de passe</h4>
                    <div className="grid gap-4 max-w-md">
                       <Input type="password" placeholder="Mot de passe actuel" className="font-body text-sm" />
                       <Input type="password" placeholder="Nouveau mot de passe" className="font-body text-sm" />
                       <Input type="password" placeholder="Confirmer le nouveau mot de passe" className="font-body text-sm" />
                    </div>
                    <Button variant="outline" className="font-body text-[10px] uppercase font-bold tracking-widest px-6 h-10 border-[#0A0A0A]">Réinitialiser</Button>
                 </div>
              </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
