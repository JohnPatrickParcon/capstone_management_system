"use client"
import React from 'react'
//import styles from '../page.module.css' 

function login() {
  return (
    <div className={styles.fill}>      
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      <Link href={`/Hello`}>
        <input type="submit" value="Login"></input>
      </Link>
      <div className={styles.line}></div>
      <input type="submit" value="Sign Up"></input>
    </div>
  )
}

export default login