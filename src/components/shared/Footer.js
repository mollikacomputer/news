import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

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

const Footer = () => {
    return (
        <div className="w-full bg-black px-2 py-10">
        <Container>
            <Box>
            <Box className=' text-center' sx={{
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
        </Box>

        </Box>
        <Box className="w-full text-center">
            {navItems.map((item) => (
                <Link key={item} href={item.pathname} >
                <Button className="text-white">
                    {item.route}
                </Button>
                </Link>
            ))}
        </Box>
        
        </Container>
        <Typography color="gray" variant='body2' textAlign="center" >
           @ Newspaper design by Ranjit
        </Typography>
        </div>
    );
};

export default Footer;