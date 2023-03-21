import React, { useEffect, useState } from 'react'

export default function DashboardComponent() {
    const [user ,setUser] = useState("")
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    setUser(localUser.user_name)
  }, [])
  return (
    <div>
        <h1>Welcome, {user}</h1>
    </div>
  )
}
