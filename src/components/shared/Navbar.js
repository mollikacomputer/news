"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const navItems = [
    {
    route:"Home",
    pathname:'/',
    },
    {
    route:"Pages",
    pathname:'/pages',
    },
    {
    route:"Category",
    pathname:'/category',
    },
    {
    route:"News",
    pathname:'/news',
    },
    {
    route:"About",
    pathname:'/about',
    },
    {
    route:"Contact",
    pathname:'/contact',
    },
];

const Navbar =() => {
 
  return (
    <AppBar position="static" >
      <Container maxWidth="xl" className='bg-black '>
        <Toolbar disableGutters>
          <Box>
            <h2>Logo</h2>
          </Box>
          <Box className="w-full text-center text-white">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname} >
                <Button className="text-white">
                    {item.route}
                </Button>
              </Link>
            ))}
          </Box>
            <Box>
                <Stack direction="row" sx={{
                    "& svg":{color:"white"}}}
                    >
                    <IconButton>
                            <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                            <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                            <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                            <FacebookIcon></FacebookIcon>
                    </IconButton>
                </Stack>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;



