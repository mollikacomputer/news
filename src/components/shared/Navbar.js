"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar =() => {
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton>
                <FacebookIcon></FacebookIcon>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;



