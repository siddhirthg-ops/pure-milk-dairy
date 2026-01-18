import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// These will come from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface FormSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiry_type: 'order' | 'franchise';
  created_at?: string;
}
