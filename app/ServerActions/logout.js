"use server"

import { supabase } from "@/lib/initSupabase"

export async function logout() {
    const { error } = await supabase.auth.signOut()
  }
  