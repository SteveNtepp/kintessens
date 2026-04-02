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
  Play, 
  Film,
  Pencil, 
  Trash2, 
  Eye,
  Download,
  Share2,
  ExternalLink
} from "lucide-react";
import { DEMO_MEDIA } from "@/lib/data";
import { mediaTypeLabel, formatDate } from "@/lib/utils";
import Image from 'next/image';

export default function AdminMediaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Médiathèque (Back-Office)</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Gérez vos contenus vidéo, photos et documents officiels.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-body text-xs uppercase tracking-widest font-bold">
            <Download className="w-4 h-4 mr-2" /> Exporter
          </Button>
          <Button className="bg-[#0A0A0A] text-white hover:bg-[#1E1E1E] font-body text-xs uppercase tracking-widest font-bold">
            <Plus className="w-4 h-4 mr-2" /> Nouveau Contenu
          </Button>
        </div>
      </div>

      {/* Grid of latest uploads/featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {DEMO_MEDIA.filter(m => m.featured).map(m => (
            <div key={m.id} className="relative aspect-video bg-[#0A0A0A] border border-[#D9D9D9] group overflow-hidden">
               {m.thumbnail && <Image src={m.thumbnail} alt={m.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />}
               <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <Badge className="w-fit bg-white/20 backdrop-blur-md text-white border-0 font-body text-[8px] uppercase tracking-widest">En avant</Badge>
                  <div>
                    <p className="text-white font-body font-bold text-sm truncate">{m.title}</p>
                    <p className="text-white/60 text-[10px] font-body uppercase">{mediaTypeLabel[m.type]}</p>
                  </div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 cursor-pointer">
                  <Play className="w-8 h-8 text-white fill-white" />
               </div>
            </div>
         ))}
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Vignette</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Titre</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Type</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Date de pub.</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Statut</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DEMO_MEDIA.map((m) => (
              <TableRow key={m.id} className="border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors">
                <TableCell>
                   <div className="relative w-20 h-12 bg-[#F7F6F2] overflow-hidden">
                      {m.thumbnail && <Image src={m.thumbnail} alt={m.title} fill className="object-cover" />}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                         <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                   </div>
                </TableCell>
                <TableCell>
                  <div className="font-body font-bold text-[#0A0A0A]">{m.title}</div>
                  <div className="text-[10px] text-[#6E6E6E] font-body uppercase tracking-tighter">ID: {m.id.substring(0,8)}</div>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="font-body text-[10px] uppercase tracking-widest font-bold border-[#D9D9D9]">
                      {mediaTypeLabel[m.type]}
                   </Badge>
                </TableCell>
                <TableCell className="font-body text-sm text-[#0A0A0A]" suppressHydrationWarning>
                  {m.published_at ? formatDate(m.published_at) : '—'}
                </TableCell>
                <TableCell>
                   <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 font-body text-[10px] uppercase">Public</Badge>
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
                           <ExternalLink className="w-4 h-4 mr-2" /> Ouvrir la source
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Pencil className="w-3.5 h-3.5 mr-2" /> Modifier les métadonnées
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Share2 className="w-3.5 h-3.5 mr-2" /> Copier le lien embed
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
      </div>
    </div>
  );
}
