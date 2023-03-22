import React from "react";
import ActivityCard from "../../../components/cards";
import DashboardLayout from "../../../components/layouts/dashboardLayout/DashboardLayout";
import { url } from "../../../utils/url";
import axios from "axios";
import { Box, Typography ,Button} from "@mui/material";
import { useRouter } from "next/router"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
export async function getServerSideProps({ req, res }) {
  const token = req.cookies.token;
  console.log('serverside cookies: ', token);
  const response = await axios.get(`${url}api/track`, { params: { token: token } });
  
  const cards = response.data.data || [];
  return {
    props: {
      cards: cards,
    },
  };
}

export default function Activities({ cards }) {
const router =useRouter()
  const CardsRender = () => {
    // return cards[0] ? cards.map((item, index) => <Link href={`/dashboard/activities/${item._id}`} key={index}> <ActivityCard card={item} key={index} /> </Link>) : 'No Activities Found Yet';
    return cards[0] ? cards.map((item, index) => <ActivityCard card={item} key={index} />) :<div> <SentimentVeryDissatisfiedIcon />
    <h4>No Activity Yet</h4>
    <Button variant='text' color='inherit' size='medium' onClick={()=>{router.push('/dashboard/addnew')}}>Let's get started</Button>
    </div>;
  };
  return (
    <Box>
      <Typography component={'div'} variant='h5' padding={2}>Activities</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '10px 20px' }}>
        <CardsRender />
      </Box>
    </Box>

  );
}
Activities.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
