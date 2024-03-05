import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
            <Container className='text-center'>
                <Box sx={{
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

            </Container>
        </Box>
    );
};

export default Footer;