'use client';

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
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  Eye,
  Mail,
  User,
  AlertCircle
} from "lucide-react";

const demoMessages = [
  { id: '1', name: 'Oumar Sy', email: 'oumar@example.com', subject: 'Candidature live 2026', date: '2026-03-31T14:20:00Z', type: 'artist', status: 'new' },
  { id: '2', name: 'Fatou Diop', email: 'fatou@brand.com', subject: 'Partenariat Festival', date: '2026-03-31T11:45:00Z', type: 'partnership', status: 'read' },
  { id: '3', name: 'Moussa Ndiaye', email: 'moussa@web.sn', subject: 'Question billetterie', date: '2026-03-30T18:30:00Z', type: 'general', status: 'replied' },
  { id: '4', name: 'Sarah Koné', email: 'sarah@journal.com', subject: 'Demande Interview', date: '2026-03-29T10:15:00Z', type: 'press', status: 'read' },
  { id: '5', name: 'Jean Dupont', email: 'jean@test.com', subject: 'Problème technique site', date: '2026-03-28T09:00:00Z', type: 'general', status: 'new' },
];

export default function AdminMessagesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-[#0A0A0A]">Messages Entrants</h1>
          <p className="font-body text-[#6E6E6E] text-sm">Gérez les demandes de contact, candidatures et opportunités de partenariat.</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-[#D9D9D9] rounded-none overflow-hidden mt-8">
        <Table>
          <TableHeader className="bg-[#F7F6F2]">
            <TableRow className="border-b border-[#D9D9D9]">
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Expéditeur</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A] w-[350px]">Objet / Type</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Date</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Statut</TableHead>
              <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest text-[#0A0A0A]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoMessages.map((msg) => (
              <TableRow key={msg.id} className={cn("border-b border-[#F0F0F0] hover:bg-[#F7F6F2]/50 transition-colors", msg.status === 'new' && "bg-[#F7F6F2]/30")}>
                <TableCell>
                  <div className="flex items-center gap-3">
                     <div className={cn("w-2 h-2 rounded-full", msg.status === 'new' ? "bg-[#A33A2B]" : "bg-transparent")} />
                     <div className="flex flex-col">
                        <span className="font-body font-bold text-[#0A0A0A]">{msg.name}</span>
                        <span className="text-[10px] text-[#6E6E6E] font-body">{msg.email}</span>
                     </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                     <p className={cn("font-body text-sm text-[#0A0A0A] truncate", msg.status === 'new' && "font-bold")}>{msg.subject}</p>
                     <Badge variant="outline" className="w-fit font-body text-[8px] uppercase tracking-widest font-bold border-[#D9D9D9] py-0">
                        {msg.type}
                     </Badge>
                  </div>
                </TableCell>
                <TableCell className="font-body text-xs text-[#6E6E6E]" suppressHydrationWarning>
                   {new Date(msg.date).toLocaleDateString()} {new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </TableCell>
                <TableCell>
                   {msg.status === 'new' && <div className="flex items-center gap-1.5 text-[#A33A2B] font-body text-[10px] font-bold uppercase tracking-widest"><AlertCircle className="w-3.5 h-3.5" /> Nouveau</div>}
                   {msg.status === 'read' && <div className="flex items-center gap-1.5 text-[#6E6E6E] font-body text-[10px] font-bold uppercase tracking-widest"><Clock className="w-3.5 h-3.5" /> Lu</div>}
                   {msg.status === 'replied' && <div className="flex items-center gap-1.5 text-green-600 font-body text-[10px] font-bold uppercase tracking-widest"><CheckCircle2 className="w-3.5 h-3.5" /> Répondu</div>}
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
                           <Eye className="w-4 h-4 mr-2" /> Lire le message
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-sm cursor-pointer hover:bg-[#F7F6F2]">
                           <Mail className="w-4 h-4 mr-2" /> Répondre par email
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

// Utility to handle conditional classes in standard way if not imported
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
