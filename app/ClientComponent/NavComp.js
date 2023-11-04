"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { checkSession } from '../api/checkSession'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react"

function NavbarComp() {
  const [session, setSession] = useState({});
  
  //current page
  const currentPath = usePathname();
  
  //check session data every render
  useEffect(() => {
    async function sessionData(){
      const result = await checkSession();
      setSession(result);
    }
    sessionData();
  }, [])

  //component to render login/signup/dashboard buttons
  //uses currentPath and session as conditions
  const ButtonRender = () => {
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
    if (session != null) {
      return(
        <NavbarItem>
          <Button as={Link} color="secondary" href="/dashboard" variant="light">
            Dashboard
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

export default NavbarComp