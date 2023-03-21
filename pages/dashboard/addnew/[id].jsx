import axios from 'axios';
import React from 'react'
import ActivityForm from '../../../components/activityForm';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout'
import { url } from '../../../utils/url';

export async function getServerSideProps(context){
  const {trackId} = context.params;
  console.log("context",trackId);
  const res = await axios.get(`${url}api/track/${trackId}`);
  console.log(res);
  if (!res.status) { return { props: { track: '' } } }
  return {
    props: { track: res.data.data }
  }
}

export default function UpdateActivity({track}) {
  console.log("updatetrack add new",track)
  return (<ActivityForm exercise={track}/>)
}


UpdateActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}