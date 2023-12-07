import { getCookie, setCookie } from "cookies-next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function createSupabaseReqResClient(req, res) {
    return createServerClient(
        supabaseUrl, 
        supabaseAnonKey,
        {
          cookies: {
            get(name) {
              return getCookie(name, {req, res})
            },
            set(name, value, options) {
              setCookie(name, value, {req, res, ...options})
            },
            remove(name, options) {
                setCookie(name, '', {req, res, ...options})
            },
          },
        }
    );
}