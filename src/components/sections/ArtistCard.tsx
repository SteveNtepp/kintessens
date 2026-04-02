import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn, artistCategoryLabel } from '@/lib/utils';
import type { Artist } from '@/lib/types';

const statusLabels: Record<string, string> = {
  emerging: 'Émergent',
  guest: 'Invité',
  resident: 'Résident',
  artistic_council: 'Conseil Artistique',
};

interface ArtistCardProps {
  artist: Artist;
  variant?: 'default' | 'portrait' | 'compact';
  className?: string;
}

export function ArtistCard({ artist, variant = 'default', className }: ArtistCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/artistes/${artist.slug}`}
        className={cn(
          'group flex items-center gap-4 p-4 border border-[#D9D9D9] hover:border-[#0A0A0A] transition-all duration-300',
          className
        )}
      >
        <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden bg-[#1E1E1E]">
          {artist.photo && (
            <Image src={artist.photo} alt={artist.name} fill className="object-cover" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-body font-semibold text-sm text-[#0A0A0A] truncate">{artist.name}</h3>
          <p className="font-body text-xs text-[#6E6E6E]">{artistCategoryLabel[artist.category]}</p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#D9D9D9] group-hover:text-[#0A0A0A] transition-colors flex-shrink-0" />
      </Link>
    );
  }

  if (variant === 'portrait') {
    return (
      <Link
        href={`/artistes/${artist.slug}`}
        className={cn('group block', className)}
      >
        {/* Portrait image */}
        <div className="relative aspect-portrait overflow-hidden bg-[#1E1E1E] mb-4">
          {artist.photo && (
            <Image
              src={artist.photo}
              alt={artist.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {artist.status === 'artistic_council' && (
            <div className="absolute top-3 left-3 bg-[#C8A96B] px-2 py-1">
              <span className="font-body text-[9px] font-bold tracking-widest uppercase text-white">
                Conseil Artistique
              </span>
            </div>
          )}
        </div>
        <h3 className="font-heading text-xl font-bold text-[#0A0A0A] group-hover:text-[#1E1E1E] transition-colors">
          {artist.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="font-body text-xs text-[#6E6E6E] uppercase tracking-wider">
            {artistCategoryLabel[artist.category]}
          </span>
          <span className="font-body text-xs text-[#6E6E6E]">{artist.country}</span>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/artistes/${artist.slug}`}
      className={cn(
        'group block bg-white border border-[#D9D9D9] overflow-hidden hover:border-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1E1E1E]">
        {artist.photo && (
          <Image
            src={artist.photo}
            alt={artist.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {artist.status === 'artistic_council' && (
          <div className="absolute top-4 left-4 bg-[#C8A96B] px-3 py-1">
            <span className="font-body text-[10px] font-bold tracking-widest uppercase text-white">
              Conseil Artistique
            </span>
          </div>
        )}
        <div className="absolute inset-0 overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-1">{artist.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="font-body text-xs text-[#6E6E6E] uppercase tracking-wider">
            {artistCategoryLabel[artist.category]}
          </span>
          <span className="font-body text-xs text-[#6E6E6E]">{artist.country}</span>
        </div>
        <p className="font-body text-sm text-[#6E6E6E] leading-relaxed line-clamp-2">
          {artist.bio_short}
        </p>
      </div>
    </Link>
  );
}

export default ArtistCard;
