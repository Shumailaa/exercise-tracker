import axios from 'axios';
import React from 'react';
import { url } from '../../../utils/url';
import DashboardLayout from "../../../components/layouts/dashboardLayout/DashboardLayout";
import Detail from '../../../components/cards/detail';
import { Typography } from '@mui/material';

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log("params",context.params)
  const res = await axios.get(`${url}api/track/${id}`);
  if (!res.status) { return { props: { detail: '' } } }
  return {
    props: { detail: res.data.data }
  }
}

export default function ActivityDetail({ detail }) {

  return (
    <div>
      <Typography component={'div'} variant='h5' padding={2}>ActivityDetail</Typography>
      {detail ?  
          <Detail card={detail} />
        :
        "not found"
      } 
    </div>
  )
}

ActivityDetail.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};