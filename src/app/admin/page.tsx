'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  PlaySquare, 
  Handshake, 
  TrendingUp, 
  Eye, 
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { DEMO_DASHBOARD_STATS, DEMO_EVENTS, DEMO_ARTISTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

// Demo data for charts
const visitorData = [
  { name: 'Lun', value: 4000 },
  { name: 'Mar', value: 3000 },
  { name: 'Mer', value: 2000 },
  { name: 'Jeu', value: 2780 },
  { name: 'Ven', value: 1890 },
  { name: 'Sam', value: 2390 },
  { name: 'Dim', value: 3490 },
];

const categoryData = [
  { name: 'LIVE', value: 400, color: '#A33A2B' },
  { name: 'FESTIVAL', value: 300, color: '#C8A96B' },
  { name: 'SOLIDARITY', value: 200, color: '#2E6B57' },
];

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Visites totales', value: '45.2k', change: '+12.5%', trendingUp: true, icon: Eye },
    { label: 'Événements', value: DEMO_EVENTS.length, change: '+2', trendingUp: true, icon: Calendar },
    { label: 'Artistes', value: DEMO_ARTISTS.length, change: '+4', trendingUp: true, icon: Users },
    { label: 'Partenaires', value: '12', change: '-1', trendingUp: false, icon: Handshake },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Header */}
      <div>
         <h1 className="font-heading text-4xl font-bold text-[#0A0A0A] mb-2">Tableau de bord</h1>
         <p className="font-body text-[#6E6E6E] text-sm">Bienvenue dans l&apos;espace de gestion KINTESSENS.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-[#D9D9D9] shadow-sm hover:shadow-md transition-shadow bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E6E6E]">
                {stat.label}
              </CardTitle>
              <div className="p-2 bg-[#F7F6F2] rounded-lg">
                 <stat.icon className="h-4 w-4 text-[#0A0A0A]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-heading font-bold text-[#0A0A0A]">{stat.value}</div>
              <p className="text-xs font-body mt-1 flex items-center gap-1">
                {stat.trendingUp ? (
                  <span className="text-green-600 flex items-center">
                    <ArrowUpRight className="w-3 h-3" /> {stat.change}
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <ArrowDownRight className="w-3 h-3" /> {stat.change}
                  </span>
                )}
                <span className="text-[#D9D9D9] ml-1">vs mois dernier</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Main Chart */}
         <Card className="lg:col-span-8 border-[#D9D9D9] shadow-sm bg-white">
            <CardHeader>
               <CardTitle className="font-heading text-xl">Activité des visites</CardTitle>
               <CardDescription className="text-xs py-1">Évolution du trafic sur les 7 derniers jours</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitorData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                     <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fill: '#6E6E6E'}} 
                        dy={10}
                     />
                     <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fill: '#6E6E6E'}} 
                     />
                     <Tooltip 
                        cursor={{fill: '#F7F6F2'}} 
                        contentStyle={{borderRadius: '8px', border: '1px solid #D9D9D9', fontSize: '12px'}}
                     />
                     <Bar dataKey="value" fill="#0A0A0A" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
               </ResponsiveContainer>
            </CardContent>
         </Card>

         {/* Pie Chart */}
         <Card className="lg:col-span-4 border-[#D9D9D9] shadow-sm bg-white">
            <CardHeader>
               <CardTitle className="font-heading text-xl">Répartition formats</CardTitle>
               <CardDescription className="text-xs py-1">Contenus par pilier de marque</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] flex flex-col items-center justify-center">
               <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                     <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {categoryData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip />
                  </PieChart>
               </ResponsiveContainer>
               <div className="w-full space-y-2 mt-4 px-4">
                  {categoryData.map((cat, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                           <span className="text-xs font-body font-medium text-[#0A0A0A]">{cat.name}</span>
                        </div>
                        <span className="text-xs font-body text-[#6E6E6E]">{cat.value} items</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>

      {/* Recent Activity Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Upcoming Events */}
         <Card className="border-[#D9D9D9] shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
               <div>
                  <CardTitle className="font-heading text-xl">Événements récents</CardTitle>
                  <CardDescription className="text-xs py-1">Les dernières sessions publiées</CardDescription>
               </div>
               <Badge variant="outline" className="font-body text-[10px] uppercase">Voir tout</Badge>
            </CardHeader>
            <CardContent>
               <div className="space-y-6">
                  {DEMO_EVENTS.slice(0, 4).map((event, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-[#F0F0F0] last:border-0 pb-4 last:pb-0">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#F7F6F2] flex items-center justify-center rounded overflow-hidden">
                             <Calendar className="w-5 h-5 text-[#6E6E6E]" />
                          </div>
                          <div>
                             <p className="text-sm font-bold font-body text-[#0A0A0A] group-hover:underline">{event.title}</p>
                             <p className="text-xs text-[#6E6E6E] font-body">{formatDate(event.date)} — {event.city}</p>
                          </div>
                       </div>
                       <Badge variant="secondary" className="text-[10px] uppercase tracking-widest">{event.status}</Badge>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         {/* New Messages */}
         <Card className="border-[#D9D9D9] shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between">
               <div>
                  <CardTitle className="font-heading text-xl">Derniers messages</CardTitle>
                  <CardDescription className="text-xs py-1">Flux de contact entrant</CardDescription>
               </div>
               <div className="relative">
                  <MessageSquare className="w-5 h-5 text-[#6E6E6E]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#A33A2B] rounded-full"></span>
               </div>
            </CardHeader>
            <CardContent>
               <div className="space-y-6">
                  {[
                    { name: 'Oumar Sy', subject: 'Candidature live 2025', time: 'il y a 2h', type: 'Artiste' },
                    { name: 'Fatou Diop', subject: 'Partenariat Festival', time: 'il y a 5h', type: 'Partenaire' },
                    { name: 'Moussa Ndiaye', subject: 'Question billetterie', time: 'il y a 1j', type: 'Général' },
                    { name: 'Sarah Koné', subject: 'Demande Interview', time: 'il y a 2j', type: 'Presse' },
                  ].map((msg, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-[#F0F0F0] last:border-0 pb-4 last:pb-0">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center rounded font-heading font-medium text-xs">
                             {msg.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                             <p className="text-sm font-bold font-body text-[#0A0A0A]">{msg.subject}</p>
                             <p className="text-xs text-[#6E6E6E] font-body">{msg.name} — {msg.time}</p>
                          </div>
                       </div>
                       <p className="text-[10px] font-bold text-[#6E6E6E] uppercase tracking-widest">{msg.type}</p>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
