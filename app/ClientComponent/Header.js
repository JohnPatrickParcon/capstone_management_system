"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '@nextui-org/button'
import { usePathname } from 'next/navigation'

function Header() {
  const currentPath = usePathname();
  
  return (
    <header>
      { currentPath == '/login'?  null 
      : <Link href={`/login`}>
          <Button color='primary'>Login</Button>
        </Link>  
    }
      
    </header>
  )
}

export default Header