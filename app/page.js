"use client"

import { supabase } from "@/lib/initSupabase"
import CapstoneCard from './ClientComponent/CapstoneCard'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main>
        <Table aria-label="Example empty table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
        </Table>
      </main>
    </>
  )
}
