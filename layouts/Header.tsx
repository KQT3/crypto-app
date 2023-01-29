import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {ToggleButton} from "@mui/lab";

interface DrawerMenuI {
    onMenuClick: () => void,
}

const Header = (props: DrawerMenuI) => {
    // const [openCalenderRightSideMenu, setOpenCalenderRightSideMenu] = useState(false);
    // let theme = useTheme();
    // const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    //
    // const toggleRightSideMenu = () => {
    //     setOpenCalenderRightSideMenu(!openCalenderRightSideMenu)
    // };

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar disableGutters>
                <IconButton onClick={props.onMenuClick} sx={{mr: 'none', display: {md: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <ToggleButton
                    size={'large'}
                    value={"check"}
                    selected={false}
                    sx={{border: "2px solid transparent"}}
                    // component={RouterLink} to={LinkToDashboardOverviewView()}
                >
                    <HomeIcon color="action"/>
                </ToggleButton>
                {/*<Link href="#" ml={1} mr={1} hidden={isMobileSize}>Following</Link>*/}
                {/*<Link href="#" ml={1} mr={1} hidden={isMobileSize}>Browse</Link>*/}
                <Box flexGrow={1}/>
                {/*<Tooltip title="Calender" sx={{marginRight: 1}}>*/}
                {/*    <IconButton onClick={toggleRightSideMenu} size={"small"}>*/}
                {/*        <EventAvailableIcon fontSize={"large"}/>*/}
                {/*    </IconButton>*/}
                {/*</Tooltip>*/}
                {/*<Tooltip title="Profile" sx={{marginRight: 1}}>*/}
                {/*    /!*<Link component={RouterLink} to={LinkToProfileView()}>*!/*/}
                {/*    /!*    <IconStyle/>*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*</Tooltip>*/}
                {/*<UseSwitchesCustom />*/}
            </Toolbar>
            {/*<RightSideMenu openDrawer={openCalenderRightSideMenu} closeDrawer={toggleRightSideMenu}/>*/}
        </AppBar>)
}

export default Header;
