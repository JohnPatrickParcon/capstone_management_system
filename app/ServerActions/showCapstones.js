"use server"

import { supabase } from "@/lib/initSupabase";

export const showCapstones = async () => {
    const { data, error } = await supabase
      .from('capstones')
      .select('title, status')
    return data
}