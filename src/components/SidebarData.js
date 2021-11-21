import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AdjustIcon from '@material-ui/icons/Adjust';
import DescriptionIcon from '@material-ui/icons/Description';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';

export const SidebarData = [
    {
        title:"Home",
        icone:<HomeIcon />,
        link:"/home"
    },
     {
        title:"Profile",
        icone:<PersonIcon />,
        link:"/profile"
    },
    {
        title:"Opportunities",
        icone:<AdjustIcon />,
        link:"/opportunities"
    },
    {
        title:"Documents",
        icone:<DescriptionIcon />,
        link:"/documents"
    },
    {
        title:"Resources",
        icone:<ListIcon />,
        link:"/resources"
    },
     {
        title:"Search",
        icone:<SearchIcon />,
        link:"/search"
    },  

];

