"use client"

import { supabase } from "@/lib/initSupabase"
import CapstoneCard from './ClientComponent/CapstoneCard'

export default function Home() {
  return (
    <>
      <main>
        <CapstoneCard/>
      </main>
    </>
  )
}
