import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers'
//import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const cookieStore = cookies();
export const supabase = createServerClient(
    supabaseUrl, 
    supabaseAnonKey,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name, options) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
);