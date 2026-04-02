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
  Handshake, 
  Pencil, 
  Trash2, 
  Eye,
  Download,
  ExternalLink,
  Globe
} from "lucide-react";
import { DEMO_PARTNERS } from "@/lib/data";

const partnerTypeLabels: Record<string, string> = {
  sponsor: 'Sponsor',
  institution: 'Institution',
  media: 'Média',
  technical: 'Technique',
};

export default function AdminPartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Gestion des Partenaires</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Gérez les relations avec vos sponsors, institutions et partenaires médias.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-body text-xs uppercase tracking-widest font-bold">
            <Download className="w-4 h-4 mr-2" /> Exporter
          </Button>
          <Button className="bg-[#0A0A0A] text-white hover:bg-[#1E1E1E] font-body text-xs uppercase tracking-widest font-bold">
            <Plus className="w-4 h-4 mr-2" /> Nouveau Partenaire
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden mt-8">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Logo / Nom</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Type</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Site Web</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Contrat</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DEMO_PARTNERS.map((partner) => (
              <TableRow key={partner.id} className="border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-[#F7F6F2] flex items-center justify-center font-heading font-bold text-xs border border-[#D9D9D9]">
                        {partner.name[0]}
                     </div>
                     <span className="font-body font-bold text-[#0A0A0A]">{partner.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="font-body text-[10px] uppercase tracking-widest font-bold border-[#D9D9D9]">
                      {partnerTypeLabels[partner.type]}
                   </Badge>
                </TableCell>
                <TableCell>
                   {partner.website ? (
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-body text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                         <Globe className="w-3 h-3" /> {partner.website.replace('https://', '')}
                      </a>
                   ) : '—'}
                </TableCell>
                <TableCell>
                   <span className="text-[10px] font-body uppercase tracking-widest text-[#0A0A0A] font-bold">Actif</span>
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
                           <Pencil className="w-3.5 h-3.5 mr-2" /> Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <ExternalLink className="w-4 h-4 mr-2" /> Voir les opportunités
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
