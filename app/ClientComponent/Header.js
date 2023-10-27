"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Header() {
  const currentPath = usePathname();
 console.log(currentPath);
  return (
    <header>
      <Link href={`/login`}>
        Login
      </Link>
    </header>
  )
}

export default Header