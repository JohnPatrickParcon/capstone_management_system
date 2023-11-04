"use server"

import { supabase } from "@/lib/initSupabase";

export async function serverLogin({email, password}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
          
    } catch (error) {
        console.log(error);
    }

}