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
import { Badge } from "@/components/ui/badge";
import { 
  MoreHorizontal, 
  Plus, 
  Newspaper, 
  Pencil, 
  Trash2, 
  Eye,
  Download,
  FileText
} from "lucide-react";
import { DEMO_PRESS } from "@/lib/data";

export default function AdminPressPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Espace Presse (Géstion)</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Gérez les communiqués, dossiers de presse et media kits officiels.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-[#0A0A0A] text-white hover:bg-[#1E1E1E] font-body text-xs uppercase tracking-widest font-bold">
            <Plus className="w-4 h-4 mr-2" /> Nouveau Document
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden mt-8">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Type</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A] w-[400px]">Titre / Document</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Taille / Format</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Téléchargements</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DEMO_PRESS.map((item) => (
              <TableRow key={item.id} className="border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors">
                <TableCell>
                   <Badge variant="secondary" className="font-body text-[10px] uppercase tracking-widest font-bold capitalize">
                      {item.type.replace('_', ' ')}
                   </Badge>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center rounded">
                         <FileText className="w-5 h-5" />
                      </div>
                      <div>
                         <p className="font-body font-bold text-[#0A0A0A]">{item.title}</p>
                         <p className="text-[10px] text-[#6E6E6E] font-body truncate max-w-sm">{item.description}</p>
                      </div>
                   </div>
                </TableCell>
                <TableCell className="font-body text-xs text-[#6E6E6E]">
                   PDF / 2.4 MB
                </TableCell>
                <TableCell>
                   <span className="font-body text-sm font-bold text-[#0A0A0A]">128</span>
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
                           <Download className="w-4 h-4 mr-2" /> Télécharger
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Pencil className="w-3.5 h-3.5 mr-2" /> Remplacer le fichier
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
