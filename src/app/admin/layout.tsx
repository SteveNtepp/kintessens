'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '@/components/layout/Logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  PlaySquare, 
  Handshake, 
  Newspaper, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';

const navigation = [
  { name: 'Tableau de bord', href: '/admin', icon: LayoutDashboard },
  { name: 'Événements', href: '/admin/evenements', icon: Calendar },
  { name: 'Artistes', href: '/admin/artistes', icon: Users },
  { name: 'Médiathèque', href: '/admin/medias', icon: PlaySquare },
  { name: 'Partenaires', href: '/admin/partenaires', icon: Handshake },
  { name: 'Espace Presse', href: '/admin/presse', icon: Newspaper },
];

const secondaryNav = [
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Paramètres', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-hide sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') return children;

  return (
    <div className="flex h-screen bg-[#F7F6F2] overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-[#0A0A0A] text-white transition-all duration-300 lg:static lg:translate-x-0",
          !isSidebarOpen && "-translate-x-full lg:w-20"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center h-20 px-6 border-b border-white/5">
            <div className={cn("transition-all duration-300", !isSidebarOpen && "lg:opacity-0")}>
               <Logo color="light" size="sm" noLink />
            </div>
            {!isSidebarOpen && (
               <div className="absolute inset-x-0 top-0 h-20 flex items-center justify-center opacity-0 lg:opacity-100 pointer-events-none">
                  <div className="w-8 h-8 flex items-center justify-center font-heading text-xl font-bold border border-white">K</div>
               </div>
            )}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="ml-auto p-2 text-[#6E6E6E] hover:text-white transition-colors lg:hidden"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-8">
              <div>
                <p className={cn("px-2 text-[10px] font-bold uppercase tracking-widest text-[#6E6E6E] mb-4", !isSidebarOpen && "lg:hidden")}>Principal</p>
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-all group",
                        pathname === item.href 
                          ? "bg-white/10 text-white" 
                          : "text-[#6E6E6E] hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5 shrink-0", pathname === item.href ? "text-white" : "text-[#6E6E6E] group-hover:text-white")} />
                      <span className={cn("transition-all", !isSidebarOpen && "lg:hidden")}>{item.name}</span>
                      {pathname === item.href && isSidebarOpen && <ChevronRight className="ml-auto w-4 h-4 text-white/40" />}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className={cn("px-2 text-[10px] font-bold uppercase tracking-widest text-[#6E6E6E] mb-4", !isSidebarOpen && "lg:hidden")}>Système</p>
                <div className="space-y-1">
                  {secondaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-all group",
                        pathname === item.href 
                          ? "bg-white/10 text-white" 
                          : "text-[#6E6E6E] hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5 shrink-0", pathname === item.href ? "text-white" : "text-[#6E6E6E] group-hover:text-white")} />
                      <span className={cn("transition-all", !isSidebarOpen && "lg:hidden")}>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </ScrollArea>

          {/* Sidebar Footer */}
          <div className="p-4 bg-white/5 mt-auto">
             <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-body font-medium text-[#6E6E6E] hover:bg-red-500/10 hover:text-red-400 transition-all group"
             >
                <LogOut className="w-5 h-5 group-hover:text-red-400" />
                <span className={cn(!isSidebarOpen && "lg:hidden")}>Déconnexion</span>
             </button>
          </div>
        </div>
      </aside>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-[#D9D9D9] flex items-center justify-between px-6 lg:px-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-[#0A0A0A] hover:bg-[#F7F6F2] rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 p-2 bg-[#F7F6F2] rounded-lg min-w-80 h-10 px-3">
              <Search className="w-4 h-4 text-[#6E6E6E]" />
              <input 
                type="text" 
                placeholder="Rechercher partout..." 
                className="bg-transparent text-sm font-body focus:outline-none w-full" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="/" target="_blank" className="hidden sm:flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest text-[#6E6E6E] hover:text-[#0A0A0A] transition-colors">
                Voir le site
                <ExternalLink className="w-3 h-3" />
             </Link>
             <Separator orientation="vertical" className="h-8 mx-2" />
             <div className="relative">
                <button className="p-2 text-[#6E6E6E] hover:text-[#0A0A0A] hover:bg-[#F7F6F2] rounded-full transition-all relative">
                   <Bell className="w-5 h-5" />
                   <span className="absolute top-2 right-2 w-2 h-2 bg-[#A33A2B] rounded-full border-2 border-white"></span>
                </button>
             </div>
             <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-bold font-body leading-none text-[#0A0A0A]">Admin</p>
                   <p className="text-[10px] text-[#6E6E6E] uppercase tracking-widest font-bold">Manager</p>
                </div>
                <div className="w-10 h-10 bg-[#0A0A0A] text-white flex items-center justify-center font-heading font-bold rounded-lg shrink-0 overfow-hidden">
                   K
                </div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#F7F6F2] p-6 lg:p-10">
          <div className="max-w-[1280px] mx-auto">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}
