import { supabase } from "@/lib/initSupabase";

export const showCapstones = async () => {
    const { data, error } = await supabase
      .from('countries')
      .select('name, continent');
    return data
}