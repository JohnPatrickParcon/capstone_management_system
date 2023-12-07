import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const cookieStore = cookies();
export const createSupabaseServerClient = (serverComponent = false) => {
  return createServerClient(
    supabaseUrl, 
    supabaseAnonKey,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          if(serverComponent) return;
          cookieStore.set({ name, value, ...options })
        },
        remove(name, options) {
          if(serverComponent) return
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  );
}

export const createSupabaseServerComponentClient = () => {
  return createSupabaseServerClient(true)
}