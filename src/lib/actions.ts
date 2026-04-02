'use server';

import { supabase } from './supabase';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
  type: z.string().default('general'),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    type: formData.get('type') || 'general',
  };

  const validated = contactSchema.safeParse(data);
  if (!validated.success) {
    return { error: 'Données invalides' };
  }

  const { error } = await supabase
    .from('messages')
    .insert([validated.data]);

  if (error) {
    console.error('Supabase error:', error);
    return { error: 'Erreur lors de l\'envoi du message' };
  }

  return { success: true };
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email');

  const validated = newsletterSchema.safeParse({ email });
  if (!validated.success) {
    return { error: 'Email invalide' };
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email: validated.data.email }]);

  if (error && error.code !== '23505') { // Ignore unique constraint error
    console.error('Supabase error:', error);
    return { error: 'Erreur lors de l\'inscription' };
  }

  return { success: true };
}
