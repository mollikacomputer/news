import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


import TopNewsImage2 from "@/assets/top-news.jpg";
import Image from "next/image";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     maxWidth: 400,
//     color: theme.palette.text.primary,
//   }));
  
  const message = `Truncation should be conditionally applicable on this long line of text
   as this is a much longer line than what the container can support. `;

const SideBar = () => {

    return (
    <Box className="mt-5">
        <Card sx={{ }}>
        <CardMedia>
          <Image src={TopNewsImage2} width="800" height="100" alt="Top News Image" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom component="div">
            Lizard Sidebar
          </Typography>
          <Typography color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>

        <Grid className='my-5' container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
        <Grid className='my-5' container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
    </Box>
    );
};

export default SideBar;