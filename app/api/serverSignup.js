"use server"

import { supabase } from "@/lib/initSupabase"

export async function serverSignup({email, password}) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    
  } catch (error) {
    return console.log(error);
  }
  
}
