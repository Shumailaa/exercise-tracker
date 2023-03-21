import React from 'react'
import DashboardComponent from '../../components/dashboard'
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout'

export default function Dashboard() {
  return <DashboardComponent />
}

Dashboard.getLayout = function(page){
    return <DashboardLayout>{page}</DashboardLayout>
}
