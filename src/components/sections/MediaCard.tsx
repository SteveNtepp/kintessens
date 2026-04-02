import Link from 'next/link';
import Image from 'next/image';
import { Play, ArrowUpRight } from 'lucide-react';
import { cn, mediaTypeLabel } from '@/lib/utils';
import type { MediaItem } from '@/lib/types';

interface MediaCardProps {
  media: MediaItem;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export function MediaCard({ media, variant = 'default', className }: MediaCardProps) {
  const isVideo = media.type !== 'photo_gallery';

  if (variant === 'compact') {
    return (
      <Link
        href={`/medias/${media.slug}`}
        className={cn(
          'group flex items-center gap-4 p-3 hover:bg-[#F7F6F2] transition-colors',
          className
        )}
      >
        <div className="relative w-16 h-10 flex-shrink-0 overflow-hidden bg-[#1E1E1E]">
          {media.thumbnail && (
            <Image src={media.thumbnail} alt={media.title} fill className="object-cover" />
          )}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Play className="w-3 h-3 text-white fill-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body text-[10px] text-[#6E6E6E] uppercase tracking-wider mb-0.5">
            {mediaTypeLabel[media.type]}
          </p>
          <h3 className="font-body text-sm font-medium text-[#0A0A0A] truncate">{media.title}</h3>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#D9D9D9] group-hover:text-[#0A0A0A] transition-colors flex-shrink-0" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/medias/${media.slug}`}
        className={cn(
          'group relative block aspect-cinema overflow-hidden bg-[#1E1E1E]',
          className
        )}
      >
        {media.thumbnail && (
          <Image
            src={media.thumbnail}
            alt={media.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
          />
        )}
        <div className="absolute inset-0 overlay-dark" />
        {/* Play button */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-white/60 group-hover:border-white group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        )}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="font-body text-[10px] text-white/60 uppercase tracking-wider mb-2">
            {mediaTypeLabel[media.type]}
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">{media.title}</h3>
        </div>
      </Link>
    );
  }

  // Default
  return (
    <Link
      href={`/medias/${media.slug}`}
      className={cn(
        'group block bg-white border border-[#D9D9D9] overflow-hidden hover:border-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className="relative aspect-cinema overflow-hidden bg-[#1E1E1E]">
        {media.thumbnail && (
          <Image
            src={media.thumbnail}
            alt={media.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center bg-white/90 group-hover:bg-white transition-colors">
              <Play className="w-5 h-5 text-[#0A0A0A] fill-[#0A0A0A] ml-0.5" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-[#0A0A0A] px-2 py-1">
          <span className="font-body text-[9px] tracking-widest uppercase text-white">
            {mediaTypeLabel[media.type]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-[#0A0A0A] mb-2 leading-snug">
          {media.title}
        </h3>
        {media.description && (
          <p className="font-body text-sm text-[#6E6E6E] line-clamp-2 leading-relaxed">
            {media.description}
          </p>
        )}
      </div>
    </Link>
  );
}

export default MediaCard;
