
import styles from './Navbar.module.css';
import {  MdMenu,  } from 'react-icons/md';
import { IconButton, styled, Typography,Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import useRoutes from '../../../../hooks/useRoutes';


function Navbar({ handleSidebar }) {
 
  const { gotoLandingPage,logout } = useRoutes()


 

  return (
    <div className={styles.navbar}>
      <Logo component={'div'}>
        <IconButton onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
        <Typography
        variant='h4' component={'div'} onClick={gotoLandingPage} sx={{position:'relative',letterSpacing:'2px'}}>
           Exercise Tracker
        </Typography>
      </Logo>
      <Button variant='contained'  size='medium' startIcon={<LogoutIcon />} onClick={ logout }>Logout</Button>
    </div>
  )
}

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  letterSpacing: '1px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
}))



export default Navbar