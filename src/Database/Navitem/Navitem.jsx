import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
export const NavItem = [
    {
        key: 1,
        label: 'Dashboard',
        path: '/',
        icon: <DashboardIcon />,
    },
    {
        key: 2,
        label: 'User List',
        path: '/userList',
        icon: <PersonIcon />,
    },
    {
        key: 3,
        label: 'VT Account',
        path: '/account',
        icon: <BookmarkAddedIcon />,
    }      
]