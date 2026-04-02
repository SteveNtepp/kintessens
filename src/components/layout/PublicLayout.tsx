import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface PublicLayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export function PublicLayout({ children, transparentHeader = false }: PublicLayoutProps) {
  return (
    <>
      <Header transparent={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

export default PublicLayout;
