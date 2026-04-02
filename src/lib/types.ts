// Core Types for KINTESSENS Platform

export type EventStatus = 'upcoming' | 'ongoing' | 'past';
export type EventType = 'live' | 'festival' | 'solidarity';
export type ArtistStatus = 'emerging' | 'guest' | 'resident' | 'artistic_council';
export type ArtistCategory = 'music' | 'poetry' | 'visual_arts' | 'performance' | 'audiovisual' | 'other';
export type MediaType = 'video_live' | 'short_clip' | 'documentary' | 'backstage' | 'interview' | 'photo_gallery';
export type PartnerType = 'sponsor' | 'institution' | 'media' | 'brand' | 'technical';
export type PartnershipLevel = 'platinum' | 'gold' | 'silver' | 'bronze' | 'institutional';
export type ContactRequestType = 'general' | 'partnership' | 'sponsorship' | 'artist' | 'press' | 'collaboration';
export type ContactRequestStatus = 'new' | 'in_progress' | 'treated';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface Event {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  type: EventType;
  status: EventStatus;
  content_status: ContentStatus;
  date: string;
  time?: string;
  location: string;
  city: string;
  country: string;
  description_short: string;
  description_long?: string;
  cover_image?: string;
  gallery?: string[];
  video_teaser?: string;
  lineup?: string[];
  partner_ids?: string[];
  cta_label?: string;
  cta_url?: string;
  featured: boolean;
  flagship: boolean;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

export interface Artist {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  category: ArtistCategory;
  status: ArtistStatus;
  content_status: ContentStatus;
  photo?: string;
  bio_short: string;
  bio_long?: string;
  city?: string;
  country: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  spotify?: string;
  website?: string;
  video_ids?: string[];
  event_ids?: string[];
  featured: boolean;
  meta_title?: string;
  meta_description?: string;
}

export interface MediaItem {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  type: MediaType;
  content_status: ContentStatus;
  thumbnail?: string;
  video_source?: string; // YouTube/Vimeo URL or upload path
  description?: string;
  tags?: string[];
  artist_id?: string;
  event_id?: string;
  published_at?: string;
  featured: boolean;
  meta_title?: string;
  meta_description?: string;
}

export interface Partner {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  type: PartnerType;
  level: PartnershipLevel;
  logo?: string;
  description?: string;
  website?: string;
  featured: boolean;
  homepage: boolean;
}

export interface PressAsset {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  type: 'communique' | 'dossier' | 'photo_hd' | 'logo' | 'biography' | 'press_review';
  file_url?: string;
  description?: string;
  public_access: boolean;
  published_at?: string;
}

export interface ContactRequest {
  id: string;
  created_at: string;
  updated_at: string;
  type: ContactRequestType;
  status: ContactRequestStatus;
  name: string;
  email: string;
  organization?: string;
  subject?: string;
  message: string;
  tags?: string[];
  notes?: string;
}

export interface NewsletterSubscriber {
  id: string;
  created_at: string;
  email: string;
  name?: string;
  confirmed: boolean;
  segment?: string;
}

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
  type: 'string' | 'json' | 'boolean' | 'number';
}

// Demo data types for frontend
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
