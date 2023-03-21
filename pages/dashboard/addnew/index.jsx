import React from 'react'
import ActivityForm from '../../../components/activityForm'
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout'


export default function AddActivity() {
  return (<ActivityForm />)
}


AddActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}