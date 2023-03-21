import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button ,Box,Typography} from '@mui/material'
import Link from 'next/link'
import imgHome from '../public/h3.jpg'
import Main from '@/components/home/Main'

export default function Home() {
  return (
    <div className={styles.wrapp}>
 <Box sx={{padding:{xs:'0 30px',sm:'0 50px',md:'0 70px'},height:500,
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>
      <div className="content">
      <Typography variant='h4' sx={{letterSpacing:'2px'}}>Let' track</Typography>
        <Typography variant='caption' 
        sx={{position:'relative',right:'0',bottom:'10px',letterSpacing:'2px'}}>
          Exercise is a celebration of what your body can do!</Typography>
        
      </div>
       
      </Box>
       {/* <Image className={styles.bgimg} src={imgHome} alt={'Home image'} /> */}
    {/* <Main /> */}
</div>
  )
}
