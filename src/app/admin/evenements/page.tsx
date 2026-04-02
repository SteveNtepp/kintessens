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
  Calendar as CalendarIcon, 
  MapPin,
  Pencil, 
  Trash2, 
  Eye,
  Download,
  CheckCircle2,
  Clock
} from "lucide-react";
import { DEMO_EVENTS } from "@/lib/data";
import { eventTypeLabel, eventTypeColor, formatDate } from "@/lib/utils";
import Image from 'next/image';

export default function AdminEventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEvents = DEMO_EVENTS.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Gestion des Événements</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Programmez et gérez les sessions LIVE, festivals et actions solidaires.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-body text-xs uppercase tracking-widest font-bold">
            <Download className="w-4 h-4 mr-2" /> Exporter
          </Button>
          <Button className="bg-[#0A0A0A] text-white hover:bg-[#1E1E1E] font-body text-xs uppercase tracking-widest font-bold">
            <Plus className="w-4 h-4 mr-2" /> Nouvel Événement
          </Button>
        </div>
      </div>

      {/* Filters Hub */}
      <div className="bg-white p-4 border border-[#D9D9D9] flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6E6E]" />
          <Input 
            placeholder="Rechercher un événement..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[#D9D9D9] bg-[#F7F6F2] font-body text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
           <select className="bg-white border border-[#D9D9D9] px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-[#0A0A0A] focus:outline-none">
              <option>Format</option>
              <option>LIVE</option>
              <option>Festival</option>
              <option>Solidarity</option>
           </select>
           <select className="bg-white border border-[#D9D9D9] px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-[#0A0A0A] focus:outline-none">
              <option>Statut</option>
              <option>À venir</option>
              <option>Passé</option>
              <option>Brouillon</option>
           </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Date</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A] w-[300px]">Événement</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Lieu</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Type</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Statut</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.map((event) => (
              <TableRow key={event.id} className="border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors">
                <TableCell suppressHydrationWarning>
                   <div className="flex flex-col">
                      <span className="font-body font-bold text-[#0A0A0A]">{formatDate(event.date, { day: '2-digit', month: 'short' })}</span>
                      <span className="text-[10px] text-[#6E6E6E] font-body uppercase tracking-tighter">{new Date(event.date).getFullYear()}</span>
                   </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center">
                     <div className="relative w-16 h-10 bg-[#1E1E1E] shrink-0 overflow-hidden">
                        {event.cover_image && <Image src={event.cover_image} alt={event.title} fill className="object-cover opacity-80" />}
                     </div>
                     <div className="min-w-0" suppressHydrationWarning>
                        <div className="font-body font-bold text-[#0A0A0A] truncate">{event.title}</div>
                        <div className="text-[10px] text-[#6E6E6E] font-body uppercase tracking-widest flex items-center gap-1 mt-0.5">
                           <Clock className="w-3 h-3" /> {event.time || 'TBA'}
                        </div>
                     </div>
                  </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2 font-body text-sm text-[#0A0A0A]">
                      <MapPin className="w-3.5 h-3.5 text-[#6E6E6E]" />
                      {event.city}
                   </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: eventTypeColor[event.type] }} />
                       <span className="font-body text-[11px] font-bold uppercase tracking-widest text-[#0A0A0A]">
                         {eventTypeLabel[event.type]}
                       </span>
                   </div>
                </TableCell>
                <TableCell>
                   {event.status === 'upcoming' ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-body text-[10px] uppercase">À venir</Badge>
                   ) : (
                      <Badge variant="secondary" className="font-body text-[10px] uppercase">Passé</Badge>
                   )}
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
                           <Pencil className="w-3.5 h-3.5 mr-2" /> Modifier l&apos;événement
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-green-600" /> Marquer comme complet
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
