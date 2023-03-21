import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { StyledNavbar, NavbarButtons, Logo } from './styledNavbar';

export default function LandingNavbar() {
  const router = useRouter();
  const gotoSignin = () => { router.push('/login') }
  const gotoSignup = () => { router.push('/register') }
  const gotoHome = () => { router.push('/') }
  return (
    <StyledNavbar>
      <Logo onClick={gotoHome} component={'div'}>
        <Typography variant='h4' sx={{letterSpacing:'2px'}}>Exercise Tracker</Typography>
        {/* <Typography variant='caption' sx={{position:'absolute',right:'0',bottom:'-15px',letterSpacing:'2px'}}>Tracker</Typography> */}
      </Logo>
      <NavbarButtons>
        <Button variant='outlined' color='inherit' size='medium' startIcon={<HowToRegIcon />} onClick={gotoSignup}>Register</Button>
        <Button variant='contained'  size='medium' startIcon={<LoginIcon />} onClick={gotoSignin}>Log in</Button>
      
      </NavbarButtons>
    </StyledNavbar>
  )
}
