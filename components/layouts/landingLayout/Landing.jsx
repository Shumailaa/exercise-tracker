import React from 'react'
import LandingNavbar from './landing_navbar/LandingNavbar'
import styles from './Landing.module.css'
import { Box } from '@mui/material'
export default function Landing({ children }) {
  return (
    <div className={styles.wrapper}>
     
        <LandingNavbar />
      
      <Box sx={{padding:{xs:'0 30px',sm:'0 50px',md:'0 70px'}}}>
        {children}
       
      </Box>
    </div>
  )
}
