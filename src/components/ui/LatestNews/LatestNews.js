import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
import Typography from '@mui/material/Typography';
import TopNewsImage from "@/assets/top-news.jpg";
import TopNewsImage2 from "@/assets/top-news2.jpg";
import Image from "next/image";
const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card sx={{ }}>
      <CardMedia>
        <Image src={TopNewsImage} width="800" height="100" alt="Top News Image" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='my-5' >
      <Grid item xs={6}>
        <Card sx={{ }}>
        <CardMedia>
          <Image src={TopNewsImage2} width="800" height="100" alt="Top News Image" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
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
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ }}>
        <CardMedia>
          <Image src={TopNewsImage2} width="800" height="100" alt="Top News Image" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ }}>
        <CardMedia>
          <Image src={TopNewsImage2} width="800" height="100" alt="Top News Image" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ }}>
        <CardMedia>
          <Image src={TopNewsImage2} width="800" height="100" alt="Top News Image" />
        </CardMedia>
        <CardContent>
          <Typography component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
};

export default LatestNews;