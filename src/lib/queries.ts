import { supabase } from './supabase';
import { 
  Artist, 
  Event, 
  MediaItem, 
  Partner, 
  PressAsset 
} from './types';
import { 
  DEMO_ARTISTS, 
  DEMO_EVENTS, 
  DEMO_MEDIA, 
  DEMO_PARTNERS, 
  DEMO_PRESS 
} from './data';

const IS_SUPABASE_CONFIGURED = !!process.env.NEXT_PUBLIC_SUPABASE_URL;

// --- ARTISTS ---
export async function getArtists(): Promise<Artist[]> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_ARTISTS;
  
  const { data, error } = await supabase
    .from('artists')
    .select('*')
    .order('name');
    
  if (error) {
    console.error('Error fetching artists:', error);
    return DEMO_ARTISTS;
  }
  return data as Artist[];
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_ARTISTS.find(a => a.slug === slug) || null;
  
  const { data, error } = await supabase
    .from('artists')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) return null;
  return data as Artist;
}

// --- EVENTS ---
export async function getEvents(): Promise<Event[]> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_EVENTS;
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) {
    console.error('Error fetching events:', error);
    return DEMO_EVENTS;
  }
  return data as Event[];
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_EVENTS.find(e => e.slug === slug) || null;
  
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .single();
    
  if (error) return null;
  return data as Event;
}

// --- MEDIA ---
export async function getMediaItems(): Promise<MediaItem[]> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_MEDIA;
  
  const { data, error } = await supabase
    .from('media_items')
    .select('*')
    .order('published_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching media:', error);
    return DEMO_MEDIA;
  }
  return data as MediaItem[];
}

// --- PARTNERS ---
export async function getPartners(): Promise<Partner[]> {
  if (!IS_SUPABASE_CONFIGURED) return DEMO_PARTNERS;
  
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('order_rank');
    
  if (error) return DEMO_PARTNERS;
  return data as Partner[];
}
