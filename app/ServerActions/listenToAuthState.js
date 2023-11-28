import { supabase } from "@/lib/initSupabase";

export const authChange = 
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
    })
