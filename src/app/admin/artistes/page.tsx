'use client';

import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup,
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  Filter, 
  Pencil, 
  Trash2, 
  Eye,
  Download
} from "lucide-react";
import { DEMO_ARTISTS } from "@/lib/data";
import { artistCategoryLabel } from "@/lib/utils";
import Image from 'next/image';

const statusColors: Record<string, string> = {
  resident: 'bg-[#A33A2B]',
  guest: 'bg-[#0A0A0A]',
  emerging: 'bg-[#6E6E6E]',
  artistic_council: 'bg-[#C8A96B]',
};

export default function AdminArtistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArtists = DEMO_ARTISTS.filter(artist => 
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Gestion des Artistes</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Consultez, ajoutez et modifiez les profils des artistes KINTESSENS.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-body text-xs uppercase tracking-widest font-bold">
            <Download className="w-4 h-4 mr-2" /> Exporter
          </Button>
          <Button className="bg-[#0A0A0A] text-white hover:bg-[#1E1E1E] font-body text-xs uppercase tracking-widest font-bold">
            <Plus className="w-4 h-4 mr-2" /> Nouvel Artiste
          </Button>
        </div>
      </div>

      {/* Filters Hub */}
      <div className="bg-white p-4 border border-[#D9D9D9] flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
          <Input 
            placeholder="Rechercher par nom, pays..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[#D9D9D9] bg-[#F7F6F2] font-body text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
           <Button variant="outline" size="icon" className="shrink-0"><Filter className="w-4 h-4" /></Button>
           <select className="bg-white border border-[#D9D9D9] px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-[#0A0A0A] focus:outline-none">
              <option>Catégorie</option>
              <option>Musique</option>
              <option>Poésie</option>
           </select>
           <select className="bg-white border border-[#D9D9D9] px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-[#0A0A0A] focus:outline-none">
              <option>Statut</option>
              <option>Résident</option>
              <option>Invité</option>
           </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="w-[80px] font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Photo</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Artiste</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Catégorie</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Pays</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Statut</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredArtists.map((artist) => (
              <TableRow key={artist.id} className="border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors">
                <TableCell>
                   <div className="relative w-12 h-12 bg-[#F7F6F2] overflow-hidden">
                      {artist.photo && <Image src={artist.photo} alt={artist.name} fill className="object-cover" />}
                   </div>
                </TableCell>
                <TableCell>
                  <div className="font-body font-bold text-[#0A0A0A]">{artist.name}</div>
                  <div className="text-[10px] text-[#6E6E6E] font-body uppercase tracking-tighter">@{artist.slug}</div>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="font-body text-[10px] uppercase tracking-widest font-bold border-[#D9D9D9]">
                      {artistCategoryLabel[artist.category]}
                   </Badge>
                </TableCell>
                <TableCell className="font-body text-sm text-[#6E6E6E]">
                  {artist.city && `${artist.city}, `}{artist.country}
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", statusColors[artist.status])} />
                      <span className="font-body text-xs font-bold text-[#0A0A0A] capitalize">
                        {artist.status.replace('_', ' ')}
                      </span>
                   </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="h-8 w-8 p-0 flex items-center justify-center rounded-md hover:bg-[#F7F6F2] transition-colors text-[#6E6E6E] outline-none">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border-[#D9D9D9] font-body">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel className="text-[10px] uppercase tracking-widest text-[#6E6E6E]">Options</DropdownMenuLabel>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Eye className="w-4 h-4 mr-2" /> Voir sur le site
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Pencil className="w-3.5 h-3.5 mr-2" /> Modifier le profil
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator className="bg-[#D9D9D9]" />
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="text-sm cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-600">
                           <Trash2 className="w-4 h-4 mr-2" /> Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filteredArtists.length === 0 && (
           <div className="py-20 text-center font-body text-[#6E6E6E] text-sm italic">
              Aucun artiste ne correspond à votre recherche.
           </div>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-6">
         <p className="text-xs font-body text-[#6E6E6E]">Affichage de 1 à {filteredArtists.length} sur {DEMO_ARTISTS.length} artistes</p>
         <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-body text-xs font-bold uppercase tracking-widest" disabled>Précédent</Button>
            <Button variant="outline" size="sm" className="font-body text-xs font-bold uppercase tracking-widest">Suivant</Button>
         </div>
      </div>
    </div>
  );
}
