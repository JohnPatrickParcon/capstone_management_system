"use server"

import { supabase } from "@/lib/initSupabase";

//export async function checkSession() {
//        const { data: {session}, error } = await supabase.auth.getSession();
//        return session;
//}

export const checkSession = async () => {
        const { data: {session}, error } = await supabase.auth.getSession();
        return session;
}
