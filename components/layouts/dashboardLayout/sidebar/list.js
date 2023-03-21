import {MdDashboard,MdListAlt,MdAddToPhotos, MdCalendarMonth, MdSettings,MdPerson,MdLogout} from 'react-icons/md'
export const items = [
    {
        icon:<MdDashboard />,
        name:'Dashoard',
        to:'/dashboard'
    },
    {
        icon:<MdListAlt />,
        name:'Activities',
        to:'/dashboard/activities'
    },
    {
        icon:<MdAddToPhotos />,
        name:'Add Activity',
        to:'/dashboard/addnew'
    },
    {
        icon:<MdAddToPhotos />,
        name:'Logout',
        to:'/'
    },
    // // {
    // //     icon:<MdCalendarMonth />,
    // //     name:'Calendar',
    // //     to:'/dashboard/calendar'
    // // },
    // {
    //     icon:<MdPerson/>,
    //     name:'Profile',
    //     to:'/dashboard/profile'
    // },
    // {
    //     icon:<MdSettings />,
    //     name:'Setting',
    //     to:'/dashboard/setting'
    // }
    
]