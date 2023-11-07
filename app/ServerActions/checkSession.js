"use server"

import { supabase } from "@/lib/initSupabase";

export const checkSession = async () => {
        const { data: {session}, error } = await supabase.auth.getSession();
        return session;
}
