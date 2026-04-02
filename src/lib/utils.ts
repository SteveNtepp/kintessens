import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions, locale = 'fr-FR'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, options || {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(dateString: string, locale = 'fr-FR'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
  });
}

export function formatYear(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}

export function getYouTubeId(url: string): string | null {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function getVimeoId(url: string): string | null {
  const regex = /(?:vimeo\.com\/)([0-9]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '…';
}

export const eventTypeLabel: Record<string, string> = {
  live: 'KINTESSENS LIVE',
  festival: 'KINTESSENS FESTIVAL',
  solidarity: 'KINTESSENS SOLIDARITY',
};

export const eventTypeColor: Record<string, string> = {
  live: '#A33A2B',
  festival: '#C8A96B',
  solidarity: '#2E6B57',
};

export const mediaTypeLabel: Record<string, string> = {
  video_live: 'Live',
  short_clip: 'Extrait',
  documentary: 'Documentaire',
  backstage: 'Backstage',
  interview: 'Interview',
  photo_gallery: 'Galerie',
};

export const artistCategoryLabel: Record<string, string> = {
  music: 'Musique',
  poetry: 'Poésie',
  visual_arts: 'Arts visuels',
  performance: 'Performance',
  audiovisual: 'Audiovisuel',
  other: 'Autre',
};
