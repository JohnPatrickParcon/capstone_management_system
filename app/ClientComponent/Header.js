"use client"
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <Link href={`/login`}>
        Login
      </Link>
    </header>
  )
}

export default Header