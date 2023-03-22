import AddIcon from '@mui/icons-material/Add';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import DashboardIcon from '@mui/icons-material/Dashboard';
;
export const items = [
    {
        icon:<DashboardIcon />,
        name:'Dashoard',
        to:'/dashboard'
    },
    {
        icon:<FormatListNumberedRtlIcon />,
        name:'Activities',
        to:'/dashboard/activities'
    },
    {
        icon:<AddIcon />,
        name:'Add Activity',
        to:'/dashboard/addnew'
    },
  
   
]