import { createClient } from '@supabase/supabase-js';
import { 
  DEMO_ARTISTS, 
  DEMO_EVENTS, 
  DEMO_MEDIA, 
  DEMO_PARTNERS, 
  DEMO_PRESS 
} from '../src/lib/data';

// Instructions: Run this script with node or through a temporary API route to seed your Supabase instance.
// Ensure SUPABASE_SERVICE_ROLE_KEY is set in your environment.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials for seeding.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seed() {
  console.log('--- Starting Seeding ---');

  // 1. Seed Artists
  console.log('Seeding Artists...');
  const { error: artistsError } = await supabase.from('artists').upsert(
    DEMO_ARTISTS.map(a => ({
      name: a.name,
      slug: a.slug,
      category: a.category,
      status: a.status,
      city: a.city,
      country: a.country,
      bio_short: a.bio_short,
      bio_long: a.bio_long,
      photo: a.photo,
      instagram: a.instagram,
      youtube: a.youtube,
      twitter: a.twitter,
      website: a.website,
      featured: a.featured,
      event_ids: a.event_ids,
      meta_title: a.meta_title,
      meta_description: a.meta_description
    }))
  );
  if (artistsError) console.error('Artists error:', artistsError);

  // 2. Seed Events
  console.log('Seeding Events...');
  const { error: eventsError } = await supabase.from('events').upsert(
    DEMO_EVENTS.map(e => ({
      title: e.title,
      slug: e.slug,
      type: e.type,
      status: e.status,
      date: e.date,
      time: e.time,
      location: e.location,
      city: e.city,
      country: e.country,
      description_short: e.description_short,
      description_long: e.description_long,
      cover_image: e.cover_image,
      video_teaser: e.video_teaser,
      gallery: e.gallery,
      lineup: e.lineup,
      cta_label: e.cta_label,
      cta_url: e.cta_url,
      featured: e.featured,
      meta_title: e.meta_title,
      meta_description: e.meta_description
    }))
  );
  if (eventsError) console.error('Events error:', eventsError);

  // 3. Seed Partners
  console.log('Seeding Partners...');
  const { error: partnersError } = await supabase.from('partners').upsert(
    DEMO_PARTNERS.map((p, i) => ({
      name: p.name,
      type: p.type,
      website: p.website,
      order_rank: i
    }))
  );
  if (partnersError) console.error('Partners error:', partnersError);

  // 4. Seed Press
  console.log('Seeding Press...');
  const { error: pressError } = await supabase.from('press_items').upsert(
    DEMO_PRESS.map(p => ({
      title: p.title,
      description: p.description,
      type: p.type,
      file_url: p.file_url,
      published_at: p.published_at
    }))
  );
  if (pressError) console.error('Press error:', pressError);

  console.log('--- Seeding Completed ---');
}

seed();
