
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import {Grid} from "@mui/material";
const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
          <LatestNews/>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <h1> Side Bar</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;