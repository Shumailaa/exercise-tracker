import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'

export default function DashboardComponent() {
    const [user ,setUser] = useState("")
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    setUser(localUser.user_name)
  }, [])
  return (
    <div className={styles.welcome}>
      <h1>Hey, {user.toUpperCase()} !</h1>
        <h2>Let's Track your Exercise ! </h2>
        
    </div>
  )
}
