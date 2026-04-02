import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { cn, formatDate, eventTypeColor, eventTypeLabel } from '@/lib/utils';
import type { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

export function EventCard({ event, variant = 'default', className }: EventCardProps) {
  const accentColor = eventTypeColor[event.type];
  const typeLabel = eventTypeLabel[event.type];

  if (variant === 'compact') {
    return (
      <Link
        href={`/evenements/${event.slug}`}
        className={cn(
          'group flex items-center gap-4 p-4 border border-[#D9D9D9] hover:border-[#0A0A0A] transition-all duration-300',
          className
        )}
      >
        {/* Date block */}
        <div
          className="flex-shrink-0 w-14 h-14 flex flex-col items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <span className="text-white font-body text-xs font-medium uppercase">
            {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
          </span>
          <span className="text-white font-heading text-xl font-bold leading-none">
            {new Date(event.date).getDate()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-body text-[10px] font-medium tracking-widest uppercase mb-1" style={{ color: accentColor }}>
            {typeLabel}
          </p>
          <h3 className="font-body font-medium text-sm text-[#0A0A0A] truncate">{event.title}</h3>
          <p className="font-body text-xs text-[#6E6E6E] mt-1">{event.city}, {event.country}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-[#6E6E6E] group-hover:text-[#0A0A0A] transition-colors flex-shrink-0" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/evenements/${event.slug}`}
        className={cn(
          'group relative block overflow-hidden aspect-[16/9] md:aspect-[21/9]',
          className
        )}
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-[#1E1E1E]">
          {event.cover_image && (
            <Image
              src={event.cover_image}
              alt={event.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
          )}
          <div className="absolute inset-0 overlay-dark" />
        </div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div
            className="inline-flex w-fit px-3 py-1 mb-4"
            style={{ backgroundColor: accentColor }}
          >
            <span className="font-body text-[10px] font-medium tracking-widest uppercase text-white">
              {typeLabel}
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {event.title}
          </h2>
          <div className="flex items-center gap-6 text-white/70">
            <span className="flex items-center gap-2 font-body text-sm">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-2 font-body text-sm">
              <MapPin className="w-4 h-4" />
              {event.city}, {event.country}
            </span>
          </div>
          {event.cta_label && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A0A0A] font-body text-sm font-medium group-hover:bg-[#F7F6F2] transition-colors">
                {event.cta_label}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          )}
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/evenements/${event.slug}`}
      className={cn(
        'group block bg-white border border-[#D9D9D9] overflow-hidden hover:border-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-cinema overflow-hidden bg-[#1E1E1E]">
        {event.cover_image && (
          <Image
            src={event.cover_image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {/* Type badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1"
          style={{ backgroundColor: accentColor }}
        >
          <span className="font-body text-[10px] font-medium tracking-widest uppercase text-white">
            {typeLabel}
          </span>
        </div>
        {/* Status badge */}
        {event.status === 'upcoming' && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white">
            <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-[#0A0A0A]">
              À venir
            </span>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-[#0A0A0A] mb-3 leading-tight group-hover:text-[#1E1E1E] transition-colors">
          {event.title}
        </h3>
        <p className="font-body text-sm text-[#6E6E6E] leading-relaxed mb-4 line-clamp-2">
          {event.description_short}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 font-body text-xs text-[#6E6E6E]">
              <Calendar className="w-3 h-3" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-2 font-body text-xs text-[#6E6E6E]">
              <MapPin className="w-3 h-3" />
              {event.city}, {event.country}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-[#D9D9D9] group-hover:text-[#0A0A0A] transition-colors" />
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
