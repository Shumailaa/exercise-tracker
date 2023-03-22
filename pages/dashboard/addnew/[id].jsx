import axios from 'axios';
import React from 'react'
import ActivityForm from '../../../components/activityForm';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout'
import { url } from '../../../utils/url';

export async function getServerSideProps(context){

  const id = context.params.id;
  const res = await axios.get(`${url}api/track/${id}`);
  console.log(res.data);
  if (!res.status) { return { props: { track: '' } } }
  return {
      props: { track: res.data.data }
    }
}

export default function UpdateActivity({track}) {
  console.log("updatetrack add new",track)
  return (<ActivityForm track={track}/>)
}


UpdateActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}