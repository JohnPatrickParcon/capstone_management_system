"use server"

import { supabase } from "../../lib/initSupabase"

export const checkSession = async () => {
    const { data: {session}, error } = await supabase.auth.getSession();
    return session;
}

export async function signup({email, name, password, userType}) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          usertype: userType,
          name: name,
        },
      },
    })
}

export async function login({email, password}) {
  const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
  })
}

export async function logout() {
    const { error } = await supabase.auth.signOut()
}