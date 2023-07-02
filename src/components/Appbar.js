import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../assets/images/logo.png'; // Replace '../path-to-your-logo/logo.png' with the actual path to your logo image.

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" style={{ width: '170px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CampusConnect
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ color: 'black', '&:hover': { color: 'blue' } }}> Student </Button>
           

            <Button color="inherit" sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
              Course
            </Button>
            <Button color="inherit" sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
              Faculty
            </Button>
            <Button color="inherit" sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
              Events
            </Button>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
