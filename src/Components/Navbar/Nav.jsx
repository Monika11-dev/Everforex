import React from 'react';
import { Box,AppBar,Toolbar,Typography,Menu, MenuItem } from '@mui/material';
import { NavItem } from '../../Database/Navitem/Navitem';
import Navmenu from '../Navmenu/Navmenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStyles } from './Navcss';
import IconButton from '@mui/material/IconButton';

const Nav = () => {
  const classes = useStyles();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box component="section">   
        <AppBar className={classes.navBack}>
            <Toolbar >      
                <Typography variant="h6" component="a" href="#" className={classes.nav}>
                  EverForex
                </Typography>
                {NavItem.map((item)=>(
                  <Navmenu color="#819AC8" text={item.label} icon={item.icon}/>
                ))}
                <IconButton onClick={handleOpenUserMenu} className={classes.iconBack} size="small">
                  <AccountCircleIcon className={classes.profileIcon}/>
                </IconButton>         
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  className={classes.profileList}
                  >
                  <MenuItem>
                    <Typography component="a" sx={{ textAlign: 'center' }}>Settings</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography component="a"  sx={{ textAlign: 'center' }}>Logout</Typography>
                  </MenuItem>           
                </Menu>            
            </Toolbar>
        </AppBar>     
      </Box>
    </>
  )
}

export default Nav