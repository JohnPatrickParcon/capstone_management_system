"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react"
import { createSupabaseBrowserClient } from '../../lib/createSupabaseBrowserClient'

const supabase = createSupabaseBrowserClient()

export default function NavHeader() {
  const [session, setSession] = useState(null)
  const currentPath = usePathname();
  const router = useRouter();

  
  useEffect (() => {
    async function getSession(){
      const res = (await supabase.auth.getSession()).data.session;
      setSession(res)
    }
    getSession();
  }, [currentPath])

  const logoutHandler = async () => {
    await supabase.auth.signOut()
    router.push('/');
  }    

  //component to render login/signup/dashboard buttons
  //uses currentPath and session as conditions
  const ButtonRender = () => {
    if (session != null) {
      return(
        <>
        <NavbarItem>
          <Button onClick={logoutHandler} as={Link} color="secondary" href="/" variant="light">
            Logout
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="/dashboard" variant="light">
            {session?.user?.user_metadata?.name}
          </Button>
        </NavbarItem>
        </>
      )
    } 
    else{
      if (currentPath == "/login") {
        return(
          <NavbarItem>
              <Button as={Link} color="secondary" href="/signup" variant="light">
                Sign Up
              </Button>
          </NavbarItem>
        )
      }
      if (currentPath == "/signup") {
        return(
          <NavbarItem>
            <Button as={Link} color="secondary" href="/login" variant="light">
              Login
            </Button>
          </NavbarItem>
        )
      }
      else {
        return(
          <>
            <NavbarItem>
              <Button as={Link} color="secondary" href="/login" variant="light">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="secondary" href="/signup" variant="light">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )
      }
    }
    
  }

  return (
    <Navbar shouldHideOnScroll>
      <NavbarItem>
        <Link href='/' color='secondary'>Home</Link>
      </NavbarItem>
      <NavbarContent justify="end">
        <ButtonRender/>
      </NavbarContent>
    </Navbar>
  )
}
