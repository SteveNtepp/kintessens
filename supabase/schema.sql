-- KINTESSENS Database Schema

-- 1. ARTISTS
CREATE TABLE IF NOT EXISTS public.artists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL, -- music, poetry, visual_arts, performance, audiovisual
    status TEXT NOT NULL DEFAULT 'guest', -- resident, artistic_council, guest, emerging
    city TEXT,
    country TEXT NOT NULL,
    bio_short TEXT NOT NULL,
    bio_long TEXT,
    photo TEXT,
    instagram TEXT,
    youtube TEXT,
    twitter TEXT,
    website TEXT,
    featured BOOLEAN DEFAULT false,
    event_ids UUID[] DEFAULT '{}',
    meta_title TEXT,
    meta_description TEXT
);

-- 2. EVENTS
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL, -- live, festival, solidarity
    status TEXT NOT NULL DEFAULT 'upcoming', -- upcoming, past, cancelled
    date DATE NOT NULL,
    time TEXT,
    location TEXT NOT NULL,
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    description_short TEXT NOT NULL,
    description_long TEXT,
    cover_image TEXT,
    video_teaser TEXT,
    gallery TEXT[] DEFAULT '{}',
    lineup TEXT[] DEFAULT '{}',
    cta_label TEXT,
    cta_url TEXT,
    featured BOOLEAN DEFAULT false,
    meta_title TEXT,
    meta_description TEXT
);

-- 3. MEDIA
CREATE TABLE IF NOT EXISTS public.media_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    type TEXT NOT NULL, -- video_live, short_clip, documentary, backstage, interview, photo_gallery
    description TEXT,
    thumbnail TEXT,
    video_url TEXT,
    artist_id UUID REFERENCES public.artists(id) ON DELETE SET NULL,
    event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    tags TEXT[] DEFAULT '{}',
    featured BOOLEAN DEFAULT false,
    meta_title TEXT,
    meta_description TEXT
);

-- 4. PARTNERS
CREATE TABLE IF NOT EXISTS public.partners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    logo TEXT,
    type TEXT NOT NULL, -- sponsor, institution, media, technical
    website TEXT,
    order_rank INTEGER DEFAULT 0
);

-- 5. PRESS
CREATE TABLE IF NOT EXISTS public.press_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- dossier, communique, logo, photo_hd, biography, press_review
    file_url TEXT NOT NULL,
    published_at DATE DEFAULT CURRENT_DATE
);

-- 6. MESSAGES (Contact submissions)
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'general', -- general, partnership, artist, press
    is_read BOOLEAN DEFAULT false,
    replied_at TIMESTAMP WITH TIME ZONE
);

-- 7. NEWSLETTER
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'active' -- active, unsubscribed
);

-- RLS POLICIES --

-- Enable RLS on all tables
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.press_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 1. Public can read non-sensitive tables
CREATE POLICY "Public can view artists" ON public.artists FOR SELECT USING (true);
CREATE POLICY "Public can view events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Public can view media_items" ON public.media_items FOR SELECT USING (true);
CREATE POLICY "Public can view partners" ON public.partners FOR SELECT USING (true);
CREATE POLICY "Public can view press_items" ON public.press_items FOR SELECT USING (true);

-- 2. Public can insert messages and newsletter subs
CREATE POLICY "Public can submit messages" ON public.messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- 3. Admins (Authenticated) can do EVERYTHING
CREATE POLICY "Admins can manage artists" ON public.artists ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage events" ON public.events ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage media_items" ON public.media_items ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage partners" ON public.partners ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage press_items" ON public.press_items ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage messages" ON public.messages ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage newsletter_subscribers" ON public.newsletter_subscribers ALL TO authenticated USING (true);

-- FUNCTIONS for updating updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_artists_updated_at BEFORE UPDATE ON public.artists FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_media_items_updated_at BEFORE UPDATE ON public.media_items FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
