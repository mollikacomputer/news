import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import getUsers from "@/utils/getUsers";
import {Grid} from "@mui/material";
const HomePage = async() => {
const users = await getUsers();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <SideBar/>
        </Grid>
      </Grid>
    {
      users.map((user)=> <p key={user.id} className="text-5xl"> {user.name} </p> )
    }
    </div>
  );
};

export default HomePage;