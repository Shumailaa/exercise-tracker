import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { MdLogout, MdMenu, MdPerson, MdSettings } from 'react-icons/md';
import { IconButton, styled, Typography, Avatar, Menu, MenuItem, Box } from '@mui/material';
import useRoutes from '../../../../hooks/useRoutes';
import useLogin from '../../../../hooks/useLogin';

function Navbar({ handleSidebar }) {
  const [user, setUser] = useState({ user_name: '', email: '' });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { gotoLandingPage, logout } = useRoutes(setAnchorEl)
  // const {userDetail} = useUser();
  const handleClose = () => { setAnchorEl(null) }
  const handleClick = (event) => { setAnchorEl(event.currentTarget) };

  useEffect(() => {
    setTimeout(() => {
      const detail = JSON.parse(localStorage.getItem('user'));
      setUser({ user_name: detail.username, email: detail.email });
    }, 1000)
  }, [])

  return (
    <div className={styles.navbar}>
      <Logo component={'div'}>
        <IconButton onClick={handleSidebar}>
          <MdMenu />
        </IconButton>
        <Typography variant='h6' component={'div'} onClick={gotoLandingPage} sx={{position:'relative'}}>
           Exercise
          <Typography variant='caption'   sx={{position:'absolute',right:'0',bottom:'-11px',letterSpacing:'2px'}}>Tracker</Typography>
        </Typography>
      </Logo>
      <Box>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          {/* <Avatar sx={{ width: '30px', height: '30px' }}>{user.user_name[0]}</Avatar> */}
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Box sx={{ padding: '10px 20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* <Avatar sx={{ width: '30px', height: '30px' }}>{user.user_name[0]}</Avatar> */}
            <Box>
              <Typography variant='body1'>{user.user_name}</Typography>
              <Typography variant='body2'>{user.email}</Typography>
            </Box>
          </Box>
          {/* <StyledMenuItem onClick={gotoProfile}> <MdPerson /> Profile</StyledMenuItem>
          <StyledMenuItem onClick={gotoSetting}> <MdSettings /> Setting</StyledMenuItem> */}
          <StyledMenuItem onClick={logout}> <MdLogout /> Logout</StyledMenuItem>
        </Menu>
      </Box>
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

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}))

export default Navbar