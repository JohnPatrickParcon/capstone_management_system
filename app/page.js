"use client"

import { supabase } from "@/lib/initSupabase"
import CapstoneTable from "./ClientComponent/CapstoneTable"

export default function Home() {
  return (
    <>
      <main className="m-4">
        <CapstoneTable/>
      </main>
    </>
  )
}
