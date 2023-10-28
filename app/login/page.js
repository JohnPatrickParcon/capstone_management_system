"use client"
import React from 'react'
import Link from 'next/link'

function login() {
  return (
    <div>      
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      <Link href={`/Hello`}>
        <input type="submit" value="Login"></input>
      </Link>
      <div></div>
      <input type="submit" value="Sign Up"></input>
    </div>
  )
}

export default login